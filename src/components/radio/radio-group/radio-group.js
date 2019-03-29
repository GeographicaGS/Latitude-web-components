import Radio from '../index'

/**
 *  RadioGroup script file
 *
 * @version 1.0.0
 *
 * @usage
 *
 * <ltd-radio-group
 *  options="Array"
 *  model="String, Boolean, Number"
 *  @change="Funtion"
 *  vertical="Boolean">
 * </ltd-radio-group>
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
