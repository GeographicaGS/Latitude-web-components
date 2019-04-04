/**
 *  Tooltip script file
 *
 * @version 1.0.0
 **/
export default {
  name: 'LtdTooltip', // web-component: ltd-tooltip
  props: {
    /**
     * Sets style
     */
    customStyle: {
      type: Object
    },
    /**
     * Text to show in the tooltip
     */
    text: {
      type: String,
      required: true
    },
    /**
     * Tooltip position
     */
    position: {
      type: String,
      default: 'top',
      // The value must match one of these
      validator (value) {
        const positions = [
          'top',
          'bottom',
          'left',
          'right',
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right'
        ]
        return positions.indexOf(value) !== -1
      }
    },
    /**
     * Delay to show tooltip (ms)
     */
    showDelay: {
      type: String,
      default: '1s'
    },
    /**
     * Delay to hide tooltip (ms)
     */
    hideDelay: {
      type: String,
      default: '0s'
    }
  },
  data () {
    return {
      sto: undefined,
      tooltip: undefined
    }
  },
  computed: {
    getClasses () {
      return {
        'tooltip': true,
        'top': this.position === 'top',
        'top-left': this.position === 'top-left',
        'top-right': this.position === 'top-right',
        'bottom': this.position === 'bottom',
        'bottom-left': this.position === 'bottom-left',
        'bottom-right': this.position === 'bottom-right',
        'left': this.position === 'left',
        'right': this.position === 'right'
      }
    }
  },
  methods: {
    show () {
      this.tooltip.style.transitionDelay = this.showDelay
      this.tooltip.classList.add('visible')
    },

    hide () {
      this.tooltip.style.transitionDelay = this.hideDelay
      this.tooltip.classList.remove('visible')
    },

    /**
     * Gets custom styles
     */
    getStyle () {
      const style = `${
        Object.entries(this.customStyle).map(values => {
          const [key, value] = values
          return `.${key} {${this.generateStyle(value)}}`
        }).join('\n')
      }`
      const el = document.createElement('style')
      el.innerHTML = style
      this.$el.parentNode.insertBefore(el, null)
    },

    /**
     * Generate style by object
     *
     * @property {Object}
     * @type {String}
     */
    generateStyle (data) {
      return `${
        Object.entries(data).map(values => {
          const [key, value] = values
          return `${key}: ${value}`
        }).join(';')
      }`
    }
  },
  mounted () {
    this.tooltip = this.$el.querySelector('.tooltip')
    this.$el.addEventListener('mouseover', this.show, false)
    this.$el.addEventListener('mouseout', this.hide, false)
  },
  destroyed () {
    this.tooltip = undefined
    this.$el.removeEventListener('mouseover', this.show)
    this.$el.removeEventListener('mouseout', this.hide)
  },
  watch: {
    customStyle () {
      this.getStyle()
    }
  }
}
