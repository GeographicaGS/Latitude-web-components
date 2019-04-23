/**
 *  Checkbox script file
 *
 * @version 1.0.0
 **/
export default {
  name: 'LtdCheckbox', // web-component: ltd-checkbox
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
      default: false
    },
    /**
     * If true, the switch is disabled
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Name for input
     */
    name: {
      type: String
    }
  },
  data () {
    return {
      model: [],
      currentState: this.state
    }
  },
  computed: {
    getClasses () {
      return {
        'ltd-checkbox-container': true,
        'checked': this.currentState,
        'disabled': this.disabled
      }
    },

    getCheckboxClasses () {
      return {
        'checkbox': true,
        'checked': this.currentState,
        'disabled': this.disabled
      }
    }
  },
  mounted () {
    this.updateState()
  },
  methods: {
    onChange (event) {
      if (this.disabled) { return false }
      const checked = event.target.checked
      this.currentState = checked
      this.$emit('change', checked)
    },

    updateState () {
      this.currentState = this.state === true
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
      this.updateState()
    },

    customStyle () {
      this.getStyle()
    }
  }
}
