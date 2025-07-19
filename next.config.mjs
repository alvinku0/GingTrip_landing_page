/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages configuration
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/GingTrip_landing_page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/GingTrip_landing_page/' : '',
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },

  // Image optimization settings (disabled for static export)
  images: {
    // formats: ['image/webp', 'image/avif'],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    unoptimized: true,
  },

  // Compression and performance
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header for security
  
  // Security headers
  // Not supported in static export - comment out
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         // Security headers
  //         {
  //           key: 'X-DNS-Prefetch-Control',
  //           value: 'on'
  //         },
  //         {
  //           key: 'X-XSS-Protection',
  //           value: '1; mode=block'
  //         },
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'SAMEORIGIN'
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff'
  //         },
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'origin-when-cross-origin'
  //         },
  //         {
  //           key: 'Permissions-Policy',
  //           value: 'camera=(), microphone=(), geolocation=()'
  //         },
  //         // Content Security Policy
  //         {
  //           key: 'Content-Security-Policy',
  //           value: [
  //             "default-src 'self'",
  //             "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com",
  //             "style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com",
  //             "img-src 'self' data: https:",
  //             "font-src 'self' https://cdnjs.cloudflare.com",
  //             "connect-src 'self'",
  //             "frame-ancestors 'self'",
  //           ].join('; ')
  //         },
  //         // Performance headers
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable'
  //         }
  //       ],
  //     },
  //     // Static assets caching
  //     {
  //       source: '/(.*)\\.(js|css|woff|woff2|eot|ttf|otf|png|jpg|jpeg|gif|svg|ico|webp|avif)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable'
  //         }
  //       ],
  //     },
  //     // API routes
  //     {
  //       source: '/api/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'no-store, must-revalidate'
  //         }
  //       ],
  //     }
  //   ];
  // },

  // Redirects for invalid routes (not supported in static export - comment out)
  // async redirects() {
  //   return [
  //     {
  //       source: '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\.)(?!^$).+)',
  //       destination: '/',
  //       permanent: false,
  //     },
  //   ];
  // },

  // Environment variables validation
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Bundle analyzer (commented out for production)
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //     };
  //   }
  //   return config;
  // },
};

export default nextConfig;
