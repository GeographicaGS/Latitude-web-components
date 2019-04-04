/**
 * Switch script file
 *
 * @version 1.0.0
 **/
export default {
  name: 'LtdSwitch', // web-component: ltd-switch
  mixins: [],
  components: {},
  props: {
    /**
     * Sets style
     */
    customStyle: {
      type: Object
    },
    /**
     * The initial state
     */
    state: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * If true, the switch is disabled
     */
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * Name for input
     */
    name: {
      type: String,
      default: '',
      required: false
    },
    /**
     * Name for input
     */
    label: {
      type: String,
      default: '',
      required: false
    }
  },
  data () {
    return {
      currentState: this.state
    }
  },
  computed: {
    getClasses () {
      return {
        'ltd-switch-container': true,
        'checked': this.currentState === true,
        'disabled': this.disabled
      }
    }
  },
  methods: {
    toggle (event) {
      event.preventDefault()
      if (this.disabled) { return false }

      const checked = this.currentState !== true
      this.currentState = checked

      const obj = {
        name: this.name,
        state: checked
      }

      this.$emit('change', obj)
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
  watch: {
    state (val) {
      if (typeof val !== 'boolean') {
        throw new Error('[ltd-switch] Error: The value should be true or false.')
      }
      this.currentState = val
    },

    customStyle () {
      this.getStyle()
    }
  }
}
