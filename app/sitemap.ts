import { MetadataRoute } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // TODO: Jab domain live ho jaye, toh isko apne actual domain se replace kar dena
  const baseUrl = 'https://www.clickout.in'; // <-- Update this to your live domain

  // 1. Static Pages
  const staticRoutes = ['', '/blog', '/privacy', '/terms', '/refund'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Blog Pages
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const snapshot = await getDocs(collection(db, 'blogs'));
    blogRoutes = snapshot.docs
      // Sirf published blogs (drafts ko hata do)
      .filter((doc: any) => !doc.data().isDraft)
      .map((doc: any) => ({
        url: `${baseUrl}/blog/${doc.data().slug}`,
        lastModified: doc.data().updatedAt ? new Date(doc.data().updatedAt.toDate()) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));
  } catch (error) {
    console.error('Sitemap Blog Fetch Error:', error);
  }

  return [...staticRoutes, ...blogRoutes];
}