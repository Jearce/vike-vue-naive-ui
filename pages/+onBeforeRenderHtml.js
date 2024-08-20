import { setup } from '@css-render/vue3-ssr'

export { onBeforeRenderHtml }

function onBeforeRenderHtml(pageContext){
  pageContext.collect = setup(pageContext.app).collect
}
