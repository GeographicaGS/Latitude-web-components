const { validateNameInput } = require('./inputValidation.js');

const getNamePrompt = (plopConfig, type) => {
  const defaultName = plopConfig.defaultName[type];
  const defaultFolderPath = plopConfig.path[type];

  return {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: defaultName,
    validate: validateNameInput(defaultFolderPath, type),
  };
};

const getStorePrompt = (plopConfig, type) => {
  const defaultResponse = plopConfig.defaultValue[type];

  return {
    type: 'confirm',
    name: 'store',
    message: 'Do you want that the component has the store connection?',
    default: defaultResponse,
  };
};

const getLazyPrompt = (plopConfig, type) => {
  const defaultResponse = plopConfig.defaultValue[type];

  return {
    type: 'confirm',
    name: 'lazy',
    message: 'Do you want lazy load to the view?',
    default: defaultResponse,
  };
};

module.exports = {
  getNamePrompt,
  getStorePrompt,
  getLazyPrompt,
};
