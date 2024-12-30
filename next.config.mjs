/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    productionBrowserSourceMaps: true,
    reactProductionProfiling:true,
    outputFileTracing:true,
    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/auth/login',
          permanent: true,
        },
      ]
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    swcMinify: true,
};

export default nextConfig;
