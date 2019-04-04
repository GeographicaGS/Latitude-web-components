import Radio from './radio/index'

/**
 *  RadioGroup script file
 *
 * @version 1.0.0
 **/
export default {
  name: 'LtdRadioGroup', // web-component: ltd-radioGroup
  mixins: [],
  components: {
    'ltd-radio': Radio
  },
  props: {
    /**
     * Sets style
     */
    customStyle: {
      type: Object
    },
    /**
     * The options to draw radios
     */
    options: {
      type: Array
    },
    /**
     * The radio group name.
     * Required if you use several groups on the same page.
     */
    name: {
      type: String,
      default: 'radios'
    },
    /**
     * The group data model
     */
    model: {
      type: [String, Boolean, Number],
      default: ''
    },
    /**
     * The radio component alignment
     */
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedValue: this.model
    }
  },
  computed: {
    getClasses () {
      return {
        'ltd-radio-group-container': true,
        'vertical': this.vertical
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
    model (model) {
      this.selectedValue = model
    },

    customStyle () {
      this.getStyle()
    }
  }
}
