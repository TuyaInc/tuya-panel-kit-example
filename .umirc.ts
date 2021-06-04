import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'all',
  },
  extraBabelPresets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  alias: {
    "tuya-panel-kit": 'tuya-panel-kit-web',
  },
  fastRefresh: {},
});
