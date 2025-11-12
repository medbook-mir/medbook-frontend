import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: false,

  async rewrites() {
    return [
      // ✅ match /api/doctors/:id and send to external API
      {
        source: '/api/doctors/:id',
        destination: 'https://www.api.medvisit.uz/api/doctors/by-id/:id/',
      },
      // ✅ fallback for any other /api/* requests
      {
        source: '/api/:path*',
        destination: 'https://www.api.medvisit.uz/api/:path*',
      },
    ]
  },
}

export default withNextIntl(nextConfig)
