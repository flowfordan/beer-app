/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
	//allowed server for images
    domains: ['images.punkapi.com']
  },

  webpack(config) {
    config.module.rules.push({
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              //plugins: [{removeViewBox: false}],
              plugins: [{
                name: 'preset-default',
                params: {
                  override: {removeViewBox: false}
                }
              }],
            },
            titleProp: true,
          },
        } 
      ],
      issuer: /\.[jt]sx?$/,
      

      test: /\.svg$/,
    });

    return config;
  }
};

module.exports = nextConfig;
