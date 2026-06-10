import { MetadataRoute } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // TODO: Jab domain live ho jaye, toh isko apne actual domain se replace kar dena
  const baseUrl = 'https://www.clickout.in'; // <-- Update this to your live domain

  // 1. Static Pages
  const staticRoutes = [
    '', '/blog', '/privacy', '/terms', '/refund',
    '/pricing', '/about', '/contact', '/faq', '/glossary', '/help',
    '/features', '/features/self-checkout', '/features/inventory-management',
    '/features/employee-verification', '/features/analytics',
    '/features/fraud-prevention', '/features/customer-retention',
    '/features/gatepass-validation', '/features/multi-store',
    '/industries', '/industries/supermarkets', '/industries/retail-chains',
    '/industries/warehouses', '/industries/independent-stores',
    '/compare/clickout-vs-pos-software',
    '/compare/clickout-vs-traditional-billing'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as "daily" | "weekly",
    priority: route === '' ? 1.0 : route.includes('features') ? 0.9 : 0.8,
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