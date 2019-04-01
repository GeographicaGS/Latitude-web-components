
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
  }
}
