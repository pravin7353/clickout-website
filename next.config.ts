import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow local network IPs for development
  allowedDevOrigins: [
    'http://172.31.185.59:3000',
    '172.31.185.59',
    '10.37.212.59',    // <-- YEH RAHA TERA NAYA IP
    'localhost'
  ],
};

export default nextConfig;