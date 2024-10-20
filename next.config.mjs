/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "copycopter.ai",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
