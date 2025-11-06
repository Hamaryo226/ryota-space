// 記事データを統合管理
import fcsData from "../../public/Article/fcs.json";
import sdsData from "../../public/Article/sds.json";
import taikoData from "../../public/Article/taikodive.json";
import orm2Data from "../../public/Article/orm2.json";

export type Article = {
  slug: string;
  thumbnail?: string;
  title: string;
  systemname: string;
  date: string;
  description: string;
  content?: {
    概要?: string;
    技術スタック?: string;
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

// 記事データにslugを追加
export const articles: Article[] = [
  { ...fcsData, slug: "fcs" },
  { ...sdsData, slug: "sds" },
  { ...taikoData, slug: "taikodive" },
  { ...orm2Data, slug: "orm2" }
];

// slugから記事を取得
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

// すべての記事を取得
export function getAllArticles(): Article[] {
  return articles;
}

// すべてのslugを取得（静的生成用）
export function getAllSlugs(): string[] {
  return articles.map((article) => article.slug);
}
