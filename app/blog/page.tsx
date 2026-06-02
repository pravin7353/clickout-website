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
        // Fetching blogs ordered by creation time
        const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const fetchedBlogs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as any)); // <-- Added 'as any'
        // FIX: Remove drafts so public users don't see them
        const publishedBlogs = fetchedBlogs.filter((blog: any) => !blog.isDraft); // <-- Added ': any'
        setBlogs(publishedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  // Helpers
  const getThumbnail = (blocks: any[]) => {
    if (!blocks) return null;
    const imgBlock = blocks.find((b: any) => b.type === 'image' && b.url);
    return imgBlock ? imgBlock.url : 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop'; // Default Supermarket POS fallback
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
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-200 font-sans flex flex-col relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#00ff6610] to-transparent pointer-events-none"></div>

      {/* TOP NAVIGATION */}
      <nav className="w-full border-b border-gray-800 bg-[#0d0d0d]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black text-white tracking-tighter">
            Click<span className="text-[#00ff66]">Out</span>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/admin/blog" className="text-sm font-medium border border-[#00ff66] text-[#00ff66] px-4 py-2 rounded-full hover:bg-[#00ff66] hover:text-black transition-all">
              Admin Login
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-4xl mx-auto text-center pt-24 pb-16 px-6 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          ClickOut <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-emerald-400">Resources</span>
        </h1>
        <p className="text-xl text-gray-400">
          Insights, guides, and strategies to scale your supermarket with zero queues and smart AI operations.
        </p>
      </header>

      {/* MAIN CONTENT - GRID TIMELINE */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 pb-20 relative z-10">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="text-[#00ff66] text-xl font-bold animate-pulse">Loading amazing articles...</div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-gray-500 py-20">No articles published yet.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogs.map((blog) => (
                <Link href={`/blog/${blog.slug}`} key={blog.id} className="group flex flex-col bg-[#111] rounded-2xl border border-gray-800 overflow-hidden hover:border-[#00ff66]/50 hover:shadow-[0_0_30px_rgba(0,255,102,0.05)] transition-all duration-300 hover:-translate-y-1">
                  
                  {/* Thumbnail */}
                  <div className="h-48 w-full overflow-hidden bg-black relative">
                    <img 
                      src={getThumbnail(blog.blocks)} 
                      alt={blog.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    {/* Category Tag overlay */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur border border-gray-700 text-xs font-bold text-[#00ff66] px-3 py-1 rounded-full uppercase tracking-wider">
                      Retail Tech
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Timeline Data */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 font-medium">
                      <span>{formatDate(blog.createdAt)}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <span>{getReadTime(blog.blocks)}</span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#00ff66] transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                      {blog.metaDesc}
                    </p>

                    {/* Bottom Read More */}
                    <div className="mt-auto pt-4 border-t border-gray-800/50 flex items-center text-sm font-semibold text-[#00ff66] group-hover:gap-2 transition-all">
                      Read Article <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-16">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-800 rounded-lg text-sm font-medium hover:bg-[#111] hover:text-[#00ff66] disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-200 transition-colors"
                >
                  Previous
                </button>
                <span className="text-sm text-gray-400">
                  Page <strong className="text-white">{currentPage}</strong> of {totalPages}
                </span>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-800 rounded-lg text-sm font-medium hover:bg-[#111] hover:text-[#00ff66] disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-200 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-gray-800 bg-black mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ClickOut. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}