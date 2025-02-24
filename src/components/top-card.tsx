"use client";
import type React from "react";
import Image from "next/image";
import { CalendarDays, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CardProps {
  thumbnail: string;
  title: string;
  date: string;
  tags: string[];
  eng?: boolean; // Add eng prop with default value as false
}

const Card: React.FC<CardProps> = ({
  thumbnail,
  title,
  tags,
  date,
  eng = false,
}) => {
  return (
    <div className="rounded-2xl border shadow-lg dark:border-zinc-700 dark:bg-zinc-800/70 transition delay-75 duration-200 ease-in-out hover:-translate-y-2 hover:scale-60">
      <Image
        className="rounded-t-2xl aspect-video"
        src={thumbnail || "/NotFound.webp"}
        height={1920}
        width={1080}
        alt="Project Thumbnail"
        onContextMenu={(e) => e.preventDefault()}
        onSelect={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
      />

      <div className="p-3 rounded-b-2x shadow-inner">
        <h1 className="font-bold text-xl mb-3">{title}</h1>
        <div className="flex flex-row gap-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="content-center bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 shadow-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex flex-row gap-1 leading-7 text-gray-500 mt-3">
          <CalendarDays width={18} height={18} />
          <p className="text-sm text-gray-500 content-center justify-center">
            {date}
          </p>
          {eng && <Languages className="ml-auto" width={18} height={18} />}
        </div>
      </div>
    </div>
  );
};

export default Card;
