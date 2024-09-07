import { type App } from 'vue'

import type { Config } from 'vike/types'
import type _ from 'vike-vue/config' // Needed for declaration merging of Config

export default {
  name: 'vike-vue-naive-ui',
  require: {
    'vike-vue': '>=0.8.3',
  },
  onBeforeRenderHtml: 'import:vike-vue-naive-ui/__internal/integration/setupCssCollect:setupCssCollect',
  onAfterRenderHtml: 'import:vike-vue-naive-ui/__internal/integration/addCollectedCss:addCollectedCss',
}

declare global {
  namespace Vike {
    interface PageContext {
      app?: App
      collect: () => string
    }
  }
}
