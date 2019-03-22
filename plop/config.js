const path = require('path');

function getRealtivePath(...des) {
  const currentWorkspace = process.cwd();

  return path.join(currentWorkspace, ...des);
}

module.exports = {
  path: {
    src: getRealtivePath('src'),
    component: getRealtivePath('src', 'components'),
  },
  template: getRealtivePath('plop', 'templates'),
  defaultName: {
    component: 'Component',
  },
  defaultUse: {
  },
  defaultValue: {
    store: false,
    lazy: true,
  },

};
