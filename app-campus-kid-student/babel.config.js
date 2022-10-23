module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '@modules/',
            rootPathSuffix: './src/modules'
          },
          {
            rootPathPrefix: '@navigation',
            rootPathSuffix: './src/navigation'
          },
          {
            rootPathPrefix: '@providers',
            rootPathSuffix: './src/providers'
          },
          {
            rootPathPrefix: '@icons/',
            rootPathSuffix: './src/shared/assets/icons'
          },
          {
            rootPathPrefix: '@locales/',
            rootPathSuffix: './src/shared/assets/locales'
          },
          {
            rootPathPrefix: '@shared_assistants',
            rootPathSuffix: './src/shared/assistants'
          },
          {
            rootPathPrefix: '@shared_components',
            rootPathSuffix: './src/shared/components'
          },
          {
            rootPathPrefix: '@shared_constants',
            rootPathSuffix: './src/shared/constants'
          },
          {
            rootPathPrefix: '@shared_enums',
            rootPathSuffix: './src/shared/enums'
          },
          {
            rootPathPrefix: '@shared_hooks',
            rootPathSuffix: './src/shared/hooks'
          },
          {
            rootPathPrefix: '@shared_services',
            rootPathSuffix: './src/shared/services'
          },
          {
            rootPathPrefix: '@shared_types',
            rootPathSuffix: './src/shared/types'
          },
          {
            rootPathPrefix: '@shared_utils',
            rootPathSuffix: './src/shared/utils'
          },
          {
            rootPathPrefix: '@test_shared',
            rootPathSuffix: './src/test-shared'
          },
          {
            rootPathPrefix: '@theme',
            rootPathSuffix: './src/theme'
          }
        ]
      }
    ]
  ]
};
