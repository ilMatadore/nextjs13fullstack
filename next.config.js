/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ["images.pexels.com", "via.placeholder.com"],
    //   },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
}

module.exports = nextConfig
