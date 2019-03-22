/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Button from '@/components/button';
import ButtonYellow from '@/components/button-yellow';

storiesOf('Button', module)
  .add('with text', () => ({
    components: {
      'ltd-button': Button,
    },
    data() {
      return {
      };
    },
    template: `
    <ltd-button theme='light' @click="onClick">
      <span>A Button with rounded edges</span>
    </ltd-button>
  `,
    methods: {
      onClick(event) {
        action('clicked');
        console.info('event', event);
      },
    },
  }))
  .add('yellow', () => ({
    components: {
      'ltd-button-yellow': ButtonYellow,
    },
    data() {
      return {
      };
    },
    template: `
    <ltd-button-yellow @click="onClick">
      <span>A Button with rounded edges</span>
    </ltd-button-yellow>
  `,
    methods: {
      onClick(event) {
        action('clicked');
        console.info('event', event);
      },
    },
  }));
