const { ldclient } = require('../src/launchdarkly');
const { AppConfiguration, LegacyAppConfiguration} = require('../lib/appConfig');
const pathToDependencies = require('path').join(__dirname, 'dependencies.js');

async function configureApp() {
  
  const fallback = false;
  let useNewConfig = fallback;
  // ---------------------------
  // Do not edit above this line
  
  const userCtx = {
    key: 'abc123',
    name: 'Gob Bluth', // Replace this value with your name
    email: 'crissangelfan99@gmail.com', // Replace this value with your email address
    custom: {
      state: 'CA',
      early_access: false,
      device: 'mobile',
      operating_system: 'android',
      browser_name: 'opera',
      app_version: '2.0'
    }
  };
  
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
  config.loadFromFile('/var/opt/myApp/config.json');
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