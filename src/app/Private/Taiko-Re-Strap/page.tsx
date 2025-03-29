"use client";

import { useState } from "react";
import Image from "next/image";
import articleData from "public/Article/trs.json";
import { Button } from "@/components/ui/button";
import { Languages, Share, Info, Ellipsis } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProjectPage() {
  const [isEnglish, setIsEnglish] = useState(false);

  const data = isEnglish ? articleData.content.en : articleData.content.ja;
  const links = isEnglish ? articleData.links.en : articleData.links.ja;

  return (
    <div className="w-full max-w-5xl max-h-5xl justify-center mx-auto">
      <Image
        className="lg:rounded-lg"
        src={articleData.thumbnail}
        alt={articleData.systemname}
        width={1920}
        height={1080}
      />

      <div className="flex items-center justify-between gap-2 px-3 py-4">
        <Button variant="ghost">
          <Info />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => setIsEnglish(!isEnglish)}>
                <Languages />
                翻訳
                <DropdownMenuShortcut>⇧T</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share />
                共有
                <DropdownMenuShortcut>⇧S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-5">
        <div className="py-2 lg:py-4 text-center">
          <p className="text-4xl font-semibold py-2 lg:py-4">
            <span className={isEnglish ? "text-3xl" : "text-4xl"}>
              {isEnglish ? articleData.title.en : articleData.title.ja}
            </span>
          </p>
        </div>
        {Object.entries(data).map(([sectionTitle, sectionContent]) => (
          <article key={sectionTitle} className="py-4">
            <p className="font-bold text-3xl mt-4 mb-5">{sectionTitle}</p>
            <div className="leading-7 text-zinc-400">{sectionContent}</div>
          </article>
        ))}

        <article className="py-4">
          <h3 className="font-bold text-3xl mt-5 mb-5">
            {isEnglish ? "Demo Video" : "デモ動画"}
          </h3>
          <div className="px-5">
            <iframe
              className="aspect-video w-full rounded-2xl"
              src="https://www.youtube.com/embed/lHob7eKV1a8"
            ></iframe>
          </div>
        </article>

        <article className="py-4">
          <h3 className="font-bold text-3xl mt-5 mb-5">
            {isEnglish ? "Reference Links" : "参考リンク"}
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
