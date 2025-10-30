/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Ensure middleware and edge runtime work properly
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
