import Radio from '../index'

/**
 *  RadioGroup script file
 *
 * @version 1.0.0
 *
 * TODO:
 * - Type button
 **/
export default {
  name: 'LtdRadioGroup', // web-component: ltd-radioGroup
  mixins: [],
  components: {
    'ltd-radio': Radio
  },
  props: {
    options: {
      type: Array
    },
    model: {
      type: [String, Boolean, Number],
      default: ''
    },
    label: {
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
