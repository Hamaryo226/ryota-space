"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Link as LinkIcon,
  FileText,
  CheckCircle2,
  Users,
  Target,
  ListChecks,
  X,
} from "lucide-react";
import articleData from "public/Article/fcs.json";
import { AccordionCodeBlock } from "@/components/accordion-code-block";

const tabs = [
  { name: "概要", icon: <FileText className="h-4 w-4 mr-2" /> },
  { name: "詳細", icon: <ListChecks className="h-4 w-4 mr-2" /> },
  { name: "コード", icon: <Code className="h-4 w-4 mr-2" /> },
  { name: "リンク", icon: <LinkIcon className="h-4 w-4 mr-2" /> },
];

export default function Frame() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverStyle, setHoverStyle] = useState({});
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" });
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [direction, setDirection] = useState(0); // -1: 左へ, 1: 右へ, 0: 初期表示

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  useEffect(() => {
    const activeElement = tabRefs.current[activeIndex];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const overviewElement = tabRefs.current[0];
      if (overviewElement) {
        const { offsetLeft, offsetWidth } = overviewElement;
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    });
  }, []);

  const handleTabChange = (index: number) => {
    // 方向を決定（現在のタブインデックスと新しいタブインデックスを比較）
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const [isEnglish] = useState(false);

  // タブコンテンツを表示する関数
  const renderTabContent = () => {
    // スライド方向に基づくアニメーションバリアント
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
      <AnimatePresence mode="wait" custom={direction}>
        {activeIndex === 0 && (
          <motion.div
            key="overview"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="mt-8 space-y-6 w-full"
          >
            <h2 className="flex items-center mb-4 gap-2 text-white">
              <FileText className="h-5 w-5 text-primary" />
              {isEnglish ? "Project Overview" : "プロジェクト概要"}
            </h2>
            <div className="leading-7 text-zinc-400">
              {isEnglish
                ? articleData.content.en.Overview
                : articleData.content.ja.概要}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex"
              >
                <Card className="p-4 dark:bg-zinc-800 border-zinc-700 flex-1">
                  <div className="flex items-center mb-2">
                    <div className="p-1.5 bg-primary/10 rounded-md mr-2">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-medium text-zinc-200">
                      {isEnglish ? "Expected Client" : "想定クライアント"}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-400">
                    {isEnglish
                      ? articleData.content.en["Expected Client"]
                      : articleData.content.ja["想定クライアント"]}
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex"
              >
                <Card className="p-4 dark:bg-zinc-800 border-zinc-700 flex-1">
                  <div className="flex items-center mb-2">
                    <div className="p-1.5 bg-primary/10 rounded-md mr-2">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-medium text-zinc-200">
                      {isEnglish ? "Purpose" : "目的"}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-400">
                    {isEnglish
                      ? articleData.content.en.Purpose
                      : articleData.content.ja.目的}
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex"
              >
                <Card className="p-4 dark:bg-zinc-800 border-zinc-700 flex-1">
                  <div className="flex items-center mb-2">
                    <div className="p-1.5 bg-primary/10 rounded-md mr-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-medium text-zinc-200">
                      {isEnglish ? "Goal" : "目標"}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-400">
                    {isEnglish
                      ? articleData.content.en.Goal
                      : articleData.content.ja.目標}
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {activeIndex === 1 && (
          <motion.div
            key="details"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="mt-8 w-full"
          >
            <h2 className="flex items-center mb-4 gap-2 text-white">
              <ListChecks className="h-5 w-5 text-primary" />
              {isEnglish ? "Project Details" : "プロジェクト詳細"}
            </h2>
            <div className="space-y-6 text-zinc-400">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {isEnglish
                  ? "This project aims to develop a web system that supports frailty checks for the elderly in Yokosuka City, addressing the challenges of volunteer shortage and varying capabilities."
                  : "このプロジェクトは、横須賀市の高齢者向けフレイルチェックを支援するウェブシステムを開発し、ボランティア不足や能力の差といった課題に対応することを目指しています。"}
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="flex"
                >
                  <Card className="p-4 dark:bg-zinc-800 border-zinc-700 flex-1">
                    <h3 className="text-zinc-200 text-lg font-medium mb-3">
                      {isEnglish ? "Technical Features" : "技術的特徴"}
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>
                          {isEnglish
                            ? "Web-based system using Django"
                            : "Djangoを使用したウェブベースのシステム"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>
                          {isEnglish
                            ? "Speech recognition functionality"
                            : "音声認識機能"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>
                          {isEnglish
                            ? "Responsive interface for various devices"
                            : "様々なデバイス向けのレスポンシブインターフェース"}
                        </span>
                      </li>
                    </ul>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="flex"
                >
                  <Card className="p-4 dark:bg-zinc-800 border-zinc-700 flex-1">
                    <h3 className="text-zinc-200 text-lg font-medium mb-3">
                      {isEnglish ? "Implementation Process" : "実装プロセス"}
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>
                          {isEnglish ? "Requirements analysis" : "要件分析"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>
                          {isEnglish
                            ? "Prototype development"
                            : "プロトタイプ開発"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>
                          {isEnglish
                            ? "User testing with elderly participants"
                            : "高齢者参加者によるユーザーテスト"}
                        </span>
                      </li>
                    </ul>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {activeIndex === 2 && (
          <motion.div
            key="code"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="mt-8 w-full"
          >
            <h2 className="flex items-center mb-4 gap-2 text-white">
              <Code className="h-5 w-5 text-primary" />
              {isEnglish ? "System Code" : "システムコード"}
            </h2>

            <div className="max-w-full space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <AccordionCodeBlock
                  title={
                    isEnglish
                      ? articleData.code.smfCode.title.en
                      : articleData.code.smfCode.title.ja
                  }
                  description={
                    isEnglish
                      ? articleData.code.smfCode.description?.en ||
                        "No description available"
                      : articleData.code.smfCode.description?.ja ||
                        "説明はありません"
                  }
                  code={articleData.code.smfCode.code}
                  language={articleData.code.smfCode.language}
                  codeTitle={articleData.code.smfCode.filename}
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Card className="p-4 dark:bg-zinc-800 border-zinc-700">
                  <h3 className="text-zinc-200 text-lg font-medium mb-2">
                    {isEnglish ? "Implementation Notes" : "実装メモ"}
                  </h3>
                  <p className="text-zinc-400 mb-4">
                    {isEnglish
                      ? "This code implements a speech recognition feature for the elderly frailty check system. It uses Web Speech API to count utterances within a time limit."
                      : "このコードは、高齢者フレイルチェックシステムの音声認識機能を実装しています。Web Speech APIを使用して、制限時間内の発話回数をカウントします。"}
                  </p>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        )}

        {activeIndex === 3 && (
          <motion.div
            key="links"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="mt-8 w-full"
          >
            <h2 className="flex items-center mb-4 gap-2 text-white">
              <LinkIcon className="h-5 w-5 text-primary" />
              {isEnglish ? "Related Links" : "関連リンク"}
            </h2>

            <div className="space-y-4">
              {Object.entries(
                isEnglish ? articleData.links.en : articleData.links.ja
              ).map(([label, url], index) => (
                <motion.a
                  key={index}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.3 }}
                  href={url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700/70 transition-colors"
                >
                  <div className="p-2 rounded-full bg-zinc-700 mr-3">
                    <LinkIcon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-zinc-200 group-hover:text-white transition-colors text-sm font-medium truncate">
                      {label}
                    </p>
                    <p className="text-xs text-zinc-400 truncate">
                      {url as string}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center w-full bg-zinc-950">
      <Card className="w-full max-w-[1200px] border-none shadow-none relative bg-transparent overflow-hidden">
        <div className="bg-zinc-950">
          <Image
            priority
            className="lg:rounded-lg"
            src={articleData.thumbnail}
            alt={articleData.systemname}
            width={1366}
            height={567}
          />
          <div className="p-6 text-center">
            <p className="text-3xl font-semibold py-2 lg:py-4">
              <span className={isEnglish ? "text-2xl" : "text-3xl"}>
                {isEnglish ? articleData.title.en : articleData.title.ja}
              </span>
            </p>
          </div>
          {/* Tab Container */}
          <CardContent className="p-6">
            <div className="relative flex flex-col items-center">
              {/* Hover Highlight */}
              <div
                className="absolute h-[30px] transition-all duration-300 ease-out bg-zinc-800 rounded-[6px] flex items-center justify-center"
                style={{
                  ...hoverStyle,
                  opacity: hoveredIndex !== null ? 1 : 0,
                }}
              />

              {/* Active Indicator */}
              <motion.div
                className="absolute bottom-[-6px] h-[2px] bg-primary"
                style={activeStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Tabs */}
              <div className="relative flex space-x-[6px] items-center justify-center w-full">
                {tabs.map((tab, index) => (
                  <motion.div
                    key={index}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${
                      index === activeIndex
                        ? "text-white"
                        : "text-zinc-400 hover:text-zinc-300"
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleTabChange(index)}
                  >
                    <div className="text-sm leading-5 whitespace-nowrap flex items-center justify-center h-full">
                      {tab.icon}
                      {tab.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* タブコンテンツコンテナ */}
            <div className="relative min-h-[400px] p-3">
              {renderTabContent()}
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
