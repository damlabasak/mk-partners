import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://damlabasak.github.io/mk-partners';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          tr: `${baseUrl}/?lang=tr`,
          en: `${baseUrl}/?lang=en`,
          it: `${baseUrl}/?lang=it`,
        },
      },
    },
  ];
}
