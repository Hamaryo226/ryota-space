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
const stepInfo = document.querySelector('#step-info');
const timerDisplay = document.querySelector('#timer');
const countStep0 = document.querySelector('#count-step0');
const countStep1 = document.querySelector('#count-step1');
const countStep2 = document.querySelector('#count-step2');

let recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
recognition.lang = 'ja-JP';
recognition.interimResults = true;
recognition.continuous = false; // 一回で止まるように設定

let finalTranscript = ''; // 確定した認識結果
let step = 0; // 0: ぱ, 1: た, 2: か
let timer; // タイマーを格納するための変数
let currentCount = 0; // 1サイクルのカウント数
let countdownInterval; // カウントダウンタイマ
const stepCounts = [0, 0, 0]; // 各ステップのカウントを保持

// ひらがな or カタカナで計測されるので...
const steps = [
  { wordHiragana: 'ぱ', wordKatakana: 'パ' },
  { wordHiragana: 'た', wordKatakana: 'タ' },
  { wordHiragana: 'か', wordKatakana: 'カ' }
];

// ステップ情報を更新
function updateStepInfo() {
  if (step < steps.length) {
    stepInfo.textContent = \`「\${steps[step].wordKatakana}」\`;
  } else {
    stepInfo.textContent = '音声認識が完了しました。';

    // 結果ページへ3秒後に自動遷移
    timer = setTimeout(() => {
      window.location.href = './result';
    }, 3000);
  }
}

function startRecognition() {
  if (step >= steps.length) {
      alert('音声認識は全て終了しました。');
    return
  }
  currentCount = 0; // カウントをリセット
  recognition.start();

  // 停止プロセス
  clearInterval(countdownInterval);
  let timeLeft = 5;
  timerDisplay.textContent = timeLeft;

  // タイマーのカウントダウン表示
  countdownInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
  timer = setTimeout(() => {
    recognition.stop();
  }, 5000);
}

if (window.SpeechRecognition || window.webkitSpeechRecognition) {
  recognition.onresult = (event) => {
    let interimTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      let transcript = event.results[i][0].transcript;
      const targetWordHiragana = steps[step].wordHiragana;
      const targetWordKatakana = steps[step].wordKatakana;

      // 確定した認識結果のみをカウント
      if (event.results[i].isFinal && (transcript.includes(targetWordHiragana) || transcript.includes(targetWordKatakana))) {
        finalTranscript += transcript;
        const countHiragana = checker(transcript, targetWordHiragana);
        const countKatakana = checker(transcript, targetWordKatakana);
        currentCount += countHiragana + countKatakana; // ひらがなとカタカナのカウントを合算
      } else {
        interimTranscript = transcript;
      }
    }
  };

  recognition.onend = () => {
    // 認識終了後の処理
    stepCounts[step] += currentCount; // 各ステップのカウントを保存
    updateCountDisplay();

    // 各ステップの結果をローカルストレージに保存する
    localStorage.setItem(\`step\${step}\`, currentCount);

    // 次のステップに進む
    step++;
    updateStepInfo();
  };

  // 開始ボタン
  startBtn.addEventListener('click', startRecognition);

  // 停止ボタン
  stopBtn.addEventListener('click', () => {
    recognition.stop();
    clearTimeout(timer); // 手動停止時にタイマーもクリア
    clearInterval(countdownInterval);
  });
} else {
  alert('このブラウザは音声認識に対応していません。');
}

// 特定の文字の出現回数をカウントする関数
function checker(str, target) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === target) {
      count++;
    }
  }
  return count;
}

// 途中経過用
function updateCountDisplay() {
  countStep0.textContent = stepCounts[0];
  countStep1.textContent = stepCounts[1];
  countStep2.textContent = stepCounts[2];

  // フォームに値を設定
  document.getElementById('step0').value = stepCounts[0];
  document.getElementById('step1').value = stepCounts[1];
  document.getElementById('step2').value = stepCounts[2];
}

recognition.onend = () => {
  // 認識終了後の処理
  stepCounts[step] += currentCount; // 各ステップのカウントを保存
  updateCountDisplay();

  // 各ステップの結果をローカルストレージに保存する
  localStorage.setItem(\`step\${step}\`, currentCount);

  // 次のステップに進む
  step++;
  updateStepInfo();

  // 全てのステップが終了したらフォームを送信
  if (step >= steps.length) {
    document.getElementById('resultForm').submit();
  }
};

// 初期化時にステップ情報を表示
updateStepInfo();
`.trim();

export default function ProjectPage() {
  return (
    <div className="px-5 py-8">
      <div className="w-full max-w-5xl justify-center mx-auto">
        <ImageWithAlt
          className=""
          src="/fcs.png"
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
