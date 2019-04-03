/**
 *  DropdownTransition script file
**/

export default {
  name: 'LtdDropdownTransition', // web-component: ltd-dropdownTransition
  mixins: [],
  components: {},
  props: {
    /**
    * Sets style
    */
    customStyle: {
      type: Object
    },
    open: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {},
  methods: {
    enter (element) {
      const width = getComputedStyle(element).width
      element.style.width = width
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.height = 'auto'
      const height = getComputedStyle(element).height
      element.style.width = null
      element.style.position = null
      element.style.visibility = null
      element.style.height = 0
      setTimeout(() => {
        element.style.height = height
      })
    },

    afterEnter (element) {
      element.style.height = 'auto'
    },

    leave (element) {
      const height = getComputedStyle(element).height
      element.style.height = height
      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(element).height
      setTimeout(() => {
        element.style.height = 0
      })
    },

    /**
     * Gets custom styles
     * */
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
     * */
    generateStyle (data) {
      return `${
        Object.entries(data).map(values => {
          const [key, value] = values
          return `${key}: ${value}`
        }).join(';')
      }`
    }
  },
  mounted () {
    console.log(this)
  },
  watch: {
    open (value) {
      this.open = value
      this.enter(this.$el)
    },

    customStyle () {
      this.getStyle()
    }
  }
}
