/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pbs.twimg.com',
            //port: '*',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'mockup-api.teespring.com',
          },
        ],
        
      },
}

module.exports = nextConfig
