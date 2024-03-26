const { getDefaultConfig } = require('metro-config')
const { withNativeWind } = require('nativewind/metro')

const config = getDefaultConfig(__dirname)

module.exports = (async () => {
  withNativeWind(config, { input: './styles/global.css' })
  const defaultConfig = await getDefaultConfig()
  return {
    ...defaultConfig,
    resolver: {
      ...defaultConfig.resolver,
      assetExts: [
        ...defaultConfig.resolver.assetExts,
        'png',
        'jpg',
        'jpeg',
        'gif',
      ],
    },
  }
})()
