const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#5B73E8",
              "@font-size-base": "16px",
              "@border-radius-base": "4px",
              "@menu-item-boundary-margin": "0px",
              "@menu-item-vertical-margin": "4px",
              "@input-padding-vertical-base": "4px",
              "@select-dropdown-vertical-padding": "4px",
              "@select-dropdown-height": "35px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
