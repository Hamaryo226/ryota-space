"use client";

import { useState } from "react";
import Image from "next/image";
import articleData from "public/Article/fcs.json";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { AccordionCodeBlock } from "@/components/accordion-code-block";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const Code = `
const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const timerDisplay = document.querySelector('#timer');

let recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
recognition.lang = 'ja-JP';
recognition.interimResults = true;
recognition.continuous = false;

let step = 0;
let timer;
let currentCount = 0;
let countdownInterval;
const steps = [ 'ぱ', 'た', 'か' ];

function startRecognition() {
  if (step >= steps.length) return;
  currentCount = 0;
  recognition.start();

  clearInterval(countdownInterval);
  let timeLeft = 5;
  timerDisplay.textContent = timeLeft;

  countdownInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) clearInterval(countdownInterval);
  }, 1000);

  timer = setTimeout(() => recognition.stop(), 5000);
}

if (window.SpeechRecognition || window.webkitSpeechRecognition) {
  recognition.onresult = (event) => {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      let transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal && transcript.includes(steps[step])) {
        currentCount += checker(transcript, steps[step]);
      }
    }
  };

  recognition.onend = () => {
    step++;
    if (step < steps.length) startRecognition();
  };

  startBtn.addEventListener('click', startRecognition);
  stopBtn.addEventListener('click', () => {
    recognition.stop();
    clearTimeout(timer);
    clearInterval(countdownInterval);
  });
} else {
  alert('このブラウザは音声認識に対応していません。');
}

function checker(str, target) {
  return str.split(target).length - 1;
}
`.trim();

export default function ProjectPage() {
  const [isEnglish, setIsEnglish] = useState(false);

  const data = isEnglish ? articleData.english : articleData;
  return (
    <div className="w-full max-w-5xl max-h-5xl justify-center mx-auto">
      <div className="flex flex-row items-center justify-between lg:px-0 px-4 py-4">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ChevronLeft />
          </Button>
        </Link>
      </div>
      <Image
        className="lg:rounded-lg"
        src="/fcs.webp"
        alt="Frailty-Check-System"
        width={1920}
        height={1080}
      />
      <div className="px-5">
        <p className="text-xs font-semibold text-zinc-600 text-center py-1">
          Frailty Check System
        </p>
        <div className="py-4 lg:py-7 text-center">
          <p className="text-4xl font-semibold py-4 lg:py-7">{data.title}</p>
          {/* Profile Image with enchanted border 
          <time className="text-center text-gray-500">null</time>
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-zinc-700">
            <Image
              src="/hamaryo.jpg"
              alt="Profile"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          */}
          <Button
            onClick={() => setIsEnglish(!isEnglish)}
            className="gap-0 ml-auto"
            variant="ghost"
          >
            <span>{isEnglish}</span>
            <Languages width={25} />
          </Button>
        </div>
        {Object.entries(data.content).map(([sectionTitle, sectionContent]) => (
          <article key={sectionTitle} className="py-4">
            <p className="font-bold text-3xl mt-4 mb-5">{sectionTitle}</p>
            <div className="leading-7 text-zinc-400">{sectionContent}</div>
          </article>
        ))}
        <article className="py-4">
          <p className="font-bold text-3xl mt-5 mb-5">
            {isEnglish ? "System Code" : "システムに関するコード"}
          </p>

          <div className="max-w-full space-y-4">
            <AccordionCodeBlock
              title={isEnglish ? "Smoothness measurement function" : "滑舌測定"}
              description={
                isEnglish
                  ? "This is the speech recognition code used in the glottometry function."
                  : "滑舌測定機能で使用している音声認識のコードです。"
              }
              code={Code}
              language="javascript"
              codeTitle="web_speech_api.js"
            />
          </div>
        </article>

        <article className="py-4">
          <h3 className="font-bold text-3xl mt-5 mb-5">
            {isEnglish ? "Reference Links" : "参考リンク"}
          </h3>

          <ul className="leading-8">
            {Object.entries(data.links).map(([text, url]) => (
              <li key={url}>
                <a
                  className="font-mono text-indigo-300 font-bold after:content-['_↗'] hover:underline decoration-indigo-300"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
