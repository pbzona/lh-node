// Example of how to import once the singleton's ldclient has been set
const { ldclient } = require('../src/launchdarkly');
const { AppConfiguration, LegacyAppConfiguration} = require('../lib/appConfig');
const pathToDependencies = require('path').join(__dirname, 'dependencies.js');

async function configureApp() {
  const userCtx = { key: 'abc' };
  const fallback = false;
  let useNewConfig = fallback;
  // ---------------------------
  // Do not edit above this line
  if (ldclient) {
    // Paste your call to variation here and assign it to `useNewConfig`:
    
  }

  // This code loads and validates the configuration file. I hope it works!!!
  let config;
  const options = { debug: false };

  if (useNewConfig) {
    config = new AppConfiguration(options);
  } else {
    config = new LegacyAppConfiguration(options);
  }
  config.loadFromFile('/varr/opt/myApp/config.json');
  config.loadDependencies(pathToDependencies);
  // ---------------------------
  // Do not edit below this line
  configValid = config.validate();
  dependenciesSatisfied = config.checkDependencies();

  return {
    flagValue: useNewConfig,
    featureIsWorking: configValid && dependenciesSatisfied
  };
}

module.exports = configureApp();