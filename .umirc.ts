import { defineConfig } from 'umi';
import { join } from 'path'

const flatDep = ['react-native-gesture-handler', 'react-native-svg']

export default defineConfig({
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
    '../picker-view': '../picker-view/index.web.js'
  },
  fastRefresh: {},
});
