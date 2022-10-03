/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.pokemontcg.io"],
  },
};

module.exports = nextConfig;
