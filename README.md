<center>
  <img src=".gitlab/assets/logo-vite-react.svg" alt="A logo vite and react" width="500" />
</center>
<br /><br />

# Vite React - Boilerplate
Boilerplate para projetos usando Vite com react.

## Sumário
- [O que utilizamos](#o-que-utilizamos)
- [Configuração](#configuração)
  - [Requerimentos](#requerimentos)
  - [VsCode](#vscode)
  - [Variáveis de ambiente](#variáveis-de-ambiente)
    - [Variáveis de ambiente para desenvolvimento](#variáveis-de-ambiente-para-desenvolvimento)
    - [Variáveis de ambiente para produção](#variáveis-de-ambiente-para-produção)
  - [Comandos](#commands)
  - [Internacionalização](#internacionalização)
- [Fluxo para desenvolvimento](#fluxo-para-desenvolvimento)
  - [Criando um componente](#criando-um-componente)
  - [Criando uma página](#criando-uma-página)
  - [Criando uma redux](#criando-um-redux)
- [Fluxo para produção](#fluxo-para-produção)


### O que utilizamos ?

- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Styled Components](https://styled-components.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [I18next](https://www.i18next.com/)
- [I18next-react](https://react.i18next.com/)
- [Fontawesome](https://fontawesome.com/)
- [Vitest](https://vitest.dev/)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Lint-Staged](https://github.com/okonet/lint-staged)
- [Plop](https://plopjs.com/)

## Configuração

### Requerimentos
- Node v16.17.0
- Yarn

### VsCode
As configurações abaixo não são obrigatórias mas facilitam
no desesenvolvimento na Ide VsCode
1. Crie o arquivo `settings.json` dentro do `.vscode`, com as seguintes configurações:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  }
}

```

2. Crie o arquivo `jsconfig.json` no diretório raiz, com as seguintes configurações:

```json
{
  "compilerOptions" :  {
    "baseUrl": "./",
    "paths": {
      "@/*" :  ["src/*"]
    }
  },
  "exclude": ["dist"]
}
```
Essa configuração ajuda na execução de importações com alias de webpack. A prop `exclude` é por projeto. Se quiser entender melhor [acesse](https://code.visualstudio.com/docs/languages/jsconfig#_using-webpack-aliases)

### Variáveis de ambiente
Para usar variáveis de ambiente, seguimos o modelo recomendado pelo Vite.

**Obs: Esses arquivos são ignorados no .gitignore**

#### Variáveis de ambiente para desenvolvimento
Digite o seguinte comando no seu terminal para copiar o arquivo de exemplo e
renomeá-lo para `.env.development.local`:
```bash
cp .env-example .env.development.local
```
Variáveis locais:
```
REACT_ENVIRONMENT = 'DEVELOPMENT'
```
#### Variáveis de ambiente para produção
Digite o seguinte comando no seu terminal para copiar o arquivo de exemplo e
renomeá-lo para `.env`:
```bash
cp .env-example .env
```
Valores de produção:
```
REACT_ENVIRONMENT = 'PRODUCTION'
```
### Internacionalização
Acesso o [Readme](src/locales/README.md) exclusivo para essa parte para tirar as suas
dúvidas.

### Comandos
* `dev:app`: roda a aplicação e inicia um servidor local em`http://localhost:5173/`.
* `build:app`: gera para produção.
* `preview:app`: gera para produção e inicia um servidor local em `http://localhost:4173/`.
* `lint`: roda o linter em todos os componentes e páginas.
* `format`: roda o prettier para formatar todos os componentes e páginas.
* `test`: roda o vitest em modo de observação.
* `test:coverage`: roda o vites com cobertura de código.
* `generate`: roda o plop para gerar arquivos.
* `storybook`: roda o storybook e inicia um servidor local em `http://localhost:6006/`.
* `storybook:build`: gera um build para produção do storybook.

## Fluxo para desenvolvimento
1. Digite no terminal `yarn generate` e preencha as informações.
2. Digite no terminal `yarn dev:app` para iniciar o projeto

### Criando um componente

1. Digite no terminal `npm run generate` ou `yarn run` e
   escolha opção `Component`
2. Escolha o tipo de componente
3. Digite o nome respeitando o `camelCase`. Ex: `CardRestrito`
4. Vá dentro do diretório `src/components/tipoEscolhido/NomeDoComponente` ao qual ele foi criado.
5. Procure o arquivo `index.js` dentro desse diretório. Importe e
   exporte o component nesse arquivo.
6. Vá no arquivo `src/components/index.js`
7. Importe e exporte o componente criado novamente para utilizar
   o componente em toda a aplicação.

Caso tenha alguma tradução, faça os seguintes passos:

1. Vá dentro do diretório `src/components/tipoEscolhido/NomeDoComponente/locales/` ao qual ele foi criado.
2. Procure os arquivos de linguas e siga as orientações no arquivo [Readme](src/locales/README.md) da internacionalização para ajustar o namespace.
3. Vá no arquivo `src/components/tipoEscolhido/locales.js`.
4. Importe e exporte a tradução.
5. Vá no arquivo `src/components/locales.js`
6. Importe e exporte a tradução de acordo com o tipo dele.

### Criando uma página

1. Digite no terminal `npm run generate` ou `yarn run` e
   escolha opção `Page`
2. Digite o nome respeitando o `camelCase`. Ex: `NovoTutorial`
3. Vá dentro do diretório `src/pages/NomeDaPagina` ao qual ele foi criado.
4. Vá no arquivo `src/mainRoute.js`
5. Importe a página para ser utilizada.
6. Configure a rota

Caso tenha alguma tradução, faça os seguintes passos:

1. Vá dentro do diretório `src/pages/NomeDaPagina/locales/` ao qual ele foi criado.
2. Procure os arquivos de linguas e siga as orientações no arquivo [Readme](src/locales/README.md) da internacionalização para ajustar o namespace.
3. Vá no arquivo `src/pages/locales.js`.
4. Importe e exporte a tradução.

### Criando um redux

1. Digite no terminal `npm run generate` ou `yarn run` e
   escolha opção `Redux`
2. Digite o nome respeitando o `camelCase`. Ex: `NovoTutorial`
3. Vá dentro do diretório `src/store/store.js`.
4. Importe e exporte o arquivo configurando no reducers.

Caso tenha alguma tradução, faça os seguintes passos:

1. Vá dentro do diretório `src/store/NomeDoRedux/locales/index` ao qual ele foi criado.
2. Procure os arquivos de linguas e siga as orientações no arquivo [Readme](src/locales/README.md) da internacionalização para ajustar o namespace.
3. Vá no arquivo `src/store/locales/locales.js`. **ver com o rafa sobre isso**
4. Importe e exporte a tradução.

## Fluxo para produção
1. Digite no terminal `yarn preview:app`
2. Publique os arquivos
