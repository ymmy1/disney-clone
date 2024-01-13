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
  async generateStaticParams() {
    // Customize the static paths as needed
    return [
      {
        path: '/',
        html: await import('fs').promises.readFile(
          'path-to-your-homepage.html',
          'utf8'
        ),
      },
      // Add other paths if needed
    ];
  },
};

module.exports = nextConfig;
