"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
//import Image from "next/image";
import { PageTitle } from "@/components/PageTitle";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Calendar,
  Clock,
  ChevronRight,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";

// ブログ記事のタイプ定義
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  categories: string[];
  featured?: boolean;
}

// サンプルのブログ投稿データ（実際のプロジェクトではAPIからデータを取得するなど）
const samplePosts: BlogPost[] = [
  {
    id: "nextjs-app-router",
    title: "Next.js 13のApp Routerとは？従来のPages Routerとの違い",
    excerpt:
      "Next.js 13で導入されたApp Routerの基本概念と、従来のPages Routerからの移行方法について解説します。",
    coverImage: "/images/blog/nextjs-app-router.jpg",
    date: "2023-12-15",
    readTime: "8分",
    author: {
      name: "Ryota Hamada",
      avatar: "/images/avatar.jpg",
    },
    categories: ["Next.js", "React", "フロントエンド"],
    featured: true,
  },
  {
    id: "typescript-tips",
    title: "実務で使えるTypeScriptの高度な型テクニック",
    excerpt:
      "型ガード、ユーティリティ型、条件付き型など、実務で役立つTypeScriptの高度な型テクニックを紹介します。",
    coverImage: "/images/blog/typescript-tips.jpg",
    date: "2023-11-28",
    readTime: "10分",
    author: {
      name: "Ryota Hamada",
      avatar: "/images/avatar.jpg",
    },
    categories: ["TypeScript", "JavaScript", "プログラミング"],
  },
  {
    id: "tailwind-vs-css",
    title: "TailwindCSSとCSS-in-JSの比較：適材適所の選択",
    excerpt:
      "ユーティリティファーストのTailwindCSSとCSS-in-JSアプローチのメリット・デメリットを比較し、プロジェクトに合わせた適切な選択について考察します。",
    coverImage: "/images/blog/tailwind-vs-css.jpg",
    date: "2023-10-15",
    readTime: "7分",
    author: {
      name: "Ryota Hamada",
      avatar: "/images/avatar.jpg",
    },
    categories: ["CSS", "TailwindCSS", "UI/UX"],
  },
  {
    id: "react-server-components",
    title: "React Server Componentsでパフォーマンス向上",
    excerpt:
      "React Server Componentsの基本概念と、Webアプリケーションのパフォーマンス向上にどのように寄与するかを解説します。",
    coverImage: "/images/blog/react-server-components.jpg",
    date: "2023-09-20",
    readTime: "9分",
    author: {
      name: "Ryota Hamada",
      avatar: "/images/avatar.jpg",
    },
    categories: ["React", "パフォーマンス", "Next.js"],
  },
  {
    id: "framer-motion-tips",
    title: "Framer Motionで実装するスムーズなUI/UXアニメーション",
    excerpt:
      "ReactアプリケーションにFramer Motionを活用して、ユーザー体験を向上させるアニメーション実装テクニックを紹介します。",
    coverImage: "/images/blog/framer-motion.jpg",
    date: "2023-08-05",
    readTime: "6分",
    author: {
      name: "Ryota Hamada",
      avatar: "/images/avatar.jpg",
    },
    categories: ["アニメーション", "React", "UI/UX"],
  },
  {
    id: "web-accessibility",
    title: "誰もが使えるWeb: アクセシビリティの基本と実装方法",
    excerpt:
      "Webアクセシビリティの重要性と、インクルーシブなWebサイト・アプリケーションを構築するための具体的な実装方法を解説します。",
    coverImage: "/images/blog/web-accessibility.jpg",
    date: "2023-07-12",
    readTime: "11分",
    author: {
      name: "Ryota Hamada",
      avatar: "/images/avatar.jpg",
    },
    categories: ["アクセシビリティ", "Web開発", "インクルーシブデザイン"],
    featured: true,
  },
];

// カテゴリーの一意なリストを取得
const allCategories = Array.from(
  new Set(samplePosts.flatMap((post) => post.categories))
).sort();

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [savedPosts, setSavedPosts] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(samplePosts);

  // 検索とカテゴリでフィルタリング
  useEffect(() => {
    let result = samplePosts;

    if (searchTerm) {
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.categories.some((cat) =>
            cat.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    if (selectedCategory) {
      result = result.filter((post) =>
        post.categories.includes(selectedCategory)
      );
    }

    setFilteredPosts(result);
  }, [searchTerm, selectedCategory]);

  // 記事を保存/保存解除する
  const toggleSavePost = (postId: string) => {
    setSavedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  // フィーチャー記事
  const featuredPosts = filteredPosts.filter((post) => post.featured);
  // 通常記事（フィーチャーでないもの）
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <PageTitle
          title="ブログ / 技術記事"
          subtitle="Web開発、プログラミング、UI/UXに関する技術的な知見や考えを共有しています"
          className="mb-12"
        />

        {/* 検索とフィルターセクション */}
        <div className="mb-12 bg-zinc-900/50 p-5 rounded-2xl backdrop-blur-sm border border-zinc-800/50">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 h-4 w-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="記事を検索..."
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-800/70 border border-zinc-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-zinc-200 placeholder-zinc-500"
              />
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                }}
                className="px-4 py-2.5 bg-zinc-800/70 hover:bg-zinc-700/70 text-zinc-300 rounded-xl border border-zinc-700/50 transition-colors"
              >
                フィルターをリセット
              </button>
            </div>
          </div>

          {/* カテゴリフィルター */}
          <div className="mt-4 flex flex-wrap gap-2">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory((prev) =>
                    prev === category ? null : category
                  )
                }
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    : "bg-zinc-800/70 text-zinc-400 border border-zinc-700/50 hover:bg-zinc-700/70 hover:text-zinc-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* フィーチャー記事セクション */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="inline-block w-1.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 mr-3 rounded-full"></span>
              おすすめ記事
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/Blog/${post.id}`} className="block h-full">
                    <div className="relative h-full overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10 hover:border-zinc-700/70">
                      {/* 背景エフェクト */}
                      <div className="absolute inset-0 -z-10 opacity-[0.02]">
                        <div className="absolute -inset-[100%] w-[300%] h-[300%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:12px_12px] animate-[spin_120s_linear_infinite]" />
                      </div>

                      <div className="relative">
                        <div className="aspect-[16/9] w-full overflow-hidden">
                          <div className="h-full w-full relative bg-zinc-800 rounded-t-2xl">
                            {/* 実際の画像が準備できたときにImage コンポーネントに置き換え */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                              {/* プレースホルダー */}
                              <span>画像 {index + 1}</span>
                            </div>

                            {/* 
                            実際の実装時は以下のようにImage コンポーネントを使用
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            */}
                          </div>
                        </div>

                        <div className="absolute top-3 right-3">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleSavePost(post.id);
                            }}
                            className="p-2 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 transition-colors hover:bg-zinc-800"
                          >
                            {savedPosts.includes(post.id) ? (
                              <BookmarkCheck className="w-4 h-4 text-blue-400" />
                            ) : (
                              <Bookmark className="w-4 h-4 text-zinc-400" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((category) => (
                            <Badge key={category} variant="default">
                              {category}
                            </Badge>
                          ))}
                        </div>

                        <h3 className="text-xl font-semibold mb-2 text-zinc-100 group-hover:text-white transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex justify-between items-center text-zinc-500 text-xs">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(post.date).toLocaleDateString("ja-JP")}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {post.readTime}
                            </div>
                          </div>

                          <div className="flex items-center text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform">
                            続きを読む
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 最新記事セクション */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="inline-block w-1.5 h-6 bg-gradient-to-b from-purple-500 to-indigo-600 mr-3 rounded-full"></span>
            最新記事
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/Blog/${post.id}`} className="block h-full">
                  <div className="h-full rounded-xl border border-zinc-800/70 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10 hover:border-zinc-700/70">
                    <div className="relative">
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <div className="h-full w-full relative bg-zinc-800">
                          {/* 実際の画像が準備できたときにImage コンポーネントに置き換え */}
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
                          <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                            {/* プレースホルダー */}
                            <span>画像 {index + 1}</span>
                          </div>
                          {/* 
                          実際の実装時は以下のようにImage コンポーネントを使用
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          */}
                        </div>
                      </div>

                      <div className="absolute top-3 right-3">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleSavePost(post.id);
                          }}
                          className="p-2 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 transition-colors hover:bg-zinc-800"
                        >
                          {savedPosts.includes(post.id) ? (
                            <BookmarkCheck className="w-4 h-4 text-blue-400" />
                          ) : (
                            <Bookmark className="w-4 h-4 text-zinc-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {post.categories.slice(0, 2).map((category) => (
                          <Badge
                            key={category}
                            variant="secondary"
                            className="text-xs px-2 py-0"
                          >
                            {category}
                          </Badge>
                        ))}
                        {post.categories.length > 2 && (
                          <Badge
                            variant="outline"
                            className="text-xs px-2 py-0"
                          >
                            +{post.categories.length - 2}
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-base font-medium mb-2 text-zinc-100 group-hover:text-white transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-zinc-400 text-xs mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex justify-between items-center text-zinc-500 text-xs">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(post.date)
                              .toLocaleDateString("ja-JP")
                              .slice(5)}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 検索結果がない場合 */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">検索結果がありません</h3>
            <p className="text-zinc-400">
              検索条件を変更して、再度お試しください。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
