import { setup } from '@css-render/vue3-ssr'

import { OnBeforeRenderHtmlSync } from 'vike-vue/types'

export { setupCssCollect }

const setupCssCollect: OnBeforeRenderHtmlSync = (pageContext)=>{
  if( !pageContext.app ) {
     throw new Error('pageContext.app should be defined')
  }
  pageContext.collect = setup(pageContext.app).collect
}
