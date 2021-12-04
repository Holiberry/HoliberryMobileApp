const appName = 'EcoHeroes'
export const configuration = {
  APP_VERSION: '0.0.4',
  VERSION_CODE: 4,
  bundleName: 'com.holiberry.walky',
}

export default {
  'expo': {
    'name': appName,
    'slug': appName,
    'version': configuration.APP_VERSION,
    'orientation': 'portrait',
    'icon': './assets/icon.png',
    'splash': {
      'image': './assets/splash.png',
      'resizeMode': 'cover',
    },
    'updates': {
      'enabled': false,
    },
    'assetBundlePatterns': [
      '**/*',
    ],
    'ios': {
      'bundleIdentifier': configuration.bundleName,
      'buildNumber': configuration.APP_VERSION,
      'supportsTablet': false,
      'userInterfaceStyle': 'light',
    },
    'android': {
      'package': configuration.bundleName,
      'versionCode': configuration.VERSION_CODE,
      'userInterfaceStyle': 'light',
      'permissions': [],
      'adaptiveIcon': {
        'backgroundColor': '#154765'
      },
    },
    'web': {
      'favicon': './assets/favicon.png'
    },
    'userInterfaceStyle': 'light',
    "plugins": [],
  }
}