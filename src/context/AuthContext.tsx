'use client'; // Required for Next.js App Router context

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase/client';

// 1. Strict typing for auth state
interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true });

// 2. Scalable Provider to wrap the app and listen for auth changes
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase listener setup (avoids memory leaks)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {/* Show nothing until auth state is resolved to prevent UI flashing */}
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Custom hook for easy access in any component
export const useAuth = () => useContext(AuthContext);