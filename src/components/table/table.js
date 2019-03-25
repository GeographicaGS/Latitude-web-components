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
 *  items-per-page="number"
 *  clickable
 *  @select="function"
 *  nodata-message="string">
 * </ltd-table>
 **/

export default {
  name: 'LtdTable', // web-component: ltd-table
  mixins: [],
  components: {},
  props: {
    items: {
      type: Array,
      default: () => {
        return [
          {
            name: 'Héctor García',
            age: '10',
            company: 'Geographica',
            occupation: 'Co-CEO / Founder'
          },
          {
            name: 'Paula Juliá',
            age: '19',
            company: 'Geographica',
            occupation: 'COO'
          },
          {
            name: 'Alberto Asuero',
            age: '16',
            company: 'Geographica',
            occupation: 'Co-CEO / CTO'
          },
          {
            name: 'Jose Gil',
            age: '18',
            company: 'Geographica',
            occupation: 'Head of Design'
          },
          {
            name: 'Isabel Pozuelo',
            age: '22',
            company: 'Geographica',
            occupation: 'QA'
          },
          {
            name: 'Cayetano Benavent',
            age: '19',
            company: 'Geographica',
            occupation: 'Head of Data'
          },
          {
            name: 'Javier Aragón',
            age: '16',
            company: 'Geographica',
            occupation: 'Lead Engineer'
          },
          {
            name: 'Raúl Yeguas',
            age: '18',
            company: 'Geographica',
            occupation: 'Lead Engineer'
          },
          {
            name: 'Javi Gil',
            age: '18',
            company: 'Geographica',
            occupation: 'Designer'
          },
          {
            name: 'Janto Lima',
            age: '18',
            company: 'Geographica',
            occupation: 'Senior Engineer'
          }
        ]
      }
      // required: true
    },
    visibleColumns: {
      type: Array
      // default: () => {
      //   return ['name', 'age', 'company', 'occupation']
      // }
      // required: false
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
      descendent: true, // Descendent order
      nodata: false
    }
  },
  computed: {
    columns () {
      return this.visibleColumns || Object.keys(this.items[0])
    },

    getRowClass () {
      return {
        'clickable': this.clickable
      }
    }
  },
  methods: {
    tableRowClick (col) {
      console.log('tablerow click!')
      console.log(col)
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
    this.$el.style.setProperty('--table-columns', this.columns.length)
    this.cached = this.items

    if (!this.pagination) {
      this.page = this.items
    }
  }
}
