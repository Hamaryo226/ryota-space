"use client";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { motion } from "framer-motion";

// コンポーネントの宣言はエクスポート前に行う
const TechCard = ({
  title,
  description,
  icon,
  link,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  link: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="glassmorphism relative overflow-hidden rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-zinc-900/40 to-black/50 z-0"></div>
    <div className="absolute -inset-1/2 bg-gradient-conic from-transparent via-zinc-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
    <div className="p-6 z-10 relative">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <Link href={link} passHref target="_blank" rel="noreferrer">
            <TooltipTrigger className="block w-full">
              <div className="flex justify-center mb-6">
                <div className="relative p-3 bg-zinc-900/60 rounded-2xl backdrop-blur-sm">
                  <Image
                    src={icon}
                    alt={title}
                    width={80}
                    height={80}
                    className="h-16 object-contain relative z-10"
                    style={{ filter: "invert(1)" }} // Add or remove this line to toggle color inversion
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/0 to-zinc-600/20 rounded-2xl blur-sm"></div>
                </div>
              </div>
              <h4 className="text-xl font-medium text-zinc-200 mb-3">
                {title}
              </h4>
              <p className="text-zinc-400 text-sm">{description}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{title}の公式サイトを開く</p>
            </TooltipContent>
          </Link>
        </Tooltip>
      </TooltipProvider>
    </div>
  </motion.div>
);

const FeatureItem = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="group flex items-start gap-6 p-6 rounded-xl hover:bg-zinc-800/10 transition-all duration-300"
  >
    <div className="relative">
      <div className="absolute -inset-2 bg-gradient-to-r from-zinc-700/20 to-zinc-600/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-800 flex items-center justify-center relative">
        <span className="text-zinc-200 font-bold text-lg">{index + 1}</span>
      </div>
    </div>
    <div>
      <h4 className="text-xl font-medium text-zinc-200 mb-2 group-hover:text-zinc-100 transition-colors duration-300">
        {title}
      </h4>
      <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  </motion.div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900 to-zinc-950 text-zinc-200">
      <div className="container mx-auto px-4 py-16">
        {/* 3Dエフェクト付きヒーローセクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-24 overflow-hidden rounded-3xl"
        >
          <Image
            className="lg:rounded-lg"
            src={"/base-op0.webp"}
            alt="Hero section background image"
            width={1920}
            height={720}
          />
        </motion.div>

        {/* コンテンツセクション - モダンなレイアウト */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-20"
          >
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400 mb-5">
                  本サイトについて
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-zinc-500 to-zinc-700 rounded-full mb-6"></div>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-xl mb-6 text-zinc-300 leading-relaxed">
                本サイトは、最新のWeb技術を駆使して構築されたポートフォリオサイトです。
                パフォーマンス、アクセシビリティ、ユーザーエクスペリエンスを重視し、
                モダンなデザインと機能性を兼ね備えています。
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed mb-12">
                Next.js、Tailwind CSS、Framer Motionなどの最新技術を活用し、
                スムーズなアニメーションとインタラクティブな体験を提供します。
                レスポンシブデザインにより、あらゆるデバイスで最適な表示を実現しています。
              </p>
            </div>
          </motion.div>

          {/* 技術スタックセクション - 3D効果のあるカード */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-3xl font-semibold text-zinc-200 border-l-4 border-zinc-500 pl-4">
                主要技術スタック
              </h3>
              <div className="hidden md:block h-[1px] flex-grow ml-8 bg-gradient-to-r from-zinc-700 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TechCard
                title="Next.js"
                description="React フレームワークによる高速なページレンダリングとSEO最適化"
                icon="/nextjs-icon-dark-background.svg"
                link="https://nextjs.org/"
                index={0}
              />
              <TechCard
                title="shadcn/ui"
                description="美しく再利用可能なコンポーネントライブラリ"
                icon="/shadcn-ui-seeklogo.svg"
                link="https://ui.shadcn.com/"
                index={1}
              />
              <TechCard
                title="Vercel"
                description="高速で信頼性の高いホスティングプラットフォーム"
                icon="/vercel-icon-dark.svg"
                link="https://vercel.com/"
                index={2}
              />
            </div>
          </motion.div>

          {/* 特徴セクション - カード形式 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-3xl font-semibold text-zinc-200 border-l-4 border-zinc-500 pl-4">
                サイトの特徴
              </h3>
              <div className="hidden md:block h-[1px] flex-grow ml-8 bg-gradient-to-r from-zinc-700 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureItem
                title="レスポンシブデザイン"
                description="あらゆるデバイスでの最適な表示を実現。スマートフォンからデスクトップまで、シームレスな体験を提供します。"
                index={0}
              />
              <FeatureItem
                title="パフォーマンス最適化"
                description="高速なページ読み込みとスムーズなインタラクション。最新のWeb最適化技術を駆使しています。"
                index={1}
              />
              <FeatureItem
                title="アクセシビリティ"
                description="全てのユーザーが利用しやすいインターフェース設計。WCAG基準に準拠した実装を心がけています。"
                index={2}
              />
              <FeatureItem
                title="モダンなアニメーション"
                description="Framer Motionを活用した洗練された動きと視覚効果。ユーザー体験を向上させる魅力的な演出を施しています。"
                index={3}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
