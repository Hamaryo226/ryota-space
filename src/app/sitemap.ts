import { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/articles'
import { getAllBlogs } from '@/lib/blogs'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hamaryo.dev'

  // 静的ルート
  const routes = ['', '/Project', '/Blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // プロジェクト（記事）ページ
  const articleRoutes = getAllArticles().map((article) => ({
    url: `${baseUrl}/Project/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // ブログページ
  const blogRoutes = getAllBlogs().map((blog) => ({
    url: `${baseUrl}/Blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [...routes, ...articleRoutes, ...blogRoutes]
}
