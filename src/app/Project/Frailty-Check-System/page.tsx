import articleData from "public/Article/fcs.json";
import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { ImageWithAlt } from "@/components/image-with-alt";
import { AccordionCodeBlock } from "@/components/accordion-code-block";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "高齢者に向けたフレイルチェックシステム開発プロジェクト｜ryota-space",
  description:
    "高齢者に向けたフレイルチェックシステム開発プロジェクトの概要ページ",
  appleWebApp: true,
};

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
  return (
    <div className="px-5 py-8">
      <div className="w-full max-w-5xl justify-center mx-auto">
        <ImageWithAlt
          className=""
          src="/fcs.webp"
          alt="フレイルチェックシステム。（左）管理画面、（右）滑舌測定機能"
          width={1920}
          height={1080}
        />
        <article className="mt-7 mb-7 pb-2 border-b-2 border-slate-500/30">
          <h1 className="font-bold sm:text-4xl sd:text-3xl text-2xl">
            {articleData.title}
          </h1>

          <div className="flex flex-row mt-1 gap-1 leading-7 text-gray-500">
            <CalendarDays width={20} hanging={20} />
            <p>{articleData.date}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-2 mb-2">
            <Badge
              variant="outline"
              className="bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 shadow-sm"
            >
              Python
            </Badge>
            <Badge
              variant="outline"
              className="bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 shadow-sm"
            >
              django
            </Badge>
            <Badge
              variant="outline"
              className="bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 shadow-sm"
            >
              javascript
            </Badge>
          </div>
        </article>

        {Object.entries(articleData.content).map(
          ([sectionTitle, sectionContent]) => (
            <article key={sectionTitle}>
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">
                  {sectionTitle}
                </h3>
              </div>
              <div className="leading-8">{sectionContent}</div>
            </article>
          )
        )}

        <article className="mt-7">
          <div className="border-l-4 border-indigo-500">
            <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">
              システムに関するコード
            </h3>
          </div>
          <div className="max-w-full space-y-4">
            <AccordionCodeBlock
              title="滑舌測定"
              description="滑舌測定機能で使用している音声認識のコードです。"
              code={Code}
              language="javascript"
              codeTitle="web_speech_api.js
"
            />
          </div>
        </article>

        <article>
          <div className="border-l-4 border-indigo-500">
            <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">参考リンク</h3>
          </div>
          <ul className="leading-8">
            {Object.entries(articleData.links).map(([text, url]) => (
              <li key={url}>
                <a
                  className="font-mono text-indigo-400 font-bold after:content-['_↗'] hover:underline decoration-indigo-500"
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
