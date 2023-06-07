/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.brchallenges.com',
          port: '',
          pathname: '/shoes/**',
        },
      ],
    },
  }
