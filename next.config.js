/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
      {
        protocol: 'https',
        hostname: 'flagsapi.com',
      },
    ],
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Add other pages if needed
    };
  },
};

module.exports = nextConfig;
