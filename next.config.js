/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
  },
}

module.exports = nextConfig
