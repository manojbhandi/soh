/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["134.209.150.140"],
  },

  transpilePackages: ["gsap"],
};

export default nextConfig;
