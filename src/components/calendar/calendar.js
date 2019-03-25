/**
 *  Calendar script file
* */

export default {
  name: 'LtdCalendar', // component: ltd-calendar
  mixins: [],
  components: {},
  props: {
    setDate: {
      type: Function,
      default: undefined,
      required: false,
    },
    startDate: {
      type: String,
      default: '',
      required: false,
    },
    endDate: {
      type: String,
      default: '',
      required: false,
    },
    locale: {
      type: String,
      default: 'en',
      required: false,
    },
    dayFormat: {
      type: String,
      default: 'ddd',
      required: false,
    },
    monthFormat: {
      type: String,
      default: 'MMM',
      required: false,
    },
    range: {
      type: Boolean,
      default: false,
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
  },
  mounted() {
    console.log(this);
    this.setDate('hola');
  },
};
