/**
 *  Dropdown script file
**/

export default {
  name: 'LtdDropdown', // web-component: ltd-dropdown
  mixins: [],
  components: {},
  props: {
    select: {
      type: Function
    }
  },
  data () {
    return {
      trigger: undefined,
      content: undefined
    }
  },
  computed: {},
  methods: {
    toggle () {
      this.content.classList.toggle('open')
    },

    open () {
      this.content.classList.add('open')
    },

    close () {
      this.content.classList.remove('open')
    }
  },
  mounted () {
    this.trigger = this.$el.querySelector('.dropdown-select-wrapper')
    this.content = this.$el.querySelector('.dropdown-content-wrapper')

    console.log(this.$scopedSlots.trigger())

    this.$on('select', () => {
      console.log('sisisi en on')
    })
  }
}
