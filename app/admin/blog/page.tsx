'use client';
import { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, getDocs, doc, deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, storage } from '@/lib/firebase/client';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

type BlockType = 'text' | 'image' | 'table' | 'card';

interface Block {
  id: string;
  type: BlockType;
  content?: string;
  format?: 'h1' | 'h2' | 'p' | 'ul';
  url?: string;
  alt?: string;
  tableRows?: { cells: string[] }[]; 
  cardTitle?: string;
  cardDesc?: string;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Theme State
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // View State: 'list' or 'editor'
  const [view, setView] = useState<'list' | 'editor'>('list');
  const [blogList, setBlogList] = useState<any[]>([]);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);

  // Editor State
  const [editId, setEditId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [metaDesc, setMetaDesc] = useState('');
  const [authorName, setAuthorName] = useState('Admin');
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    setMounted(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) fetchBlogs();
    });
    return () => unsubscribe();
  }, []);

  const fetchBlogs = async () => {
    setIsLoadingBlogs(true);
    try {
      const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      setBlogList(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as any)));
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoadingBlogs(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try { await signInWithEmailAndPassword(auth, email, password); } 
    catch (error: any) { alert('Login failed: ' + error.message); }
  };

  // --- DASHBOARD ACTIONS ---
  const handleEditBlog = (blog: any) => {
    setEditId(blog.id);
    setTitle(blog.title);
    setSlug(blog.slug);
    setMetaDesc(blog.metaDesc);
    setAuthorName(blog.authorName || 'Admin');
    setBlocks(blog.blocks || []);
    setView('editor');
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await deleteDoc(doc(db, 'blogs', id));
      setBlogList(blogList.filter(b => b.id !== id));
      alert("Blog deleted successfully!");
    } catch (error: any) {
      alert("Error deleting blog: " + error.message);
    }
  };

  const resetEditor = () => {
    setEditId(null); setTitle(''); setSlug(''); setMetaDesc(''); setAuthorName('Admin'); setBlocks([]); setView('list');
    fetchBlogs();
  };

  // --- EDITOR ACTIONS ---
  const addBlock = (type: BlockType) => {
    const newBlock: Block = { id: Date.now().toString(), type };
    if (type === 'text') { newBlock.format = 'p'; newBlock.content = ''; }
    if (type === 'table') { newBlock.tableRows = [{ cells: ['Header 1', 'Header 2'] }, { cells: ['Row 1', 'Row 2'] }]; }
    setBlocks([...blocks, newBlock]);
  };

  const updateBlock = (id: string, updates: Partial<Block>) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, ...updates } : b));
  };

  const removeBlock = (id: string) => setBlocks(blocks.filter(b => b.id !== id));

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    if ((direction === 'up' && index === 0) || (direction === 'down' && index === blocks.length - 1)) return;
    const newBlocks = [...blocks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];
    setBlocks(newBlocks);
  };

  const handleImageUpload = async (id: string, file: File) => {
    const storageRef = ref(storage, `blogs/${slug || 'draft'}/${Date.now()}_${file.name}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      updateBlock(id, { url, alt: file.name });
    } catch (error: any) {
      alert("Image upload failed: " + error.message);
    }
  };

  const handleSave = async (isDraft: boolean) => {
    if (!title || !slug || blocks.length === 0) return alert("Fill title, slug and add at least 1 block.");
    setIsPublishing(true);
    
    const blogData = {
      title, slug, metaDesc, authorName, blocks, isDraft,
      updatedAt: serverTimestamp(),
    };

    try {
      if (editId) {
        await updateDoc(doc(db, 'blogs', editId), blogData);
        alert(isDraft ? 'Draft Updated!' : 'Blog Published Successfully! 🔥');
      } else {
        await addDoc(collection(db, 'blogs'), { ...blogData, createdAt: serverTimestamp() });
        alert(isDraft ? 'Draft Saved!' : 'Rich Blog Published! 🔥');
      }
      resetEditor();
    } catch (error: any) {
      alert('Error saving to database: ' + error.message);
    } finally {
      setIsPublishing(false);
    }
  };

  // 1. LOGIN UI
  if (!user) {
    return (
      <div className="min-h-screen bg-[var(--bg-base)] flex items-center justify-center p-10 transition-colors duration-300">
        <form onSubmit={handleLogin} className="bg-[var(--bg-card)] p-8 rounded-2xl w-full max-w-md flex flex-col gap-4 border border-[var(--border-color)] shadow-[var(--shadow-main)]">
          <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Admin Login</h1>
          <input required type="email" placeholder="Email" className="p-3 bg-[var(--bg-input)] border border-[var(--border-color)] rounded text-[var(--text-primary)] outline-none focus:border-[var(--accent)]" value={email} onChange={e => setEmail(e.target.value)} />
          <input required type="password" placeholder="Password" className="p-3 bg-[var(--bg-input)] border border-[var(--border-color)] rounded text-[var(--text-primary)] outline-none focus:border-[var(--accent)]" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" className="bg-[var(--accent)] text-[#1a1917] font-bold p-3 rounded hover:brightness-110 shadow-md">Login</button>
        </form>
      </div>
    );
  }

  // 2. DASHBOARD LIST VIEW
  if (view === 'list') {
    return (
      <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] p-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-[var(--border-color)] pb-4">
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">Blog Dashboard</h1>
            <div className="flex items-center gap-4">
              {mounted && (
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}
              <button onClick={() => { setEditId(null); setView('editor'); }} className="bg-[var(--accent)] text-[#1a1917] px-4 py-2 rounded font-bold shadow-md hover:brightness-110">+ Create New</button>
              <button onClick={() => signOut(auth)} className="text-red-500 border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded transition-colors">Logout</button>
            </div>
          </div>

          {isLoadingBlogs ? <p className="text-[var(--text-secondary)] animate-pulse">Loading blogs...</p> : (
            <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] shadow-[var(--shadow-main)] overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[var(--bg-nav)] border-b border-[var(--border-color)] text-[var(--text-secondary)]">
                  <tr>
                    <th className="p-4 font-medium">Title</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Author</th>
                    <th className="p-4 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogList.map(blog => (
                    <tr key={blog.id} className="border-b border-[var(--border-color)] hover:bg-[var(--bg-base)] transition-colors">
                      <td className="p-4 font-semibold text-[var(--text-primary)]">{blog.title}</td>
                      <td className="p-4">{blog.isDraft ? <span className="text-yellow-600 bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded text-xs">Draft</span> : <span className="text-[var(--accent)] bg-[var(--accent-bg)] border border-[var(--accent-border)] px-2 py-1 rounded text-xs">Published</span>}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{blog.authorName || 'Admin'}</td>
                      <td className="p-4 text-right flex justify-end gap-3">
                        <button onClick={() => handleEditBlog(blog)} className="text-blue-500 hover:text-blue-600 font-medium">Edit</button>
                        <button onClick={() => handleDeleteBlog(blog.id)} className="text-red-500 hover:text-red-600 font-medium">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 3. EDITOR VIEW
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] p-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="flex justify-between items-center border-b border-[var(--border-color)] pb-4">
          <div className="flex items-center gap-4">
            <button onClick={resetEditor} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">← Back</button>
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">{editId ? 'Edit Blog' : 'Create Rich Blog'}</h1>
          </div>
          {mounted && (
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)] shadow-[var(--shadow-main)]">
          <input required placeholder="Blog Title" className="col-span-2 p-3 bg-[var(--bg-input)] border border-[var(--border-color)] rounded outline-none focus:border-[var(--accent)] text-[var(--text-primary)]" value={title} onChange={e => setTitle(e.target.value)} />
          <input required placeholder="URL Slug (e.g., best-pos)" className="p-3 bg-[var(--bg-input)] border border-[var(--border-color)] rounded outline-none focus:border-[var(--accent)] text-[var(--text-primary)]" value={slug} onChange={e => setSlug(e.target.value)} />
          <input required placeholder="Author Name" className="p-3 bg-[var(--bg-input)] border border-[var(--border-color)] rounded outline-none focus:border-[var(--accent)] text-[var(--text-primary)]" value={authorName} onChange={e => setAuthorName(e.target.value)} />
          <textarea required placeholder="Meta Description" className="col-span-2 p-3 bg-[var(--bg-input)] border border-[var(--border-color)] rounded outline-none focus:border-[var(--accent)] text-[var(--text-primary)] h-20 resize-y" value={metaDesc} onChange={e => setMetaDesc(e.target.value)} />
        </div>

        <div className="flex flex-col gap-4">
          {blocks.map((block, index) => (
            <div key={block.id} className="relative bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border-color)] shadow-sm group">
              <div className="absolute right-4 top-4 flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity z-10">
                <button onClick={() => moveBlock(index, 'up')} className="bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] p-1.5 rounded hover:bg-[var(--accent)] hover:text-[#1a1917] hover:border-[var(--accent)] transition-colors">↑</button>
                <button onClick={() => moveBlock(index, 'down')} className="bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] p-1.5 rounded hover:bg-[var(--accent)] hover:text-[#1a1917] hover:border-[var(--accent)] transition-colors">↓</button>
                <button onClick={() => removeBlock(block.id)} className="bg-red-500/10 text-red-500 p-1.5 rounded border border-red-500/20 hover:bg-red-500 hover:text-white transition-colors">✕</button>
              </div>

              {block.type === 'text' && (
                <div className="flex flex-col gap-2 pt-6">
                  <select className="bg-[var(--bg-input)] border border-[var(--border-color)] text-[var(--text-primary)] p-2 rounded w-32 outline-none focus:border-[var(--accent)]" value={block.format} onChange={(e) => updateBlock(block.id, { format: e.target.value as any })}>
                    <option value="p">Paragraph</option>
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="ul">Bullet List</option>
                  </select>
                  <textarea placeholder="Type here..." className="w-full bg-[var(--bg-input)] border border-[var(--border-color)] text-[var(--text-primary)] outline-none focus:border-[var(--accent)] rounded p-3 min-h-[100px]" value={block.content} onChange={(e) => updateBlock(block.id, { content: e.target.value })} />
                </div>
              )}

              {block.type === 'image' && (
                <div className="flex flex-col gap-2 pt-6">
                  {block.url ? (
                    <img src={block.url} alt="Preview" className="h-40 object-contain bg-[var(--bg-base)] rounded border border-[var(--border-color)]" />
                  ) : (
                    <input type="file" accept="image/*" onChange={(e) => e.target.files && handleImageUpload(block.id, e.target.files[0])} className="p-4 border border-dashed border-[var(--border-strong)] rounded text-[var(--text-secondary)] cursor-pointer hover:border-[var(--accent)] transition-colors" />
                  )}
                  <input placeholder="Image Alt Text (SEO)" className="w-full bg-[var(--bg-input)] border border-[var(--border-color)] text-[var(--text-primary)] outline-none focus:border-[var(--accent)] rounded p-2 mt-2" value={block.alt || ''} onChange={(e) => updateBlock(block.id, { alt: e.target.value })} />
                </div>
              )}

              {block.type === 'table' && (
                <div className="flex flex-col gap-2 pt-6 overflow-x-auto">
                  {block.tableRows?.map((row, rIdx) => (
                    <div key={rIdx} className="flex gap-2 min-w-max">
                      {row.cells.map((cell, cIdx) => (
                        <div key={cIdx} className="flex flex-col gap-1 relative group/cell">
                          <input className={`p-2 bg-[var(--bg-input)] border border-[var(--border-color)] outline-none focus:border-[var(--accent)] rounded w-48 ${rIdx === 0 ? 'text-[var(--text-primary)] font-bold bg-[var(--bg-base)]' : 'text-[var(--text-secondary)]'}`} value={cell}
                            onChange={(e) => {
                              const newRows = block.tableRows!.map(r => ({ cells: [...r.cells] }));
                              newRows[rIdx].cells[cIdx] = e.target.value;
                              updateBlock(block.id, { tableRows: newRows });
                            }}
                          />
                          {rIdx === 0 && block.tableRows![0].cells.length > 1 && (
                             <button 
                                onClick={() => {
                                  const newRows = block.tableRows!.map(r => {
                                    const newCells = [...r.cells];
                                    newCells.splice(cIdx, 1);
                                    return { cells: newCells };
                                  });
                                  updateBlock(block.id, { tableRows: newRows });
                                }}
                                className="absolute -top-6 right-0 text-xs text-red-500 opacity-0 group-hover/cell:opacity-100 transition-opacity font-medium"
                             >
                               Del Col
                             </button>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="flex gap-4 mt-2">
                    <button onClick={() => {
                      const newRows = block.tableRows!.map(r => ({ cells: [...r.cells] }));
                      newRows.push({ cells: Array(newRows[0].cells.length).fill('') });
                      updateBlock(block.id, { tableRows: newRows });
                    }} className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors font-medium text-left">+ Add Row</button>
                    <button onClick={() => {
                      const newRows = block.tableRows!.map(r => {
                        const newCells = [...r.cells];
                        newCells.push(`Col ${newCells.length + 1}`); 
                        return { cells: newCells };
                      });
                      updateBlock(block.id, { tableRows: newRows });
                    }} className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors font-medium text-left">+ Add Column</button>
                  </div>
                </div>
              )}

              {block.type === 'card' && (
                <div className="flex flex-col gap-3 pt-6 border-l-4 border-[var(--accent)] pl-4 ml-2">
                  <input placeholder="Card Title" className="p-2 bg-[var(--bg-input)] border border-[var(--border-color)] outline-none focus:border-[var(--accent)] rounded text-[var(--text-primary)] font-bold" value={block.cardTitle || ''} onChange={(e) => updateBlock(block.id, { cardTitle: e.target.value })} />
                  <textarea placeholder="Card Description..." className="p-2 bg-[var(--bg-input)] border border-[var(--border-color)] outline-none focus:border-[var(--accent)] text-[var(--text-secondary)] rounded h-20 resize-y" value={block.cardDesc || ''} onChange={(e) => updateBlock(block.id, { cardDesc: e.target.value })} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center py-6">
          <button onClick={() => addBlock('text')} className="bg-[var(--bg-card)] hover:bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm">+ Text Block</button>
          <button onClick={() => addBlock('image')} className="bg-[var(--bg-card)] hover:bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm">+ Image Block</button>
          <button onClick={() => addBlock('table')} className="bg-[var(--bg-card)] hover:bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm">+ Table Block</button>
          <button onClick={() => addBlock('card')} className="bg-[var(--bg-card)] hover:bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm">+ Info Card</button>
        </div>

        <div className="flex gap-4 w-full">
          <button onClick={() => handleSave(true)} disabled={isPublishing} className="w-1/3 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold p-4 rounded-xl hover:bg-[var(--bg-base)] shadow-sm text-lg transition-colors disabled:opacity-50">
            Save as Draft
          </button>
          <button onClick={() => handleSave(false)} disabled={isPublishing} className="w-2/3 bg-[var(--accent)] text-[#1a1917] font-bold p-4 rounded-xl hover:brightness-110 shadow-[0_4px_14px_var(--accent-bg)] text-lg transition-all disabled:opacity-50">
            {isPublishing ? 'Saving...' : 'Publish Post'}
          </button>
        </div>
      </div>
    </div>
  );
}