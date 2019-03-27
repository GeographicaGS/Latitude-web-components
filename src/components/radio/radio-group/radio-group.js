
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
  components: {},
  props: [
    'options',
    'value'
  ],
  data () {
    return {
      model: this.value
    }
  },
  methods: {
  },
  watch: {
    model: function () {
      this.$emit('change', this.model)
    }
  }
}
