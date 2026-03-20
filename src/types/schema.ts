// Strict data structures for ClickOut multi-tenant scaling
export type UserRole = 'OWNER' | 'STAFF' | 'ADMIN';

export interface StoreTenant {
  id: string;             // Unique Store ID
  storeName: string;
  ownerUid: string;       // Firebase Auth UID of the creator
  isActive: boolean;
  createdAt: number;      // Unix timestamp for fast querying
}

export interface StoreUser {
  uid: string;
  email: string;
  storeId: string;        // Strict Tenant Isolation Key
  role: UserRole;
  createdAt: number;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'CREDIT' | 'DEBIT';
  processedBy: string;    // User UID who did the transaction
  timestamp: number;
}