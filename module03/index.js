const launchDarkly = require('../src/launchdarkly');
const { AppConfiguration, LegacyAppConfiguration} = require('../lib/appConfig');
const pathToDependencies = require('path').join(__dirname, 'dependencies.js');

async function configureApp() {
  const { ldclient } = launchDarkly;
  const fallback = false;
  let useNewConfig = fallback;
  // ---------------------------
  // Do not edit above this line
  
  const userCtx = {
    key: 'abc123', // Replace this value with a unique key to test
    name: 'Gob Bluth', // Replace this value with your name to test
    email: 'crissangelfan99@gmail.com', // Replace this value with your email address to test
    custom: {
      state: 'CA',
      early_access: false,
      device: 'mobile',
      operating_system: 'android',
      browser_name: 'opera',
      app_version: '2.0'
    }
  };

  // Update the flag key to match the one you created
  useNewConfig = await ldclient.variation('flagKey', userCtx, fallback);

  // This code loads and validates the configuration file. I hope it works!!!
  let config;
  const options = { debug: false };

  if (useNewConfig) {
    config = new AppConfiguration(options);
    config.loadFromFile('/var/opt/myApp/config.json');
  } else {
    config = new LegacyAppConfiguration(options);
    config.loadFromFile('/etc/myApp/config.json');
  }
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

module.exports = launchDarkly.hasClientInitialized() ?
  configureApp() : { flagValue: false, featureIsWorking: false };