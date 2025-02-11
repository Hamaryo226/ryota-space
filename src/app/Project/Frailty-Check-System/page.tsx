import articleData from "public/Article/fcs.json";
import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { ImageWithAlt } from "@/components/image-with-alt";

export const metadata: Metadata = {
  title: "高齢者に向けたフレイルチェックシステム開発プロジェクト｜ryota-space",
  description:
    "高齢者に向けたフレイルチェックシステム開発プロジェクトの概要ページ",
  appleWebApp: true,
};

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
        <article className="mt-7 mb-7 pb-2 border-b-2 border-slate-500/15">
          <h1 className="font-bold sm:text-4xl sd:text-3xl text-2xl">
            {articleData.title}
          </h1>

          <div className="flex flex-row mt-1 gap-1 leading-7 text-gray-500">
            <CalendarDays width={20} hanging={20} />
            <p>{articleData.date}</p>
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
