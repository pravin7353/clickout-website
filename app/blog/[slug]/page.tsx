'use client';
import { useEffect, useState, use } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase/client';
import Link from 'next/link';

export default function SingleBlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const [post, setPost] = useState<any>(null);
  const [suggestedPosts, setSuggestedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return; 
      try {
        const q = query(collection(db, 'blogs'), where('slug', '==', slug));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          setPost(snapshot.docs[0].data());
          // Fetch suggestions
          const allBlogsQ = query(collection(db, 'blogs'));
          const allBlogsSnap = await getDocs(allBlogsQ);
          const suggestions = allBlogsSnap.docs
            .map(doc => doc.data())
            .filter(p => p.slug !== slug)
            .slice(0, 2);
          setSuggestedPosts(suggestions);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex justify-center items-center text-xl font-bold animate-pulse" style={{background:'var(--bg-base)',color:'var(--accent)'}}>Loading Magic...</div>;
  if (!post) return <div className="min-h-screen flex justify-center items-center text-red-500 text-xl font-bold" style={{background:'var(--bg-base)'}}>Post not found!</div>;

  return (
    <div className="min-h-screen py-16 px-6 lg:px-20 font-sans leading-relaxed relative overflow-hidden" style={{background:'var(--bg-base)',color:'var(--text-primary)'}}>
      
      {/* BACKGROUND DECORATIONS */}
      

      {/* FLOATING BACK BUTTON */}
      <Link href="/blog" className="hidden lg:flex fixed left-8 top-24 items-center gap-2 transition-colors px-4 py-2 rounded-full z-10 shadow-lg" style={{color:'var(--text-muted)',border:'1px solid var(--border-color)',background:'var(--bg-card)'}}>
        ← Back to Blogs
      </Link>

      <div className="max-w-3xl mx-auto flex flex-col gap-8 relative z-10">
        
        <header className="mb-8 border-b pb-8" style={{borderColor:'var(--border-color)'}}>
          <div className="flex items-center gap-4 mb-6 text-sm text-[#00ff66] font-semibold uppercase tracking-wider">
            <span>By {post.authorName || 'ClickOut Team'}</span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span className="text-gray-500">{post.createdAt ? new Date(post.createdAt.seconds * 1000).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Just now'}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight" style={{color:'var(--text-primary)'}}>{post.title}</h1>
          <p className="text-xl italic border-l-4 pl-4" style={{color:'var(--text-secondary)',borderColor:'var(--accent)'}}>{post.metaDesc}</p>
        </header>

        <div className="flex flex-col gap-6">
          {post.blocks?.map((block: any) => {
            switch (block.type) {
              case 'text':
                if (block.format === 'h1') return <h2 key={block.id} className="text-3xl font-bold mt-8 mb-2" style={{color:'var(--text-primary)'}}>{block.content}</h2>;
                if (block.format === 'h2') return <h3 key={block.id} className="text-2xl font-semibold mt-6" style={{color:'var(--accent)'}}>{block.content}</h3>;
                if (block.format === 'ul') {
                  const items = block.content.split('\n').filter(Boolean);
                  return (
                    <ul key={block.id} className="list-disc list-inside space-y-2 text-lg pl-4 marker:text-[#00ff66]" style={{color:'var(--text-secondary)'}}>
                      {items.map((item: string, i: number) => <li key={i}>{item.replace(/^- /, '')}</li>)}
                    </ul>
                  );
                }
                return <p key={block.id} className="text-lg leading-8 whitespace-pre-wrap" style={{color:'var(--text-secondary)'}}>{block.content}</p>;
              
              case 'image':
                return (
                  <figure key={block.id} className="my-8">
                    <img src={block.url} alt={block.alt} className="w-full rounded-2xl" style={{border:'1px solid var(--border-color)'}} />
                    {block.alt && <figcaption className="text-center text-sm text-gray-500 mt-3">{block.alt}</figcaption>}
                  </figure>
                );

              // FIX: Naya Table Renderer (using object structure)
              case 'table':
                if (!block.tableRows || block.tableRows.length === 0) return null;
                return (
                  <div key={block.id} className="overflow-x-auto my-6 rounded-xl" style={{border:'1px solid var(--border-color)'}}>
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b" style={{background:'var(--bg-card)',borderColor:'var(--border-color)'}}>
                          {block.tableRows[0].cells.map((head: string, i: number) => (
                            <th key={i} className="p-4 text-[#00ff66] font-semibold">{head}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.tableRows.slice(1).map((row: any, rIdx: number) => (
                          <tr key={rIdx} className="border-b transition-colors" style={{borderColor:'var(--border-color)'}}>
                            {row.cells.map((cell: string, cIdx: number) => <td key={cIdx} className="p-4 text-gray-300">{cell}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );

              case 'card':
                return (
                  <div key={block.id} className="rounded-2xl p-6 my-6 shadow-lg border-l-4" style={{background:'var(--bg-card)',border:'1px solid var(--border-color)',borderLeftColor:'var(--accent)'}}>
                    <h4 className="text-xl font-bold text-white mb-2">{block.cardTitle}</h4>
                    <p className="text-gray-400 leading-relaxed">{block.cardDesc}</p>
                  </div>
                );
              
              default:
                return null;
            }
          })}
        </div>

        {/* SUGGESTED BLOGS SECTION */}
        {suggestedPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t" style={{borderColor:'var(--border-color)'}}>
            <h3 className="text-2xl font-bold mb-6" style={{color:'var(--text-primary)'}}>Read Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suggestedPosts.map((sPost, idx) => {
                // Find thumbnail similar to the main blog list
                const thumbnailBlock = sPost.blocks?.find((b: any) => b.type === 'image' && b.url);
                const thumbnailUrl = thumbnailBlock ? thumbnailBlock.url : 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop';
                
                return (
                  <Link href={`/blog/${sPost.slug}`} key={idx} className="flex flex-col rounded-xl overflow-hidden transition-all hover:-translate-y-1 group" style={{background:'var(--bg-card)',border:'1px solid var(--border-color)'}}>
                    <div className="h-40 w-full overflow-hidden bg-black">
                      <img src={thumbnailUrl} alt={sPost.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-bold transition-colors mb-2 line-clamp-2" style={{color:'var(--text-primary)'}}>{sPost.title}</h4>
                      <p className="text-sm line-clamp-2" style={{color:'var(--text-muted)'}}>{sPost.metaDesc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}