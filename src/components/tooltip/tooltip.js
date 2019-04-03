
/**
 *  Tooltip script file
 *
 * @version 1.0.0
 **/
export default {
  name: 'LtdTooltip', // web-component: ltd-tooltip
  props: {
    /**
     * Text to show in the tooltip
     * TODO: icon
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
      default: 'top'
      // TODO: validate
    },
    /**
     * Delay to show tooltip (ms)
     */
    showDelay: {
      type: Number,
      default: 1000
    },
    /**
     * Delay to hide tooltip (ms)
     */
    hideDelay: {
      type: Number,
      default: 0
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
      window.clearTimeout(this.sto)
      this.sto = window.setTimeout(() => {
        this.tooltip.classList.add('visible')
        window.clearTimeout(this.sto)
      }, this.showDelay)
    },

    hide () {
      window.clearTimeout(this.sto)
      this.sto = window.setTimeout(() => {
        this.tooltip.classList.remove('visible')
        window.clearTimeout(this.sto)
      }, this.hideDelay)
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
      console.log('generate')
      console.log(data)
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
