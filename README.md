<center>
  <img src=".gitlab/assets/logo-vite-react.svg" alt="A logo vite and react" width="500" />
</center>
<br /><br />

# Vite React - Boilerplate
Boilerplate for projects using Vite with react.

## Summary
- [What is used](#what-is-used)
- [Configuration](#configuration)
  - [Environment variables](#environment-variables)
    - [Environment variables development](#environment-variables-development)
    - [Environment variables production](#environment-variables-production)
  - [Commands](#commands)
- [Flow development](#flow-for-development)
- [Flow production](#flow-for-production)


### What is used

- [ReactJS](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Vitest](https://vitest.dev/)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Lint-Staged](https://github.com/okonet/lint-staged)
- [Plop](https://plopjs.com/)

## Configuration
### Environment variables
To use environment variables we follow the
Vite recommended model.

**Obs: These files are included in .gitignore**

#### Environment variables development
Create a `.env.development.local` file with the following content:
```
REACT_ENVIRONMENT = 'DEVELOPMENT'
```
#### Environment variables production
Create a `.env` file with the following content:
```
REACT_ENVIRONMENT = 'PRODUCTION'
```

### Commands
* `dev:app`: run the application on `http://localhost:5173/`
* `build:app`: build for production
* `preview:app`: build for production and start a local server `http://localhost:4173/`
* `lint`: runs the linter in all components and pages
* `format`: runs prettier to format all components and pages
* `test`: runs vitest in watch mode
* `test:coverage`: runs vitest with coverage table
* `generate`: runs plop to generate component files
* `storybook`: runs storybook on `http://localhost:6006/`
* `storybook:build`: create the production build of storybook

## Flow for development
1. Run the `yarn generate` command and fill in the options
2. Start the `yarn dev:app` command
## Flow for production
1. Run the `yarn preview:app` command
2. Publish the files

