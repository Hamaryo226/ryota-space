// 記事データを統合管理
import fcsData from "../../public/Article/fcs.json";
import sdsData from "../../public/Article/sds.json";
import taikoData from "../../public/Article/taikodive.json";
import dwData from "../../public/Article/dw.json";
import lyraData from "../../public/Article/lyra.json";
import museData from "../../public/Article/muse.json";
import health2bpmData from "../../public/Article/health2bpm.json";
import orderManager2Data from "../../public/Article/order-manager2.json";

export type Article = {
  slug: string;
  category: "university" | "personal";
  thumbnail?: string;
  title: string;
  systemname: string;
  date: string;
  description: string;
  content?: {
    概要?: string;
    技術スタック?: string | Record<string, string[]>;
    想定クライアント?: string;
    目的?: string;
    目標?: string;
  };
  links?: Record<string, string>;
  references?: Record<string, string>;
  code?: Record<
    string,
    {
      title: string;
      description: string;
      filename: string;
      language: string;
      code: string;
    }
  >;
};

// 記事データにslugとcategoryを追加
export const articles: Article[] = [
  { ...fcsData, slug: "fcs", category: "university" },
  { ...sdsData, slug: "sds", category: "university" },
  { ...orderManager2Data, slug: "order-manager2", category: "university" },
  { ...taikoData, slug: "taikodive", category: "personal" },
  { ...dwData, slug: "drop-watermark", category: "personal" },
  { ...lyraData, slug: "lyra", category: "personal" },
  { ...museData, slug: "muse", category: "personal" },
  { ...health2bpmData, slug: "health2bpm", category: "personal" },
];

// slugから記事を取得
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

// すべての記事を取得
export function getAllArticles(): Article[] {
  return articles;
}

// カテゴリー別に記事を取得
export function getArticlesByCategory(category: "university" | "personal"): Article[] {
  return articles.filter((article) => article.category === category);
}

// すべてのslugを取得（静的生成用）
export function getAllSlugs(): string[] {
  return articles.map((article) => article.slug);
}
