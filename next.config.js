/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  rewrites: () =>[
    {
      source: '/v1/nid/me', // url이 source에 해당될 경우
      destination: 'https://openapi.naver.com/v1/nid/me', // destination으로 redirect
    }
  ]
}

module.exports = nextConfig
