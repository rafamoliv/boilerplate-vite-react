module.exports = (plop) => {
  // Create component
  plop.setGenerator('Component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'list',
        name: 'typeComponent',
        message: 'What type of component?',
        choices: ['atoms', 'molecules', 'organism', 'templates']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true
          }
          return 'Name is required'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{typeComponent}}/{{properCase name}}/index.js',
        templateFile: '.plop/templates/component/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{typeComponent}}/{{properCase name}}/{{properCase name}}.jsx',
        templateFile: '.plop/templates/component/component.jsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{typeComponent}}/{{properCase name}}/{{properCase name}}.config.js',
        templateFile: '.plop/templates/component/config.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{typeComponent}}/{{properCase name}}/{{properCase name}}.styles.js',
        templateFile: '.plop/templates/component/styles.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{typeComponent}}/{{properCase name}}/{{properCase name}}.stories.jsx',
        templateFile: '.plop/templates/component/stories.jsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{typeComponent}}/{{properCase name}}/{{properCase name}}.test.js',
        templateFile: '.plop/templates/component/test.jsx.hbs'
      }
    ]
  })

  // Create page
  plop.setGenerator('Page', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the page?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true
          }
          return 'Name is required'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{properCase name}}/index.js',
        templateFile: '.plop/templates/page/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{properCase name}}/{{properCase name}}.jsx',
        templateFile: '.plop/templates/page/component.jsx.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{properCase name}}/{{properCase name}}.config.js',
        templateFile: '.plop/templates/page/config.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{properCase name}}/{{properCase name}}.styles.js',
        templateFile: '.plop/templates/page/styles.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{properCase name}}/{{properCase name}}.stories.jsx',
        templateFile: '.plop/templates/page/stories.jsx.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{properCase name}}/{{properCase name}}.test.jsx',
        templateFile: '.plop/templates/page/test.jsx.hbs'
      }
    ]
  })

  // create redux
  plop.setGenerator('Redux', {
    description: 'Create new store',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the store name?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true
          }
          return 'Name is required'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/store/{{properCase name}}/index.js',
        templateFile: '.plop/templates/store/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/store/{{properCase name}}/slice.js',
        templateFile: '.plop/templates/store/slice.js.hbs'
      }
    ]
  })
}
