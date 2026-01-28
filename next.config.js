const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "th.bing.com" },
      { protocol: "https", hostname: "cdn.sanity.io" }
    ],
  }
};

module.exports = nextConfig;
