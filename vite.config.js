import { resolve as pathResolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isDev = env.REACT_ENVIRONMENT === 'DEVELOPMENT'
  const configStyledComponents = isDev && {
    displayName: true,
    fileName: false,
    namespace: 'boiler-vite'
  }

  return {
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-styled-components', configStyledComponents]]
        }
      })
    ],
    envPrefix: 'REACT_',
    resolve: {
      alias: {
        '@': pathResolve('./src')
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './vitest.setup.js',
      coverage: {
        provide: 'c8',
        exclude: [
          'vitest.setup.js',
          '**/*.styles.js',
          '**/*.test.{js,jsx}',
          '**/*.stories.jsx',
          '**/*.config.js',
          'src/assets/**/*',
          'src/store/**/*',
          'src/utils/tests/*',
          'src/styles/*',
          'src/components/**/index.js',
          'src/services/api.js'
        ]
      }
    }
  }
})
