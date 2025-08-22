/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false, // disable lightningcss, fallback to postcss
  },

  // ✅ Add security headers for Google Fonts + API calls
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
              script-src 'self';
              img-src 'self' data:;
              connect-src 'self' ${process.env.NEXT_PUBLIC_API_URL || ""};
            `.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
