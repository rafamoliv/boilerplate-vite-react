import { useEffect, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MyThemeProvider  } from '../src/styles'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import i18n from '../src/locales/i18n'

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

export const globalTypes = {
  locale: {
    name: 'Locale',
    defaultValue: 'ptbr',
    description: 'Internationalization locale',
    toolbar: {
      title: 'Language',
      icon: 'globe',
      items: [
        { value: 'ptbr', right: 'br', title: 'Portuguese' },
        { value: 'en', right: '🇺🇸', title: 'English' }
      ],
    },
  },
};

i18n.on('languageChanged', (locale) => {
  const direction = i18n.dir(locale);
  document.dir = direction;
});

export const decorators = [
  (Story, context) => {
    const { locale } = context.globals;

    useEffect(() => {
      i18n.changeLanguage(locale);
    }, [locale]);

    return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <MyThemeProvider>
          <I18nextProvider i18n={i18n}>
            <Story />
          </I18nextProvider>
        </MyThemeProvider>
      </Suspense>
    )
  }
]

