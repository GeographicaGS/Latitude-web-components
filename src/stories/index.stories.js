/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { withKnobs } from '@storybook/addon-knobs';

import './main';


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => ({
    data() {
      return {
        el: undefined,
      };
    },
    template: `
    <ltd-button theme='light'>
      <span>A Button with rounded edges</span>
    </ltd-button>
  `,
    mounted() {
      [this.el] = document.getElementsByTagName('ltd-button');

      this.el.addEventListener('click', this.onClick);
    },
    beforeDestroyed() {
      this.el.removeEventListener('click', this.onClick);
    },
    methods: {
      onClick(event) {
        console.info('event', event);
      },
    },
  }))
  .add('yellow', () => ({
    data() {
      return {
        el: undefined,
      };
    },
    template: `
    <ltd-button-yellow>
      <span>A Button with rounded edges</span>
    </ltd-button-yellow>
  `,
    mounted() {
      [this.el] = document.getElementsByTagName('ltd-button-yellow');

      this.el.addEventListener('click', this.onClick);
    },
    beforeDestroyed() {
      this.el.removeEventListener('click', this.onClick);
    },
    methods: {
      onClick(event) {
        console.info('event', event);
      },
    },
  }));
