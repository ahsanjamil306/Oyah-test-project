/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// loading images online
module.exports = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "boltlaundry.com",
      "assets3.thrillist.com",
      "surfsideonthelake.com",
      "media.capc.org",
      "www.ventvenir.com",
      "images.unsplash.com",
      "1000logos.net",
      
    ],
  },
};
