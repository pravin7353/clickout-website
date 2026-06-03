import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Google ko admin panel index karne se roko
    },
    // TODO: Yahan bhi apna live domain aayega
    sitemap: 'https://www.clickout.in/sitemap.xml',
  };
}