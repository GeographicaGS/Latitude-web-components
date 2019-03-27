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
     * The initial state
     */
    state: {
      type: Boolean,
      default: false
    },
    /**
     * Label for the checkbox
     */
    label: {
      type: [String, Number]
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
      currentState: this.state,
      showSlot: true
    }
  },
  computed: {
    getClasses () {
      return {
        'ltd-checkbox-container': true,
        'checked': this.currentState === true,
        'disabled': this.disabled
      }
    },

    getCheckboxClasses () {
      return {
        'checkbox': true,
        'checked': this.currentState === true,
        'disabled': this.disabled
      }
    }
  },
  mounted () {
    this.updateState()
    this.showSlot = this.$slots.default !== undefined
  },
  methods: {
    onChange (event) {
      console.log('entra')

      if (this.disabled) { return false }
      const checked = event.target.checked
      this.currentState = checked
      this.$emit('input', checked)
      this.$emit('change', checked)

      // TODO: if group
    },

    updateState () {
      this.currentState = this.state === true
    }
  },
  watch: {
    state (val) {
      this.updateState()
    }
  }
}
