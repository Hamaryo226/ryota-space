"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { Twitter, Instagram, Github, Youtube } from "lucide-react";
import Link from "next/link";
//import { motion } from "framer-motion";

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
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#1e1e1e] text-zinc-50">
      {/* Magical forest mist effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(150, 150, 150, 0.2), transparent 80%)`,
        }}
      />

      {/* Enchanted forest decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vine-like borders */}
        <div className="absolute left-0 top-0 h-32 w-32">
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-zinc-600/40 to-transparent" />
          <div className="absolute h-[1px] w-full bg-gradient-to-r from-zinc-600/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 h-32 w-32">
          <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-zinc-600/40 to-transparent" />
          <div className="absolute bottom-0 h-[1px] w-full bg-gradient-to-l from-zinc-600/40 to-transparent" />
        </div>

        {/* Mystical forest patterns */}
        <div className="absolute left-8 top-8 h-64 w-64 rounded-full bg-gradient-to-br from-zinc-900/20 via-zinc-800/10 to-transparent" />
        <div className="absolute bottom-8 right-8 h-64 w-64 rounded-full bg-gradient-to-tl from-zinc-900/20 via-zinc-800/10 to-transparent" />
      </div>

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

      <Footer />
    </div>
  );
}
