import type { Preview } from '@storybook/vue3';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/main.scss';

const customViewports = {
  pixel2: {
    name: 'Pixel 2',
    styles: {
      width: '411px',
      height: '731px',
    },
  },
  iphone5: {
    name: 'iPhone 5/SE',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iphone678: {
    name: 'iPhone 6/7/8',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
};

const preview: Preview = {
  parameters: {
    padded: false,
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
};

export default preview;
