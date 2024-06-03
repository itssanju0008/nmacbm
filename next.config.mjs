/** @type {import('next').NextConfig} */
const nextConfig = {trailingSlash: true,
    // output: 'export',
    images: {
      domains: ['https://nmacmedia.quicsy.com/','https://nmac.bm/'],
      unoptimized: true
    }};

export default nextConfig;
