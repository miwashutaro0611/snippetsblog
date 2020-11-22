const {resolve} = require('path')
const rootPath = resolve(__dirname, '../src/')

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/addon-a11y/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-knobs/register',
    'storybook-dark-mode/register'
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['vue'] = 'vue/dist/vue.esm.js'
    config.resolve.alias['@'] = rootPath
    config.resolve.alias['~'] = rootPath
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: ['./src/assets/scss/resource.scss'],
            include: resolve(__dirname, '../')
          }
        }
      ],
      include: resolve(__dirname, '../'),
    });
    return config;
  },
};
