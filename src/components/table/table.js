import Pagination from '../pagination/index'

/**
 *  Table script file
 *
 *  @version 1.0.0
 *
 * <ltd-table
 *  items="array"
 *  visible-colummns="array"
 *  filter
 *  pagination
 *  items-per-page="number"
 *  pagination-placeholder="string"
 *  clickable
 *  @select="function"
 *  nodata-message="string">
 * </ltd-table>
 */

export default {
  name: 'LtdTable', // web-component: ltd-table
  mixins: [],
  components: {
    'ltd-pagination': Pagination
  },
  props: {
    /**
     * Items to show
     */
    items: {
      type: Array
      // required: true
    },
    /**
     * Columns to show
     */
    visibleColumns: {
      type: Array,
      required: false
    },
    /**
     * If specified, the table shows the filter input and can be filter by property
     */
    filter: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * If specified, the table shows the pagination component
     */
    pagination: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * Number of elements to show on each page (if the page is true)
     */
    itemsPerPage: {
      type: Number,
      default: 10,
      required: false
    },
    /**
     * The text to show in the pagination component
     */
    paginationPlaceholder: {
      type: String,
      default: 'elements',
      required: false
    },
    /**
     * If specified, the table rows will be clickable
     */
    clickable: {
      type: Boolean,
      default: true,
      required: false
    },
    /**
     * Message to display when table does not display data
     */
    nodataMessage: {
      type: String,
      default: 'No data.',
      required: false
    }
  },
  data () {
    return {
      cached: [],
      page: [],
      descendent: true,
      nodata: false
    }
  },
  computed: {
    columns () {
      return this.visibleColumns ? this.visibleColumns : this.items ? Object.keys(this.items[0]) : []
    },

    getRowClass () {
      return {
        'clickable': this.clickable
      }
    }
  },
  methods: {
    setItems () {
      this.cached = this.items

      if (!this.pagination) {
        this.page = this.items
      } else {
        this.$refs.paginationComponent.setPage(1)
      }
    },

    tableRowClick (col) {
      const selected = Object.assign({}, col)
      this.$emit('select', selected)
    },

    sortTable (column, event) {
      event.preventDefault()
      event.stopPropagation()

      this.setSelectedHeader(event.target)
      this.cached.sort(this.sortByProp(column))
    },

    setSelectedHeader (target) {
      const headerCells = this.$el.querySelectorAll('.table-header .table-cell')
      headerCells.forEach(cell => {
        if (cell === target) {
          if (cell.classList.contains('selected')) {
            this.descendent = !this.descendent
            cell.classList.toggle('order')
          } else {
            this.descendent = true
            cell.classList.add('selected')
          }
        } else {
          cell.classList.remove('selected')
          cell.classList.remove('order')
        }
      })
    },

    sortByProp (prop) {
      return (a, b) => {
        if (this.descendent === false) {
          return b[prop].localeCompare(a[prop])
        } else {
          return a[prop].localeCompare(b[prop])
        }
      }
    },

    filterTable (event) {
      const inputValue = event.target.value
      const data = this.items.filter((item) =>
        Object.values(item).map((value) => String(value)).find((value) =>
          value.toLowerCase().includes(inputValue.toLowerCase())))

      this.nodata = !data.length
      this.cached = data
      this.page = data
    },

    onChangePage (page) {
      this.page = page
    }
  },
  mounted () {
    this.setItems()
  },
  watch: {
    items () {
      this.setItems()
    }
  }
}
