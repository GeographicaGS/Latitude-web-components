/**
 *  Dropdown script file
**/

export default {
  name: 'LtdDropdown', // web-component: ltd-dropdown
  mixins: [],
  components: {},
  props: {
    open: {
      type: Boolean,
      default: true
    },
    animation: {
      type: String,
      default: 'fade'
    },
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isOpen: this.open
    }
  },
  computed: {},
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
      this.$emit('update:open', this.isOpen)
      this.$emit(this.isOpen ? 'open' : 'close')
    }
  },
  watch: {
    open (value) {
      this.isOpen = value
    }
  }
}
