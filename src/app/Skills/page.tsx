"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GradientBorder } from "@/components/gradient-border";
import { Badge } from "@/components/ui/badge";
import { PageTitle } from "@/components/PageTitle";
import { Footer } from "@/components/footer";

// スキルカテゴリー定義
const skillCategories = [
  {
    name: "フロントエンド",
    icon: "🎨",
    skills: [
      {
        name: "React",
        level: 90,
        description: "UI構築の主要ライブラリとして活用",
      },
      {
        name: "Next.js",
        level: 85,
        description: "SSR/SSGに対応したReactフレームワーク",
      },
      {
        name: "TypeScript",
        level: 85,
        description: "型安全なコード記述のために使用",
      },
      {
        name: "Tailwind CSS",
        level: 90,
        description: "効率的なスタイリングのために採用",
      },
      { name: "HTML/CSS", level: 95, description: "Webの基礎として熟知" },
      { name: "JavaScript", level: 90, description: "モダンJSの機能を活用" },
      {
        name: "Framer Motion",
        level: 75,
        description: "スムーズなアニメーション実装",
      },
    ],
  },
  {
    name: "バックエンド",
    icon: "⚙️",
    skills: [
      {
        name: "Node.js",
        level: 80,
        description: "サーバーサイドJavaScriptランタイム",
      },
      { name: "Express", level: 75, description: "APIエンドポイント構築" },
      {
        name: "Firebase",
        level: 80,
        description: "認証・データベース・ホスティング",
      },
      {
        name: "PostgreSQL",
        level: 70,
        description: "リレーショナルデータベース",
      },
      { name: "MongoDB", level: 65, description: "NoSQLデータベース" },
      { name: "GraphQL", level: 60, description: "効率的なデータフェッチング" },
    ],
  },
  {
    name: "開発ツール",
    icon: "🔧",
    skills: [
      { name: "Git", level: 85, description: "バージョン管理システム" },
      { name: "GitHub", level: 85, description: "コード共有・CI/CD" },
      {
        name: "Docker",
        level: 70,
        description: "コンテナ化されたアプリケーション開発",
      },
      { name: "VS Code", level: 95, description: "主要開発環境" },
      { name: "Figma", level: 75, description: "デザイン・プロトタイピング" },
      { name: "Jest", level: 70, description: "単体テスト・統合テスト" },
      { name: "Cypress", level: 65, description: "E2Eテスト" },
    ],
  },
  {
    name: "その他の技術",
    icon: "🧩",
    skills: [
      { name: "PWA", level: 75, description: "プログレッシブWebアプリ開発" },
      {
        name: "レスポンシブデザイン",
        level: 90,
        description: "マルチデバイス対応UI",
      },
      { name: "SEO", level: 70, description: "検索エンジン最適化" },
      { name: "Accessibility", level: 80, description: "アクセシブルなUI構築" },
      { name: "API連携", level: 85, description: "外部サービスとの統合" },
      { name: "Jamstack", level: 80, description: "モダンWebアーキテクチャ" },
    ],
  },
];

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <PageTitle
          title="スキル・技術スタック"
          subtitle="現在活用している技術と習熟度のまとめ"
          className="mb-16"
        />

        {/* カテゴリタブ */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-5 py-3 rounded-xl transition-all duration-300 text-sm font-medium flex items-center gap-2
                ${
                  activeCategory === category.name
                    ? "bg-zinc-800 text-white shadow-lg shadow-zinc-800/20"
                    : "bg-zinc-900/60 text-zinc-400 hover:bg-zinc-800/70 hover:text-zinc-300"
                }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* スキル表示エリア */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories
            .find((cat) => cat.name === activeCategory)
            ?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <GradientBorder className="p-5 rounded-xl bg-zinc-900/50 backdrop-blur-sm">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-lg text-zinc-100">
                        {skill.name}
                      </h3>
                      <Badge
                        variant={
                          skill.level >= 85
                            ? "default"
                            : skill.level >= 70
                            ? "outline"
                            : "secondary"
                        }
                      >
                        {skill.level}%
                      </Badge>
                    </div>
                    <p className="text-zinc-400 text-sm mb-4">
                      {skill.description}
                    </p>
                    <div className="w-full bg-zinc-800 rounded-full h-2.5 mt-auto">
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </GradientBorder>
              </motion.div>
            ))}
        </div>

        {/* 熟練度の説明 */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-4 text-center">
            熟練度の目安
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <h3 className="font-medium">85-100% - 熟練</h3>
              </div>
              <p className="text-sm text-zinc-400">
                深い理解と実践経験があり、複雑な問題も解決できる。他者への指導も可能。
              </p>
            </div>
            <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <h3 className="font-medium">70-84% - 実務レベル</h3>
              </div>
              <p className="text-sm text-zinc-400">
                実務で活用できるレベル。基本的な問題は自力で解決でき、実践経験がある。
              </p>
            </div>
            <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <h3 className="font-medium">0-69% - 基礎習得</h3>
              </div>
              <p className="text-sm text-zinc-400">
                基本的な知識と理解がある。さらに経験を積み、スキルを向上させている段階。
              </p>
            </div>
          </div>
        </div>

        {/* 学習中/興味のある技術 */}
        <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800/50 mb-16">
          <h2 className="text-xl font-semibold mb-4">学習中/興味のある技術</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Three.js",
              "WebGL",
              "Rust",
              "WebAssembly",
              "Svelte",
              "Go",
              "AWS",
              "機械学習基礎",
              "Kubernetes",
              "微分子服務",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-zinc-800 rounded-lg text-sm text-zinc-300 border border-zinc-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
