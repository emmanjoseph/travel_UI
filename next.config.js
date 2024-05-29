const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,  // Disable image optimization to be compatible with static export
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: "",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  