'use client';

import { useState } from 'react';
import { auth, db } from '@/lib/firebase/client';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [storeName, setStoreName] = useState(''); // Only for signup
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        // --- LOGIN FLOW ---
        await signInWithEmailAndPassword(auth, email, password);
        router.push('/dashboard'); // Redirect after login
      } else {
        // --- SIGNUP & TENANT CREATION FLOW ---
        if (!storeName.trim()) throw new Error('Store Name is required');
        
        // 1. Create Auth User
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // 2. Create Store (Tenant) Document
        const storeRef = doc(db, 'stores', user.uid); // Using UID as Store ID for the owner
        await setDoc(storeRef, {
          id: user.uid,
          storeName: storeName,
          ownerUid: user.uid,
          isActive: true,
          createdAt: serverTimestamp(),
        });

        // 3. Create User Profile linked to the Store
        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          storeId: user.uid, // Strict mapping to their store
          role: 'OWNER',
          createdAt: serverTimestamp(),
        });

        router.push('/dashboard'); // Redirect after signup
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-center text-gray-900">
        {isLogin ? 'Login to ClickOut' : 'Create your Store'}
      </h2>
      
      {error && <div className="p-3 text-sm text-red-500 bg-red-50 rounded">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Store Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
        >
          {loading ? 'Processing...' : (isLogin ? 'Login' : 'Create Store')}
        </button>
      </form>

      <p className="text-sm text-center text-gray-600">
        {isLogin ? "Don't have an account? " : "Already have a store? "}
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 hover:underline"
        >
          {isLogin ? 'Sign up' : 'Login'}
        </button>
      </p>
    </div>
  );
}