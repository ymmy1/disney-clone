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
  output: 'export', // Use 'export' for static export
};

module.exports = nextConfig;
