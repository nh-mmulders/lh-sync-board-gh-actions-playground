// Path: next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/lh-sync-status-board",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
