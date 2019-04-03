import Vue from 'vue'

function toggle (transition) {
  transition.open = !transition.open
}

const Dropdown = Vue.directive('dropdown', {
  bind (el, binding, vNode) {
    console.log(binding)

    const trigger = el.querySelector('.trigger')
    // const content = el.querySelector('.content')
    // if (!trigger || !content) {
    //   throw new Error('[Vue-dropdown:] needs two childs, a trigger Element and a content Element')
    // }

    // append transition wrapper
    const transition = document.createElement('ltd-dropdown-transition')
    el.appendChild(transition)
    const fragment = document.createDocumentFragment()
    const html = document.createElement('DIV')
    html.innerHTML = binding.value
    fragment.appendChild(html)
    transition.appendChild(fragment)

    trigger.style.cursor = 'pointer'
    trigger.addEventListener('click', () => toggle(transition), false)
  },

  update (el, binding) {

  },

  unbind (el, binding, vNode) {
    const trigger = el.querySelector('.trigger')
    trigger.removeEventListener('click', () => toggle())
  }
})

export default Dropdown
