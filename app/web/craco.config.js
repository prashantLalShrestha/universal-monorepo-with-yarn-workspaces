const webpack = require('webpack');
const { getWebpackTools } = require('react-native-monorepo-tools');

const monorepoWebpackTools = getWebpackTools();

module.exports = {
  webpack: {
    configure: webpackConfig => {
      // Allow importing from external workspaces.
      monorepoWebpackTools.enableWorkspacesResolution(webpackConfig);
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === 'ModuleScopePlugin',
      );
      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      // Ensure nohoisted libraries are resolved from this workspace.
      monorepoWebpackTools.addNohoistAliases(webpackConfig);
      return webpackConfig;
    },
    plugins: [
      // Inject the "__DEV__" global variable.
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== 'production',
      }),
    ],
  },
};
