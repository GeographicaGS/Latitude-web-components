import { paginate } from './paginate'

/**
 * Pagination script file
 *
 * @version 1.0.0
 *
 *
 * <ltd-pagination
 *  ref="paginationComponent"
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
      pager: {}
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
    }
  },
  mounted () {},
  watch: {
    items () {
      this.setPage(this.initialPage)
    }
  }
}
