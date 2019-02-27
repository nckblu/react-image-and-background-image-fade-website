const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };

    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: "raw-loader",
        },
      ],
    });

    return config;
  },
});
