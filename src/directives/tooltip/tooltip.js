import Vue from 'vue'
import Tooltip from '@/components/tooltip/tooltip'

const TooltipDirective = Vue.directive('tooltip', {
  bind (el, binding, vNode) {
    el.style.position = 'relative'
    const Component = Vue.extend(Tooltip)
    const instance = new Component({
      propsData: { text: 'primary' }
    })
    instance.$mount()
    console.log(instance)
    el.appendChild(instance.$el)
  },

  update (el, binding) {
  },

  unbind (el, binding, vNode) {
  }
})

export default TooltipDirective
