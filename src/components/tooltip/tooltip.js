// import styles from './tooltip.scss'

/**
 *  Tooltip script file
**/
export default {
  name: 'LtdTooltip', // web-component: ltd-tooltip
  functional: true,
  props: {
    text: {
      type: String,
      required: true
    }
  },
  template: // html
  `
    <div :class="getClass">
      <p>{{text}}</p>
    </div>
  `,
  computed: {
    getClass () {
      return {
        'ltd-tooltip-container': true,
        'top': true,
        'bottom': true,
        'left': true,
        'right': true
      }
    }
  }
  // render (createElement, context) {
  //   console.log(context)
  //   console.log(this)
  //   console.log(styles)

  //   return createElement('p', { 'class': 'ltd-tooltip-container', 'style': styles }, this.text)
  // }
}
