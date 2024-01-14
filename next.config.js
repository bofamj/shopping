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
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'cdn.dummyjson.com' },
    ],
  },
}
module.exports = {
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'origin',
            value: 'origin',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
