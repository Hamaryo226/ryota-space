// ブログデータを統合管理
import b02 from "../../public/Blog/b02.json";

export type BlogContent = 
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 1 | 2 | 3 | 4 | 5 | 6; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language: string; code: string };

export type Blog = {
  slug: string;
  thumbnail?: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  content: BlogContent[];
};

// ブログデータにslugを追加
export const blogs: Blog[] = [
  { ...b02, slug: "02" } as Blog
];

// slugからブログを取得
export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

// すべてのブログを取得
export function getAllBlogs(): Blog[] {
  return blogs;
}

// すべてのslugを取得（静的生成用）
export function getAllBlogSlugs(): string[] {
  return blogs.map((blog) => blog.slug);
}
