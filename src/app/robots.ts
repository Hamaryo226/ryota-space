import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'CCBot',
          'Omgilibot',
          'FacebookBot',
          'anthropic-ai',
          'Claude-Web',
          'ClaudeBot',
          'cohere-ai',
        ],
        disallow: '/',
      },
    ],
  }
}
