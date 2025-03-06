"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Twitter,
  Instagram,
  Github,
  Youtube,
  ScanSearch,
  Speech,
  Joystick,
} from "lucide-react";
import Link from "next/link";
import { BentoGrid, type BentoItem } from "@/components/Bento";

const itemsSample: BentoItem[] = [
  {
    title: "Frailty-Check-System",
    meta: "From classroom management to measurement",
    description:
      "Developed a web system using Django and speech recognition to support frailty checks for the elderly.",
    icon: <Speech className="w-4 h-4 text-blue-500" />,
    status: "Closed",
    tags: ["Python", "Django", "JavaScript"],
    colSpan: 2,
  },
  {
    title: "Supplemental-Documentation-System",
    meta: "Video to Documentation",
    description:
      "Developed a system to create note-taking materials by extracting audio and slides from lecture videos to support hearing-impaired individuals.",
    icon: <ScanSearch className="w-4 h-4 text-emerald-500" />,
    status: "Closed",
    tags: ["PHP", "Python"],
    colSpan: 2,
  },
  {
    title: "Taiko-Re-Strap-Next",
    meta: "FullHD image quality support",
    description: "A .tja file player.",
    icon: <Joystick className="w-4 h-4 text-purple-500" />,
    tags: ["C Sharp", "DxLib"],
    status: "In Progress",
    colSpan: 2,
  },
  {
    title: "Taiko-Re-Strap",
    meta: "TJAPlayer3 Derivative Software",
    description: "A .tja file player.(feat. DTXMania & TJAPlayer2 forPC)",
    icon: <Joystick className="w-4 h-4 text-sky-500" />,
    status: "Closed",
    tags: ["C Sharp", ".NET Framework"],
    colSpan: 2,
  },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden text-zinc-50">
        {/* Magical forest mist effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(150, 150, 150, 0.2), transparent 80%)`,
          }}
        />

        <div className="container relative flex max-w-3xl flex-col items-center justify-center gap-8 px-4 text-center">
          {/* Profile Image with enchanted border */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-600 via-zinc-500/50 to-zinc-600 opacity-75 blur-md" />
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-zinc-700">
              <Image
                src="/hamaryo.jpg"
                alt="Profile"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="bg-gradient-to-r from-zinc-300 via-zinc-200/90 to-zinc-300 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl">
              Hamaguchi Ryota
            </h1>
            <p className="text-xl text-zinc-400">System Engineer, Programmer</p>
          </div>

          <p className="max-w-[600px] text-zinc-200/80 md:text-lg">
            PC turns off the power.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Nature-themed magical buttons */}
            <Link
              href="https://twitter.com/_hamaryo"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="group border-zinc-800/50 bg-zinc-900/30 text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
              >
                <Twitter className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="sr-only">X</span>
              </Button>
            </Link>
            <Link
              href="https://www.instagram.com/hamaryo_2"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="group border-zinc-800/50 bg-zinc-900/30 text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
              >
                <Instagram className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link
              href="https://github.com/HamaguchiRyota"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="group border-zinc-800/50 bg-zinc-900/30 text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
              >
                <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.youtube.com/@Fumolat"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="group border-zinc-800/50 bg-zinc-900/30 text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
              >
                <Youtube className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="sr-only">YouTube</span>
              </Button>
            </Link>
          </div>

          <div className="flex gap-4 flex-row">
            <Button
              variant="outline"
              className="border-zinc-800/50 bg-zinc-900/30 text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200"
              disabled
            >
              Project
            </Button>
            <Button
              className="relative overflow-hidden bg-gradient-to-r from-zinc-700 to-zinc-600 text-zinc-50 transition-all hover:from-zinc-600 hover:to-zinc-500"
              disabled
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-600 to-zinc-500 opacity-0 transition-opacity hover:opacity-100" />
            </Button>
          </div>
        </div>
      </div>
      <div className="container max-w-3xl mx-auto mt-8">
        <BentoGrid items={itemsSample} />
      </div>
    </div>
  );
}
