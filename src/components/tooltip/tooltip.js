import './tooltip.scss'

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
  render (createElement, context) {
    console.log(context)
    console.log(this)

    return createElement('p', { 'class': 'ltd-tooltip-container' }, this.text)
  }
  // render: (h, { data }) => (
  //   <p class="ltd-tooltip-container">
  //     { data.text }
  //   </p>
  // )
}
