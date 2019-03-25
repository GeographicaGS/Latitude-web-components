import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'

import Button from '@/components/button'
import ButtonYellow from '@/components/button-yellow'

const WrappedButton = wrap(Vue, Button)
const WrappedButtonYellow = wrap(Vue, ButtonYellow)

window.customElements.define('ltd-button', WrappedButton)
window.customElements.define('ltd-button-yellow', WrappedButtonYellow)
