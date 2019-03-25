import moment from 'moment';

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
      default: undefined,
      required: false,
    },
    endDate: {
      type: Object,
      default: undefined,
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
  mounted() {},
  computed: {
    getDate() {
      return this.date.date();
    },
    getDayClasses() {
      const today = moment();
      return {
        active: today.isSame(this.date, 'day'),
        start: this.startDate && this.date.isSame(this.startDate, 'day'),
        between: this.startDate && this.endDate && this.date.isBetween(this.startDate, this.endDate, 'day'),
        end: this.endDate && this.date.isSame(this.endDate, 'day'),
        muted: !this.date.isSame(this.currentDate, 'month'),
        disabled: this.date.isAfter(today) && this.futureSelection === false,
      };
    },
  },
  methods: {
    onDayClick() {
      this.$emit('change', this.date);
    },
  },
};
