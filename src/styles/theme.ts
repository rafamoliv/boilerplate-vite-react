import { colors } from './colors'

export const theme = {
  font: {
    family: 'Roboto, Arial',
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    sizes: {
      xxs: '0.625rem',
      xs: '0.750rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.250rem',
      xl: '1.5rem',
      xxl: '2rem',
      xxxl: '2.5rem',
      hg: '3.5rem'
    }
  },
  breakpoints: {
    tn: '20rem',
    xs: '36rem',
    sm: '48rem',
    md: '62rem',
    lg: '75rem',
    xl: '87.5rem',
    hg: '125rem'
  },
  spacing: {
    px: '0.063rem',
    0: '0',
    0.25: '0.125rem',
    0.5: '0.250rem',
    1: '0.5rem',
    2: '1rem',
    3: '1.5em',
    4: '2rem',
    5: '2.5rem',
    6: '3rem',
    7: '3.5rem',
    8: '4rem',
    9: '4.5rem',
    10: '5rem',
    11: '5.5rem',
    12: '6rem',
    13: '6.5rem',
    14: '7rem'
  },
  border: {
    px: '1px',
    0: 0,
    0.25: '0.125rem',
    0.5: '0.250rem',
    1: '0.5rem',
    radius: {
      px: '1px',
      0: 0,
      0.5: '0.250rem',
      1: '0.5rem',
      3: '1.5em',
      circle: '50%'
    }
  },
  opacity: {
    0: 0,
    1: 0.08,
    2: 0.16,
    4: 0.32,
    8: 0.64,
    10: 0.8,
    100: 1
  },
  colors: {
    brand: {
      light: colors.purple[70],
      medium: colors.purple[50],
      dark: colors.purple[10],
      darkest: colors.purple[0]
    },
    primary: {
      lightest: colors.purple[100],
      light: colors.purple[80],
      medium: colors.purple[60],
      dark: colors.purple[40],
      darkest: colors.purple[20]
    },
    secondary: {
      light: colors.ocean[70],
      medium: colors.ocean[50],
      dark: colors.ocean[30]
    },
    success: {
      light: colors.green[70],
      medium: colors.green[40],
      dark: colors.green[20]
    },
    warning: {
      light: colors.yellow[70],
      medium: colors.yellow[50],
      dark: colors.yellow[30]
    },
    error: {
      light: colors.orange[70],
      medium: colors.orange[50],
      dark: colors.orange[30]
    },
    critical: {
      light: colors.red[70],
      medium: colors.red[50],
      dark: colors.red[40]
    },
    info: {
      light: colors.blue[80],
      medium: colors.blue[50],
      dark: colors.blue[30]
    },
    random: {
      light: colors.blue[80],
      medium: colors.blue[50],
      dark: colors.blue[30]
    },
    black: colors.black,
    white: colors.white,
    dark: {
      hard: colors.gray[10],
      medium: colors.gray[30],
      low: colors.gray[50]
    },
    light: {
      hard: colors.gray[70],
      medium: colors.gray[80],
      low: colors.gray[90]
    }
  }
}
