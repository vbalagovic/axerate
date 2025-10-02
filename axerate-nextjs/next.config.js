/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.neural-draft.com',
      },
      {
        protocol: 'https',
        hostname: 'api.axerate.com',
      },
    ],
  },
};

module.exports = nextConfig;
