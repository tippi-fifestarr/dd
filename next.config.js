/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org", "ipfs.thirdwebcdn.com"],
  },
};

module.exports = nextConfig;
