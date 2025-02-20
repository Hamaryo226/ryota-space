"use client";

import { useState } from "react";
import articleData from "public/Article/sds.json";
//import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { ImageWithAlt } from "@/components/image-with-alt";
import { AccordionCodeBlock } from "@/components/accordion-code-block";
import { Badge } from "@/components/ui/badge";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
/*
export const metadata: Metadata = {
  title: "聴覚障碍者に向けたノートテイクシステム開発プロジェクト｜ryota-space",
  description:
    "聴覚障碍者に向けたノートテイクシステム開発プロジェクトの概要ページ",
  appleWebApp: true,
};
*/

const saveframesCode = `
import sys
import os
import cv2

def save_frames(video_path, dir_path, basename, ext='jpg', output_interval=3):
    cap = cv2.VideoCapture(video_path)

    if not cap.isOpened():
        print("動画ファイルが見つかりませんでした。￥n")
        return

    os.makedirs(dir_path, exist_ok=True)
    base_path = os.path.join(dir_path, basename)

    frame_rate = int(cap.get(cv2.CAP_PROP_FPS))
    output_interval_frames = frame_rate * output_interval
    digit = len(str(int(cap.get(cv2.CAP_PROP_FRAME_COUNT))))

    n = 0
    frame_count = 0

    while True:
        ret, frame = cap.read()
        if ret:
            frame_count += 1
            if frame_count % output_interval_frames == 0:
                fname = '{}_{}.{}'.format(base_path, str(n).zfill(digit), ext)
                cv2.imwrite(fname, frame)
                n += 1
                print("Saved frame:", fname)
        else:
            break
    cap.release()

save_frames(video_str, dir_path + "/uploads/" + video_id + "/", 'img', output_interval=1)
`.trim();

const removeCode = `
import sys
import os
import hashlib
from difflib import SequenceMatcher

def remove_images(dir_path, threshold=0.4):
    file_list = os.listdir(dir_path)
    hashes = {}

    for filename in file_list:
        filepath = os.path.join(dir_path, filename)

        with open(filepath, 'rb') as f:
            filehash = hashlib.md5(f.read()).hexdigest()

        is_duplicate = False

        for hash_value, existing_path in hashes.items():
            similarity = SequenceMatcher(None, filehash, hash_value).ratio()
            if similarity >= threshold:
                is_duplicate = True
                os.remove(filepath)
                #print("Remove:", filepath)
                break

        if not is_duplicate:
            hashes[filehash] = filepath

remove_images(dir_path + "/" + input_str, threshold=0.39)
`.trim();

const ocrCode = `
import sys
import os
import pyocr
from PIL import Image, ImageEnhance
import glob

def img_to_txt(img_folder_path):
    ocr_path = dir_path + '/py/tessract-ocr/'  # OCRエンジン?のパス
    tessdata_path = dir_path + '/py/tessract-ocr/tessdata/'  # 日本語の学習データのパス
    img_files = glob.glob(os.path.join(img_folder_path, '*.jpg'))

    os.environ["PATH"] += os.pathsep + ocr_path
    os.environ["TESSDATA_PREFIX"] = tessdata_path

    # OCRエンジン取得
    tools = pyocr.get_available_tools()
    tool = tools[0]

    # OCRの設定 ※tesseract_layout=6が精度には重要。デフォルトは3
    builder = pyocr.builders.TextBuilder(tesseract_layout=6)
    f = open(img_folder_path + video_id + '.txt', 'w', encoding='utf-8')
    for img_file in img_files:

        # 解析画像読み込み
        img = Image.open(img_file)

        # 適当に画像処理(何もしないと結構制度悪いです・・)
        img_g = img.convert('L')  # Gray変換
        enhancer = ImageEnhance.Contrast(img_g)  # コントラストを上げる
        img_con = enhancer.enhance(2.0)  # コントラストを上げる

        # 画像からOCRで日本語を読んで、文字列として取り出す
        txt_pyocr = tool.image_to_string(img_con, lang='jpn', builder=builder)

        # 半角スペースを消す ※読みやすくするため
        txt_pyocr = txt_pyocr.replace(' ', '')
        txt_pyocr = txt_pyocr.replace('|', '')
        txt_pyocr = txt_pyocr.replace('mm', '')
        txt_pyocr = txt_pyocr.replace('=', '')
        txt_pyocr = txt_pyocr.replace('~', '')
        f.write(txt_pyocr + '￥n' + '￥n')
        print(txt_pyocr)
    f.close()    
    
img_to_txt(dir_path + "/" + input_str)# OCRするフォルダパス
`.trim();

export default function ProjectPage() {
  const [isEnglish, setIsEnglish] = useState(false);

  const data = isEnglish ? articleData.english : articleData;
  return (
    <div className="px-5 py-8">
      <div className="w-full max-w-5xl justify-center mx-auto">
        <ImageWithAlt
          className="rounded-2xl w-full"
          src="/TheLost.webp"
          alt="実際のノートテイクシステム画面"
          width={1920}
          height={1080}
        />
        <article className="mt-7 mb-7 pb-2 border-b-2 border-slate-500/30">
          <h1 className="font-bold sm:text-4xl sd:text-3xl text-2xl">
            {data.title}
          </h1>

          <div className="flex flex-row mt-1 gap-1 leading-7 text-gray-500">
            <CalendarDays width={20} hanging={20} />
            <p>{data.date}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="mt-2 mb-2 bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 shadow-sm"
            >
              Python
            </Badge>
            <Badge
              variant="outline"
              className="mt-2 mb-2 bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 shadow-sm"
            >
              javascript
            </Badge>
            <Button
              onClick={() => setIsEnglish(!isEnglish)}
              className="gap-0 ml-auto"
              variant="ghost"
            >
              <span>{isEnglish}</span>
              <Languages width={25} />
            </Button>
          </div>
        </article>

        {Object.entries(data.content).map(([sectionTitle, sectionContent]) => (
          <article key={sectionTitle}>
            <div className="border-l-4 border-indigo-500">
              <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">
                {sectionTitle}
              </h3>
            </div>
            <div className="leading-8">{sectionContent}</div>
          </article>
        ))}

        <article className="mt-7">
          <div className="border-l-4 border-indigo-500">
            <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">
              {isEnglish ? "System Code" : "システムに関するコード"}
            </h3>
          </div>
          <div className="max-w-full space-y-4">
            <AccordionCodeBlock
              title={
                isEnglish ? "01 - sequential number image" : "01 - 連番画像出力"
              }
              description={
                isEnglish
                  ? "Output sequentially numbered images from an input video file (path) using opencv"
                  : "入力された動画ファイル(パス)からopencvを使って連番画像を出力する"
              }
              code={saveframesCode}
              language="python"
              codeTitle="saveframes.py"
            />
            <AccordionCodeBlock
              title={
                isEnglish ? "02 - Remove duplicate images" : "02 - 重複画像削除"
              }
              description={
                isEnglish
                  ? "Remove duplicate images from sequentially numbered images using diff"
                  : "連番画像から重複した画像をdiffを使って削除する"
              }
              code={removeCode}
              language="python"
              codeTitle="remove.py"
            />
            <AccordionCodeBlock
              title={isEnglish ? "03 - Text Recognition" : "03 - テキスト認識"}
              description={
                isEnglish
                  ? "Recognizing text from images using tesseract-ocr"
                  : "tesseract-ocrを使って画像からテキストを認識する"
              }
              code={ocrCode}
              language="python"
              codeTitle="ocr.py"
            />
          </div>
        </article>

        <article>
          <div className="border-l-4 border-indigo-500">
            <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">
              {isEnglish ? "References" : "参考文献"}
            </h3>
          </div>
          <ul className="leading-8">
            {Object.entries(data.references).map(([text, url]) => (
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

        <article>
          <div className="border-l-4 border-indigo-500">
            <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">
              {isEnglish ? "Reference Links" : "参考リンク"}
            </h3>
          </div>
          <ul className="leading-8">
            {Object.entries(data.links).map(([text, url]) => (
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
