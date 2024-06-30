/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/app/pages',
            destination: '/index', // 你想要作为首页的路径
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
