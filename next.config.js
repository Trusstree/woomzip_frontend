/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'woomzip-prod.s3.ap-northeast-2.amazonaws.com',
        pathname: '**',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'trussbucketdev.s3.ap-northeast-2.amazonaws.com',
      //   pathname: '**',
      // },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  rewrites: () => [
    {
      source: '/v1/nid/me', // url이 source에 해당될 경우
      destination: 'https://openapi.naver.com/v1/nid/me', // destination으로 redirect
    },
  ],
  compiler: {
    styledComponents: true,
  },
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async redirects() {
    return [
      {
        source: '/legacy',
        destination: '/', // 리디렉션할 URL
        permanent: false,
      },
    ];
  },
};


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
 
module.exports = withBundleAnalyzer(nextConfig)