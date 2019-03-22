const fs = require('fs');

const getComponents = directoryPath => fs.readdirSync(directoryPath);

const componentsContain = (components, component) => components.indexOf(component) >= 0;

const componentExists = (component, directoryPath) => {
  const components = getComponents(directoryPath);
  return componentsContain(components, component);
};


const validateNameInput = (folderPath, type) => (value) => {
  if (/.+/.test(value)) {
    return componentExists(value, folderPath)
      ? `A ${type} with this name already exist`
      : true;
  }
  return 'The name is required';
};

module.exports = {
  validateNameInput,
};
