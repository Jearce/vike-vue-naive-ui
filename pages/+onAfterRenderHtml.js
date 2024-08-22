import { h } from 'vue'
import { useConfig } from 'vike-vue/useConfig'

export { onAfterRenderHtml }

function onAfterRenderHtml(pageContext){
  const config = useConfig()
  const css = pageContext.collect()
  config({ 
    Head: h('style', {
      type: '',
      innerHTML: css
    })
  })
}
