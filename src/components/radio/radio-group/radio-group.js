import Radio from '../index'

/**
 *  RadioGroup script file
 *
 * @version 1.0.0
 *
 * TODO:
 * - Type button
 * - Vertical
 **/
export default {
  name: 'LtdRadioGroup', // web-component: ltd-radioGroup
  mixins: [],
  components: {
    'ltd-radio': Radio
  },
  props: {
    /**
     * The options to draw radios
     */
    options: {
      type: Array
    },
    /**
     * The group data model
     */
    model: {
      type: [String, Boolean, Number],
      default: ''
    }
  },
  data () {
    return {
      selectedValue: this.model
    }
  },
  computed: { },
  methods: {
    onChange (value) {
      this.selectedValue = value
      this.$emit('change', value)
    }
  },
  watch: {
    model (model) {
      this.selectedValue = model
    }
  }
}
