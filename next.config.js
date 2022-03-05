/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["links.papareact.com","image.tmdb.org"],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
