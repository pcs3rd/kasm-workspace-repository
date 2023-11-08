/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'PCS3RD',
    description: 'Pcs3rd`s kasm registry',
    icon: '/img/logo.svg',
    listUrl: 'https://pcs3rd.github.io/kasm-workspace-repository/1.0/',
    contactUrl: '',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-workspace-repository/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
