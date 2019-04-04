import { paginate } from './paginate'

/**
 * Pagination script file
 *
 * @version 1.0.0
 *
 *
 * <ltd-pagination
 *  :items="array"
 *  :items-per-page="number"
 *  :placeholder="string"
 *  @change="function">
 * </ltd-pagination>
 */
export default {
  name: 'LtdPagination', // web-component: ltd-pagination
  mixins: [],
  components: {},
  props: {
    /**
     * Sets style
     */
    customStyle: {
      type: Object
    },
    /**
     * Total Items
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * Items to be displayed per page
     */
    itemsPerPage: {
      type: Number,
      default: 10,
      required: false
    },
    /**
     * Pagination placeholder
     */
    placeholder: {
      type: String,
      default: '<items>',
      required: false
    }
  },
  data () {
    return {
      initialPage: 1, // NOTE: maybe as prop
      pager: {},
      input: false
    }
  },
  computed: {},
  methods: {
    /**
     * Returns the Array of items to show
     *
     * @param {Number} page - the page we want
     */
    setPage (page) {
      this.pager = paginate(this.items.length, page, this.itemsPerPage)
      const items = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1)
      this.$emit('change', items)
      this.input = false
    },

    getInputValue () {
      return `${this.pager.startIndex + 1} - ${this.pager.endIndex + 1}`
    },

    showInput () {
      this.input = !this.input
      this.$nextTick(() => {
        this.$refs.inputElement.value = ''
        this.$refs.inputElement.focus()
      })
    },

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
  mounted () {},
  watch: {
    items () {
      this.setPage(this.initialPage)
    },

    customStyle () {
      this.getStyle()
    }
  }
}
