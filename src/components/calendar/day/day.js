/**
 *  Day script file
* */


export default {
  name: 'LtdDay', // component: ltd-day
  mixins: [],
  components: {},
  props: {
    currentDate: {
      type: Object,
      default: '',
      required: false,
    },
    date: {
      type: Object,
      default: undefined,
      required: false,
    },
    startDate: {
      type: Object,
      default: '',
      required: false,
    },
    endDate: {
      type: Object,
      default: '',
      required: false,
    },
    futureSelection: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {
    getDate() {
      return this.date.date();
    },
  },
};
