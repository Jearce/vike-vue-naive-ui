import { h } from 'vue'
import { useConfig } from 'vike-vue/useConfig'

import type { OnAfterRenderHtmlSync } from 'vike-vue/types'

export { addCollectedCss }

const addCollectedCss: OnAfterRenderHtmlSync = ({ collect })=>{
  const config = useConfig()
  const css = collect!()
  config({ 
    Head: h('fragment', {
      innerHTML: css
    })
  })
  return {}
}
