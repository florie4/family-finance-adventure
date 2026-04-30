// next.config.js

module.exports = {
  images: {
    domains: ['example.com'], // Specify your allowed image domains here
  },
  env: {
    API_URL: process.env.API_URL, // Environment variable for API
    OTHER_ENV_VAR: process.env.OTHER_ENV_VAR, // Add other environment variables as required
  },
  async redirects() {
    return [{
      source: '/old-route',
      destination: '/new-route',
      permanent: true,
    }];
  },
  async rewrites() {
    return [{
      source: '/api/:path*',
      destination: '/api/index.js', // Your API route
    }];
  },
};
