/**
 *  Dropdown script file
**/

export default {
  name: 'LtdDropdown', // web-component: ltd-dropdown
  mixins: [],
  components: {},
  props: {},
  data () {
    return {
      trigger: undefined,
      content: undefined
    }
  },
  computed: {
  },
  methods: {
    handleTriggerClick (event) {
      event.preventDefault()
      event.stopPropagation()
      this.toggle()
    },

    select () {
      console.log('set')
    },

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
    this.trigger.addEventListener('click', this.handleTriggerClick, false)
  }
}
