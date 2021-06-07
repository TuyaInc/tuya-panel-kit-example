import { defineConfig } from 'umi';
import { join } from 'path'

const flatDep = ['react-native-gesture-handler']

export default defineConfig({
  nodeModulesTransform: {
    type: 'all',
  },
  locale: {
    default: 'zh'
  },
  alias: {
    "tuya-panel-kit": 'tuya-panel-kit-web',
    ...flatDep.reduce((acc, dep) => ({ ...acc, [dep]: join(__dirname, `node_modules`, dep) }), {}),
    "@modules": join(__dirname, "./src/modules"),
    "@components": join(__dirname, "./src/components"),
    "@hooks": join(__dirname, "./src/hooks"),
    "@i18n": join(__dirname, "./src/i18n"),
  },
  fastRefresh: {},
});
