/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
