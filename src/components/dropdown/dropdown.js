/**
 *  Dropdown script file
**/

export default {
  name: 'LtdDropdown', // web-component: ltd-dropdown
  mixins: [],
  components: {},
  props: {
    /**
     * The dropdown state
     */
    open: {
      type: Boolean,
      default: true,
      required: false
    },
    /**
     * Dropdown id
     */
    id: {
      type: String,
      default: '',
      required: false
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
      this.$emit(this.isOpen ? 'open' : 'close')
    },

    enter (element) {
      const width = window.getComputedStyle(element).width
      element.style.width = width
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.height = 'auto'
      const height = window.getComputedStyle(element).height
      element.style.width = null
      element.style.position = null
      element.style.visibility = null
      element.style.height = 0
      // To make sure the animation is triggered correctly.
      // eslint-disable-next-line no-unused-expressions
      window.getComputedStyle(element).height

      const sto = window.setTimeout(() => {
        element.style.height = height
        window.clearTimeout(sto)
      })
    },

    afterEnter (element) {
      element.style.height = 'auto'
    },

    leave (element) {
      const height = window.getComputedStyle(element).height
      element.style.height = height
      // eslint-disable-next-line no-unused-expressions
      window.getComputedStyle(element).height

      const sto = window.setTimeout(() => {
        element.style.height = 0
        window.clearTimeout(sto)
      })
    }
  },
  watch: {
    open (value) {
      this.isOpen = value
    }
  }
}
