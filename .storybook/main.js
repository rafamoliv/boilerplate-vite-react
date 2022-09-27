const { resolve } = require('path')
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  "stories": [
    "../src/components/**/*.stories.@(js|jsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
    "interactionsDebugger": true,
  },
  viteFinal: async (config) => {
    const { config: userConfig } = await loadConfigFromFile(
      resolve(__dirname, '../vite.config.js')
    )

    return mergeConfig(config, {
      ...userConfig,
      plugins: [],
    })
  },
}
