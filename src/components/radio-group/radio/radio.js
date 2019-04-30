/**
 *  Radio script file
 **/
export default {
  name: 'LtdRadio', // web-component: ltd-radio
  mixins: [],
  components: { },
  props: {
    customStyle: {
      type: Object
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    value: {
      type: [String, Boolean, Number],
      default: ''
    },
    rvalue: {
      type: [String, Boolean, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {
    radioButtonValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('change', value)
        this.$parent.$emit('change', value)
      }
    },

    getClasses () {
      return {
        'ltd-radio-container': true,
        'disabled': this.disabled
      }
    },

    getRadioClasses () {
      return {
        'radio': true,
        'disabled': this.disabled
      }
    }
  },
  methods: {
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
    customStyle () {
      this.getStyle()
    }
  }
}
