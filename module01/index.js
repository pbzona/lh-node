const launchDarkly = require('../src/launchdarkly');
const moduleLoader = require('../src/_moduleLoader');

// This checks to see if the client has already been initialized
// If we remove this check, it will initiate a new streaming connection every time
// its endpoint is requested
if (!launchDarkly.hasClientInitialized()) {
// Do not edit above this line
// ---------------------------

// SDK Setup
// STEP 1: Import the correct module
// const ld = require('');

// STEP 2: Define your SDK key
// const SDK_KEY = '';

// STEP 3: Intialize the SDK client
// const ldclient = ld.init(SDK_KEY);

// STEP 4: Print a test message to indicate the client has initialized successfully
//         and perform some setup operations to allow its use elsewhere
// ldclient.on('ready', () => {
//   console.log('LAUNCHDARKLY CLIENT INITIALIZED');
//   launchDarkly.setInstance(ldclient);
//   moduleLoader.cache.initializeExports();
// });

// ---------------------------
// Do not edit below this line
}
module.exports = { ldclient: launchDarkly.ldclient };