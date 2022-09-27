
import { MyThemeProvider  } from '../src/styles'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const customViewports = {
  desktopMd: {
    name: 'Desktop Md',
    styles: {
      width: '992px',
      height: '963px',
    },
  },
  desktopLg: {
    name: 'Desktop Lg',
    styles: {
      width: '1200px',
      height: '963px',
    },
  },
  desktopXl: {
    name: 'Desktop Xl',
    styles: {
      width: '1400px',
      height: '963px',
    },
  },
  desktopHg: {
    name: 'Desktop Hg',
    styles: {
      width: '2000px',
      height: '963px',
    },
  },
  ...INITIAL_VIEWPORTS,
};


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },

};

export const decorators = [
  (Story) => (
    <MyThemeProvider>
      <Story />
    </MyThemeProvider>
  ),
]
