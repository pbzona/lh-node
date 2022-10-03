// Example of how to import once the singleton's ldclient has been set
const launchDarkly = require('../src/launchdarkly');
const { AppConfiguration, LegacyAppConfiguration} = require('../lib/appConfig');
const pathToDependencies = require('path').join(__dirname, 'dependencies.js');

async function configureApp() {
  const { ldclient } = launchDarkly;
  const userCtx = { key: 'abc' };
  const fallback = false;
  let useNewConfig = fallback;
  // ---------------------------
  // Do not edit above this line
  // Replace the flagKey value with your feature flag key below:
  useNewConfig = await ldclient.variation('flagKey', userCtx, fallback);

  // This code loads and validates the configuration file. I hope it works!!!
  let config;
  const options = { debug: false };

  if (useNewConfig) {
    config = new AppConfiguration(options);
    config.loadFromFile('/varr/opt/myApp/config.json');
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