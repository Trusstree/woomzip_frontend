/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["trussbucket.s3.ap-northeast-2.amazonaws.com", "trussbucketdev.s3.ap-northeast-2.amazonaws.com", "*"],
  },
  rewrites: () => [
    {
      source: "/v1/nid/me", // url이 source에 해당될 경우
      destination: "https://openapi.naver.com/v1/nid/me", // destination으로 redirect
    },
  ],
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: true,
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;
