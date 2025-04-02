"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithAlt } from "@/components/image-with-alt";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Code, Github, ArrowUpRight } from "lucide-react";

const technologies = [
  {
    name: "Next.js",
    description: "Reactベースのフルスタックフレームワーク",
    icon: {
      light: "/nextjs-icon-light-background.svg",
      dark: "/nextjs-icon-dark-background.svg",
    },
    url: "https://nextjs.org/",
  },
  {
    name: "shadcn",
    description: "再利用可能なUIコンポーネントライブラリ",
    icon: {
      light: "/shadcn-ui-seeklogo.svg",
      dark: "/shadcn-ui-seeklogo.svg",
    },
    url: "https://ui.shadcn.com/",
    invertDark: true,
  },
  {
    name: "Vercel",
    description: "高速なWebホスティングプラットフォーム",
    icon: {
      light: "/vercel-icon-dark.svg",
      dark: "/vercel-icon-dark.svg",
    },
    url: "https://vercel.com/",
    invertDark: true,
  },
];

const tabs = [
  {
    id: "about",
    label: "サイトについて",
    icon: <FileText className="h-4 w-4 mr-2" />,
  },
  {
    id: "tech",
    label: "技術スタック",
    icon: <Code className="h-4 w-4 mr-2" />,
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("about");
  const [mounted, setMounted] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({
    about: null,
    tech: null,
  });
  const [hoverStyle, setHoverStyle] = useState({});
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" });
  const [direction, setDirection] = useState(0); // -1: 左へ, 1: 右へ

  useEffect(() => {
    setMounted(true);
  }, []);

  // ホバー時のスタイルを更新
  useEffect(() => {
    if (hoveredTab && tabRefs.current[hoveredTab]) {
      const hoveredElement = tabRefs.current[hoveredTab];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredTab]);

  // アクティブタブのスタイルを更新
  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const activeElement = tabRefs.current[activeTab];
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [activeTab]);

  // 初期レンダリング時にアクティブタブのスタイルを設定
  useEffect(() => {
    if (mounted) {
      requestAnimationFrame(() => {
        const aboutElement = tabRefs.current["about"];
        if (aboutElement) {
          const { offsetLeft, offsetWidth } = aboutElement;
          setActiveStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          });
        }
      });
    }
  }, [mounted]);

  const handleTabChange = (tabId: string) => {
    // タブ切り替えの方向を決定
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = tabs.findIndex((tab) => tab.id === tabId);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveTab(tabId);
  };

  if (!mounted) return null;

  // スライドアニメーションのバリアント
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 250 : -250,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -250 : 250,
      opacity: 0,
    }),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-16"
      >
        <ImageWithAlt
          className="rounded-xl shadow-lg object-cover h-[300px] md:h-[400px] w-full"
          src="/base.webp"
          alt={`© ${new Date().getFullYear()} Ryota Hamaguchi. All rights reserved.`}
          width={3840}
          height={1523}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent rounded-xl flex items-end">
          <div className="p-6 md:p-8">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white drop-shadow-md"
            >
              About
            </motion.h1>
          </div>
        </div>
      </motion.div>

      {/* モダンなタブナビゲーション */}
      <div className="relative mb-10">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {/* ホバー時のハイライト */}
          <div
            className="absolute h-[38px] transition-all duration-300 ease-out bg-zinc-100/10 dark:bg-zinc-800/60 rounded-md flex items-center"
            style={{
              ...hoverStyle,
              opacity: hoveredTab !== null ? 1 : 0,
            }}
          />

          {/* アクティブインジケーター */}
          <motion.div
            className="absolute bottom-[1px] h-[2px] bg-primary"
            style={activeStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* タブボタン */}
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el;
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 text-sm font-medium rounded-md z-10 flex items-center ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => handleTabChange(tab.id)}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* タブコンテンツ - アニメーション付き */}
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait" custom={direction}>
          {activeTab === "about" && (
            <motion.div
              key="about"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="space-y-8 w-full absolute"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Card className="border-none shadow-lg bg-zinc-100/5 dark:bg-zinc-800/20 backdrop-blur-md overflow-hidden">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                      <FileText className="h-5 w-5" />
                      ポートフォリオサイト
                    </h2>
                    <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                      本サイトは、個人のポートフォリオサイトです。プロジェクト作品や技術的な挑戦を共有する場として作成しました。モダンなウェブ技術を採用し、パフォーマンスとユーザーエクスペリエンスを重視しています。
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Card className="h-full border-none shadow-lg bg-zinc-100/5 dark:bg-zinc-800/20 backdrop-blur-md overflow-hidden">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="bg-primary/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold mb-4">目的</h2>
                      <p className="text-lg leading-relaxed flex-grow text-zinc-700 dark:text-zinc-300">
                        技術的なスキルを展示するとともに、作品を通じて私の開発アプローチやデザイン哲学を伝えることを目指しています。
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Card className="h-full border-none shadow-lg bg-zinc-100/5 dark:bg-zinc-800/20 backdrop-blur-md overflow-hidden">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="bg-primary/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold mb-4">コンセプト</h2>
                      <p className="text-lg leading-relaxed flex-grow text-zinc-700 dark:text-zinc-300">
                        シンプルさと機能性のバランスを重視し、視覚的に魅力的でありながらも情報へのアクセスが容易なデザインを採用しています。
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === "tech" && (
            <motion.div
              key="tech"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="space-y-8 w-full absolute"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Card className="border-none shadow-lg bg-zinc-100/5 dark:bg-zinc-800/20 backdrop-blur-md overflow-hidden">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                      <Code className="h-5 w-5" />
                      使用技術
                    </h2>
                    <p className="text-lg leading-relaxed mb-6 text-zinc-700 dark:text-zinc-300">
                      このサイトは、最新のWebテクノロジーを活用して構築されています。主要な技術スタックは以下の通りです。
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        "Next.js",
                        "React",
                        "TypeScript",
                        "Tailwind CSS",
                        "shadcn/ui",
                        "Framer Motion",
                        "Vercel",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-sm py-1 px-3 bg-primary/10 text-primary border-none"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <Card className="h-full border-none shadow-lg bg-zinc-100/5 dark:bg-zinc-800/20 backdrop-blur-md overflow-hidden group">
                      <Link
                        href={tech.url}
                        passHref
                        target="_blank"
                        rel="noreferrer"
                      >
                        <CardContent className="p-6 flex flex-col items-center text-center h-full relative">
                          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="h-4 w-4 text-primary" />
                          </div>
                          <div className="mb-4 p-4 relative transition-all duration-300 group-hover:scale-105">
                            <Image
                              src={tech.icon.light}
                              alt={tech.name}
                              width={100}
                              height={100}
                              className={`dark:hidden ${
                                tech.invertDark ? "group-hover:invert" : ""
                              }`}
                            />
                            <Image
                              src={tech.icon.dark}
                              alt={tech.name}
                              width={100}
                              height={100}
                              className={`hidden dark:block ${
                                tech.invertDark
                                  ? "invert group-hover:invert-0"
                                  : ""
                              }`}
                            />
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {tech.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {tech.description}
                          </p>
                        </CardContent>
                      </Link>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Card className="border-none shadow-lg bg-zinc-100/5 dark:bg-zinc-800/20 backdrop-blur-md overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-2 rounded-full flex items-center justify-center">
                        <Github className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                        Next.js、shadcn/ui、Vercelの組み合わせにより、高速で美しく、メンテナンスしやすいウェブサイトを実現しています。
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
