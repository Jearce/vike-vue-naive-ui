export { config as default }

import { type App } from 'vue'
import type { Config } from 'vike/types'
import type { config as _ } from 'vike-vue/config' // Needed for declaration merging of Config

const config = {
  name: 'vike-vue-naive-ui',
  require: {
    'vike-vue': '>=0.8.3',
  },
  onBeforeRenderHtml: 'import:vike-vue-naive-ui/__internal/integration/setupCssCollect:setupCssCollect',
  onAfterRenderHtml: 'import:vike-vue-naive-ui/__internal/integration/addCollectedCss:addCollectedCss',
} satisfies Config

declare global {
  namespace Vike {
    interface PageContext {
      app?: App
      collect: () => string
    }
  }
}
