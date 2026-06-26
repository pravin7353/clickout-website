'use client';
import { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase/client';
import Link from 'next/link';

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const fetchedBlogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as any));
        const publishedBlogs = fetchedBlogs.filter((blog: any) => !blog.isDraft);
        setBlogs(publishedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const getThumbnail = (blocks: any[]) => {
    if (!blocks) return null;
    const imgBlock = blocks.find((b: any) => b.type === 'image' && b.url);
    return imgBlock
      ? imgBlock.url
      : 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop';
  };

  const getReadTime = (blocks: any[]) => {
    if (!blocks) return '3 min read';
    const text = blocks.filter((b: any) => b.type === 'text').map((b: any) => b.content).join(' ');
    const wordCount = text.split(/\s+/).length;
    const mins = Math.max(1, Math.ceil(wordCount / 200));
    return `${mins} min read`;
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Just now';
    return new Date(timestamp.seconds * 1000).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
    });
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div
      className="min-h-screen font-sans flex flex-col relative"
      style={{ background: 'var(--bg-base)', color: 'var(--text-secondary)' }}
    >
      {/* Subtle top gradient accent */}
      <div
        className="absolute top-0 left-0 w-full h-[320px] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, var(--accent-bg), transparent)' }}
      />

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-4 z-50 backdrop-blur-xl border-b"
        style={{ background: 'var(--bg-nav)', borderColor: 'var(--border-color)' }}
      >
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span style={{ color: 'var(--text-primary)' }}>Click</span>
          <span style={{ color: 'var(--accent)' }}>Out</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: 'var(--text-secondary)' }}
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: 'var(--text-secondary)' }}
          >
            Pricing
          </Link>
          <Link
            href="https://clickout-cfa95.web.app/#/login"
            target="_blank"
            className="text-sm font-medium px-4 py-1.5 rounded-full border transition-all hover:opacity-80"
            style={{
              color: 'var(--accent)',
              borderColor: 'var(--accent-border)',
              background: 'var(--accent-bg)',
            }}
          >
            Login
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative z-10 max-w-3xl mx-auto w-full px-6 pt-36 pb-16 text-center">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border"
          style={{
            color: 'var(--accent)',
            borderColor: 'var(--accent-border)',
            background: 'var(--accent-bg)',
          }}
        >
          Resources
        </div>
        <h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-5"
          style={{ color: 'var(--text-primary)' }}
        >
          ClickOut Blog
        </h1>
        <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Insights, guides, and strategies to scale your supermarket with zero queues and smart AI operations.
        </p>
      </header>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto w-full px-6">
        <div className="border-t" style={{ borderColor: 'var(--border-color)' }} />
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-14 relative z-10">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-48 gap-3">
            <div
              className="w-6 h-6 rounded-full border-2 border-t-transparent animate-spin"
              style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }}
            />
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Loading articles…</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>No articles published yet.</p>
            <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Check back soon.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentBlogs.map((blog) => (
                <Link
                  href={`/blog/${blog.slug}`}
                  key={blog.id}
                  className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent-border)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
                >
                  {/* Thumbnail */}
                  <div className="h-44 w-full overflow-hidden relative" style={{ background: 'var(--bg-card)' }}>
                    <img
                      src={getThumbnail(blog.blocks)}
                      alt={blog.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                    />
                    <div
                      className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border backdrop-blur-sm"
                      style={{
                        background: 'var(--accent-bg)',
                        borderColor: 'var(--accent-border)',
                        color: 'var(--accent)',
                      }}
                    >
                      Retail Tech
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div
                      className="flex items-center gap-2 text-xs mb-3"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <span>{formatDate(blog.createdAt)}</span>
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ background: 'var(--text-muted)' }}
                      />
                      <span>{getReadTime(blog.blocks)}</span>
                    </div>

                    <h2
                      className="text-base font-bold mb-2 leading-snug transition-colors duration-150 group-hover:text-[var(--accent)]"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {blog.title}
                    </h2>

                    <p className="text-sm line-clamp-3 mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {blog.metaDesc}
                    </p>

                    <div
                      className="mt-auto pt-4 border-t flex items-center gap-1 text-sm font-semibold"
                      style={{ borderColor: 'var(--border-color)', color: 'var(--accent)' }}
                    >
                      Read article
                      <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-14">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg text-sm font-medium border transition-all disabled:opacity-40"
                  style={{
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-card)',
                  }}
                >
                  ← Previous
                </button>

                <span className="text-sm px-2" style={{ color: 'var(--text-muted)' }}>
                  Page{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>{currentPage}</strong>{' '}
                  of {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg text-sm font-medium border transition-all disabled:opacity-40"
                  style={{
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-card)',
                  }}
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer
        className="w-full border-t mt-auto"
        style={{ background: 'var(--bg-footer)', borderColor: 'var(--border-color)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} ClickOut. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 text-sm justify-center" style={{ color: 'var(--text-muted)' }}>
            <Link href="/privacy" className="hover:opacity-70 transition-opacity">Privacy Policy</Link>
            <Link href="/terms" className="hover:opacity-70 transition-opacity">Terms of Service</Link>
            <Link href="/refund" className="hover:opacity-70 transition-opacity">Refund Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
