/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
    optimizeCss: false, // disable lightningcss, fallback to postcss
  },
};

export default nextConfig;
