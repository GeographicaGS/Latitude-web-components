
/**
 *  Radio script file
 **/
export default {
  name: 'LtdRadio', // web-component: ltd-radio
  mixins: [],
  components: { },
  props: ['name', 'label', 'value', 'rvalue'],
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
  }
}
