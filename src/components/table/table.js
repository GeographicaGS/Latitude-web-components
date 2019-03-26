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
 *  placeholder="string"
 *  pagination
 *  items-per-page="number"
 *  clickable
 *  @select="function"
 *  nodata-message="string">
 * </ltd-table>
 **/

export default {
  name: 'LtdTable', // web-component: ltd-table
  mixins: [],
  components: {
    'ltd-pagination': Pagination
  },
  props: {
    items: {
      type: Array
      // required: true
    },
    visibleColumns: {
      type: Array,
      required: false
    },
    filter: {
      type: Boolean,
      default: false,
      required: false
    },
    pagination: {
      type: Boolean,
      default: false,
      required: false
    },
    placeholder: {
      type: String,
      default: 'elements',
      required: false
    },
    itemsPerPage: {
      type: Number,
      required: false
    },
    clickable: {
      type: Boolean,
      default: true,
      required: false
    },
    nodataMessage: {
      type: String,
      default: 'No data... Please, select other configuration.',
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
  mounted () {},
  watch: {
    items () {
      this.cached = this.items

      if (!this.pagination) {
        this.page = this.items
      } else {
        this.$refs.paginationComponent.setPage(1)
      }
    }
  }
}
