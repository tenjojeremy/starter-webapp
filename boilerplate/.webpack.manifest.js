const localIp = require('get-my-local-ip')

// Theme Manifest
const ThemeManifestModule = require('./src/Theme/Theme.manifest')
const { ThemeManifest: theme } = ThemeManifestModule

// logo
const logoStringModule = require('./src/Images/logo/logo')
const { logoStringModule: logoString } = logoStringModule

// Google Analytics manifest
// const gaManifestModules = require('./analytics/google/googleAnalytics/gaManifest')

exports.manifest = {
  projectInfo: {
    name: 'Webapp',
    shortName: 'Webapp',
    description: 'Webapp Template',
    logo: {
      path: 'src/images/logo/logo.png',
    },
  },
  analytics: {
    google: {
      analytics: '',
    },
  },
  theme,
  webpack: {
    devServer: {
      port: 3001,
      host: localIp.address,
    },
    entry: './src/srcIndex.js',
    plugins: {
      html: {
        bodyHtmlSnippet: logoString,
      },
      workbox: {
        swSrc: './src/ServiceWorker/sw.js',
        swDest: 'sw.js',
      },
    },
  },
}
