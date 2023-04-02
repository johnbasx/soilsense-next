/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'flowbite.com',
      'flowbite.s3.amazonaws.com',
    ],
  },
  distDir: 'build',
  // for language modules
  i18n,
}

module.exports = nextConfig
