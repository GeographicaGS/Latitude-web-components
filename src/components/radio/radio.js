
/**
 *  Radio script file
 **/
export default {
  name: 'LtdRadio', // web-component: ltd-radio
  mixins: [],
  components: { },
  props: {
    /**
    * The initial state
    */
    state: {
      type: [Boolean, String, Number],
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
    },
    model: {
      type: String
    }
  },
  data () {
    return {
      currentState: this.state,
      showSlot: true,
      groupName: this.name
    }
  },
  computed: {
    getContext () {
      return this
    },

    getClasses () {
      return {
        'ltd-radio-container': true,
        'checked': this.currentState === true,
        'disabled': this.disabled
      }
    },

    getRadioClasses () {
      return {
        'radio': true,
        'checked': this.currentState === true,
        'disabled': this.disabled
      }
    }
  },
  mounted () {
    this.showSlot = this.$slots.default !== undefined

    this.updateState()
  },
  methods: {
    onChange (event) {
      if (this.disabled) { return false }

      const checked = event.target.checked
      this.currentState = checked
      this.$emit('change', checked)
      console.log(this)
    },

    updateState () {
      this.currentState = this.state === true
    }
  },
  watch: {
    state () {
      this.updateState()
    },

    group (value) {
      this.group = value
      this.updateState()
    }
  }
}
