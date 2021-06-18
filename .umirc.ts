import { defineConfig, IConfig } from 'umi';
import { join } from 'path'

const isProd = process.env.NODE_ENV === 'production';

const flatDep = ['react-native-gesture-handler',]

export default defineConfig({
  history: { type: 'hash' },
  nodeModulesTransform: {
    type: 'all',
  },
  locale: {
    default: 'zh'
  },
  alias: {
    ...flatDep.reduce((acc, dep) => ({ ...acc, [dep]: join(__dirname, `node_modules`, dep) }), {}),
    "@modules": join(__dirname, "./src/modules"),
    "@components": join(__dirname, "./src/components"),
    "@hooks": join(__dirname, "./src/hooks"),
    "@i18n": join(__dirname, "./src/i18n"),
    'react-native-svg': 'react-native-svg-web'
  },
  fastRefresh: {},
  // code split
  ignoreMomentLocale: true,
  chainWebpack(config) {
    config.optimization.splitChunks({
      chunks: 'all',
      automaticNameDelimiter: '～',
      name: true,
      minSize: 30000,
      minChunks: 1,
      cacheGroups: {
        'tuya-panel-kit': {
          name: 'tuya-panel-kit',
          test: /[\\/]node_modules[\\/](tuya-panel-kit)[\\/]/,
          priority: -9,
          enforce: true,
        },
        'umi-plugin-react-native': {
          name: 'umi-plugin-react-native',
          test: /[\\/]node_modules[\\/](umi-plugin-react-native)[\\/]/,
          priority: -10,
          enforce: true,
        },
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -11,
          enforce: true,
        },
      },
    });
  },
  // https://umijs.org/zh-CN/config#chunks
  chunks: ['vendors', 'umi-plugin-react-native', 'tuya-panel-kit', 'umi'],
  hash: isProd,
  publicPath: isProd
    ? '//cdn.jsdelivr.net/gh/TuyaInc/tuya-panel-kit-example@gh-pages/'
    : '/',
} as IConfig);
