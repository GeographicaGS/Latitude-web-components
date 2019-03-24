/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Button from '@/components/button';
import ButtonYellow from '@/components/button-yellow';


import Icon from '@/components/icon/index';

storiesOf('Button', module)
  .add('with text', () => ({
    components: {
      'ltd-button': Button,
    },
    data() {
      return {
      };
    },
    template: // html
    `
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
    template: // html
    `
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

storiesOf('Icon', module)
  .add('Simple icon', () => ({
    components: {
      'ltd-icon': Icon,
    },
    data() {
      return {
      };
    },
    template: // html
    `
      <div>
        <ltd-icon icon="https://icomoon.io/icons9f9702a/7/47.svg" size="120px">
        </ltd-icon>
        <ltd-icon icon="https://icomoon.io/icons9f9702a/7/47.svg" size="60px">
        </ltd-icon>
        <ltd-icon icon="https://icomoon.io/icons9f9702a/7/47.svg" size="30px">
        </ltd-icon>
        <ltd-icon icon="https://icomoon.io/icons9f9702a/7/47.svg" size="20px">
        </ltd-icon>
        <ltd-icon icon="https://icomoon.io/icons9f9702a/7/47.svg" size="10px">
        </ltd-icon>
      </div>
  `,
    methods: {
    },
  }));
