"use client";

import { useState } from "react";
import Image from "next/image";
import articleData from "public/Article/sds.json";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { AccordionCodeBlock } from "@/components/accordion-code-block";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectPage() {
  const [isEnglish, setIsEnglish] = useState(false);

  const data = isEnglish ? articleData.content.en : articleData.content.ja;
  const references = isEnglish
    ? articleData.references.en
    : articleData.references.ja;
  const links = isEnglish ? articleData.links.en : articleData.links.ja;

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
        src={articleData.thumbnail}
        alt={articleData.systemname}
        width={1920}
        height={1080}
      />
      <div className="px-5">
        <p className="text-xs font-semibold text-zinc-600 text-center py-1">
          {articleData.systemname}
        </p>
        <div className="py-4 lg:py-7 text-center">
          <p className="text-4xl font-semibold py-4 lg:py-7">
            {isEnglish ? articleData.title.en : articleData.title.ja}
          </p>
          <Button
            onClick={() => setIsEnglish(!isEnglish)}
            className="gap-0 ml-auto"
            variant="ghost"
          >
            <span></span>
            <Languages width={25} />
          </Button>
        </div>
        {Object.entries(data).map(([sectionTitle, sectionContent]) => (
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
              title={
                isEnglish
                  ? articleData.code.saveframesCode.title.en
                  : articleData.code.saveframesCode.title.ja
              }
              description={
                isEnglish
                  ? articleData.code.saveframesCode.description.en
                  : articleData.code.saveframesCode.description.ja
              }
              code={articleData.code.saveframesCode.code}
              language={articleData.code.saveframesCode.language}
              codeTitle={articleData.code.saveframesCode.filename}
            />
            <AccordionCodeBlock
              title={
                isEnglish
                  ? articleData.code.removeCode.title.en
                  : articleData.code.removeCode.title.ja
              }
              description={
                isEnglish
                  ? articleData.code.removeCode.description.en
                  : articleData.code.removeCode.description.ja
              }
              code={articleData.code.removeCode.code}
              language={articleData.code.removeCode.language}
              codeTitle={articleData.code.removeCode.filename}
            />
            <AccordionCodeBlock
              title={
                isEnglish
                  ? articleData.code.ocrCode.title.en
                  : articleData.code.ocrCode.title.ja
              }
              description={
                isEnglish
                  ? articleData.code.ocrCode.description.en
                  : articleData.code.ocrCode.description.ja
              }
              code={articleData.code.ocrCode.code}
              language={articleData.code.ocrCode.language}
              codeTitle={articleData.code.ocrCode.filename}
            />
          </div>
        </article>

        <article className="py-4">
          <h3 className="font-bold text-3xl mt-5 mb-5">
            {isEnglish ? "Reference Links" : "参考リンク"}
          </h3>

          <ul className="leading-8">
            {Object.entries(references).map(([text, url]) => (
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

        <article className="py-4">
          <h3 className="font-bold text-3xl mt-5 mb-5">
            {isEnglish ? "Project Links" : "プロジェクトリンク"}
          </h3>

          <ul className="leading-8">
            {Object.entries(links).map(([text, url]) => (
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
