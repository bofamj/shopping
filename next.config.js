/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
      { hostname: 'i.dummyjson.com' },
    ],
  },
}

module.exports = nextConfig
