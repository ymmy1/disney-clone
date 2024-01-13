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
  // Add the following lines for static HTML export
  target: 'experimental-serverless-trace',
  basePath: '',
};

module.exports = nextConfig;
