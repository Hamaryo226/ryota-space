"use client";
import React from "react";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CardProps {
  thumbnail: string;
  title: string;
  date: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ thumbnail, title, tags, date }) => {
  return (
    <div className="rounded-2xl border border-color-indigo shadow-lg duration-300">
      <Image
        className="rounded-t-2xl w-full"
        src={thumbnail}
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
              variant="secondary"
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 content-center"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex flex-row gap-1 leading-7 text-gray-500 mt-3">
          <CalendarDays width={18} hanging={18} />
          <p className="text-sm text-gray-500 content-center justify-center">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
