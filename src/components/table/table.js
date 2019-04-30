import Pagination from '@/components/pagination'

/**
 *  Table script file
 *
 *  @version 1.0.0
 */

export default {
  name: 'LtdTable', // web-component: ltd-table
  mixins: [],
  components: {
    'ltd-pagination': Pagination
  },
  props: {
    /**
    * Sets style
    */
    customStyle: {
      type: Object
    },
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
     * Pagination input placeholder
     */
    paginationInputPlaceholder: {
      type: String,
      default: 'go to',
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
    this.setItems()
  },
  watch: {
    items (value) {
      this.items = value
      this.setItems()
    },

    visibleColumns (value) {
      this.visibleColumns = value
      this.setItems()
    },

    customStyle () {
      this.getStyle()
    }
  }
}
