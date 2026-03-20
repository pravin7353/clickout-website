import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Yahan apna naya AuthProvider import kar
import { AuthProvider } from "@/context/AuthContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClickOut - Multi-Tenant System",
  description: "Scalable Store Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Poore app ko AuthProvider se wrap kar de */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}