/**
 * Switch script file
 *
 * @version 1.0.0
 *
 * @usage
 *
 * <ltd-switch state="Boolean" @change="Function">
 *  <span slot="open">O</span>
 *  <span slot="close">C</span>
 * </ltd-switch>
 *
 * <ltd-switch>
 *  <i slot="open">Icon here (16px size)</i>
 *  <i slot="close">Icon here (16px size)</i>
 * </ltd-switch>
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
