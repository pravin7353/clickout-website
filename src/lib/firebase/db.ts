import { collection, doc, DocumentReference, CollectionReference } from 'firebase/firestore';
import { db } from './client';
import { StoreTenant, StoreUser, Transaction } from '@/types/schema';

// 1. Core Collections
export const STORES_COLLECTION = 'stores';
export const GLOBAL_USERS_COLLECTION = 'users';
export const BLOGS_COLLECTION = 'blogs'; // SEO Blog Collection

// 2. Scalable Helper Functions (Ensures Tenant Isolation in Queries)
export const getStoreRef = (storeId: string): DocumentReference => {
  if (!storeId) throw new Error("Store ID is required for tenant isolation");
  return doc(db, STORES_COLLECTION, storeId);
};

// 3. Sub-collection Pattern for 10M+ Daily Transactions
// Path: stores/{storeId}/transactions
export const getStoreTransactionsRef = (storeId: string): CollectionReference => {
  if (!storeId) throw new Error("Store ID is required for transaction isolation");
  return collection(db, `${STORES_COLLECTION}/${storeId}/transactions`);
};

// Path: stores/{storeId}/staff
export const getStoreStaffRef = (storeId: string): CollectionReference => {
  if (!storeId) throw new Error("Store ID is required for staff isolation");
  return collection(db, `${STORES_COLLECTION}/${storeId}/staff`);
};