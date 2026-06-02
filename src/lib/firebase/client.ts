import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// YAHAN APNE PURANE WORKING PROJECT KA CONFIG PASTE KARNA
const firebaseConfig = {
  apiKey: "AIzaSyBgLdkpEDJSMpGKPiIwHqwHYRU0sGVVPBg",
  authDomain: "clickout-cfa95.firebaseapp.com",
  projectId: "clickout-cfa95",
  storageBucket: "clickout-cfa95.firebasestorage.app",
  messagingSenderId: "127640175838",
  appId: "G-X6G9Q8RM90",
};

// YEH LINE HUME CHOR PAKADNE MEIN MADAD KAREGI
console.log("🔥 BROWSER IS READING THIS API KEY:", firebaseConfig.apiKey);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };