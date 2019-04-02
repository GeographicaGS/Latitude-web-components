/**
 * @version 1.0.0
 **/
export default {
  name: 'LtdSwitch', // web-component: ltd-switch
  mixins: [],
  components: {},
  props: {
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

      this.$emit('change', checked)
    }
  },
  watch: {
    state (val) {
      if (val !== true || val !== false) {
        throw new Error('Value should be true or false.')
      }
      this.currentState = val
    }
  }
}
