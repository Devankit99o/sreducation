/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['via.placeholder.com', 'cdn.sanity.io'],
    },
    eslint: {
      // Disable ESLint during the build process
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  
