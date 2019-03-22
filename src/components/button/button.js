/**
 *  Button script file
* */

/**
* The only true button.
* @version 1.0.0
*/

export default {
  name: 'LtdButton', // web-component: ltd-button
  mixins: [],
  components: {},
  props: {
  /**
   * Sets the button theme color
   */
    theme: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {};
  },
  computed: {
    /**
     * Gets computed classes
     */
    getClasses() {
      return [
        this.theme,
      ];
    },
  },
  methods: {
    /**
     * Triggered when button is clicked
     *
     * @type {Event}
     * @event click
     */
    onClick(event) {
      event.stopPropagation();
      event.preventDefault();
      this.$emit('click', event);
    },
  },
};
