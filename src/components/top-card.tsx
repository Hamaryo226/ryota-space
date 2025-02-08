"use client";
import React from "react";
import Image from "next/image";

interface CardProps {
  thumbnail: string;
  title: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ thumbnail, title, date }) => {
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
        <p className="text-xs text-gray-400 mt-3">{date}</p>
      </div>
    </div>
  );
};

export default Card;
