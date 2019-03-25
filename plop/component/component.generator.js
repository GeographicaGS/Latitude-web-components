const {
  removeGitKeep
} = require('../utils/removeGitKeep')
const {
  getAddAction
} = require('../utils/actions.js')
const {
  getNamePrompt
  // getStorePrompt,
} = require('../utils/prompts.js')

const getPrompts = (plopConfig) => {
  const prompts = []

  prompts.push(getNamePrompt(plopConfig, 'component'))
  // prompts.push(getStorePrompt(plopConfig, 'store'));

  return prompts
}

const getActions = plopConfig => (data) => {
  const actions = []
  actions.push(
    getAddAction(
      plopConfig.path.component,
      '{{dashCase name}}',
      'index',
      'js',
      `${plopConfig.template}/index.js.hbs`,
      null
    )
  )
  actions.push(
    getAddAction(
      plopConfig.path.component,
      '{{dashCase name}}',
      '{{pascalCase name}}',
      'vue',
      `${plopConfig.template}/vue.hbs`,
      null
    )
  )
  actions.push(
    getAddAction(
      plopConfig.path.component,
      '{{dashCase name}}',
      '{{dashCase name}}',
      'html',
      `${plopConfig.template}/template.html.hbs`,
      null
    )
  )
  actions.push(
    getAddAction(
      plopConfig.path.component,
      '{{dashCase name}}',
      '{{dashCase name}}',
      'scss',
      `${plopConfig.template}/style.scss.hbs`,
      null
    )
  )
  actions.push(
    getAddAction(
      plopConfig.path.component,
      '{{dashCase name}}',
      '{{dashCase name}}',
      'js',
      `${plopConfig.template}/script.js.hbs`,
      null
    )
  )

  if (data.store) {
    actions.push(
      getAddAction(
        plopConfig.path.component,
        '{{dashCase name}}/store',
        'index',
        'js',
        `${plopConfig.template}/store.js.hbs`,
        null
      )
    )
    actions.push(
      getAddAction(
        plopConfig.path.component,
        '{{dashCase name}}/store',
        'state',
        'js',
        `${plopConfig.template}/state.js.hbs`,
        null
      )
    )
    actions.push(
      getAddAction(
        plopConfig.path.component,
        '{{dashCase name}}/store',
        'mutations',
        'js',
        `${plopConfig.template}/mutations.js.hbs`,
        null
      )
    )
    actions.push(
      getAddAction(
        plopConfig.path.component,
        '{{dashCase name}}/store',
        'getters',
        'js',
        `${plopConfig.template}/getters.js.hbs`,
        null
      )
    )
    actions.push(
      getAddAction(
        plopConfig.path.component,
        '{{dashCase name}}/store',
        'actions',
        'js',
        `${plopConfig.template}/actions.js.hbs`,
        null
      )
    )
    actions.push(
      getAddAction(
        plopConfig.path.component,
        '{{dashCase name}}',
        'constants',
        'js',
        `${plopConfig.template}/constants.js.hbs`,
        null
      )
    )
  }

  actions.push(
    getAddAction(
      plopConfig.path.component,
      '{{dashCase name}}',
      '{{dashCase name}}',
      'md',
      `${plopConfig.template}/readme.md.hbs`,
      null
    )
  )

  removeGitKeep(plopConfig.path.component)

  return actions
}

module.exports = (plop, config) => {
  plop.setGenerator('Component', {
    description: 'Vue Component',
    prompts: getPrompts(config),
    actions: getActions(config)
  })
}
