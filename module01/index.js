const launchDarkly = require('../src/launchdarkly');

// This checks to see if the client has already been initialized
// If we remove this check, it will initiate a new streaming connection every time
// its endpoint is requested
if (!launchDarkly.hasClientInitialized()) {
// Do not edit above this line
// ---------------------------

  // SDK Setup
  // STEP 1: Import the correct module
  const ld = require('');

  // STEP 2: Define your SDK key
  const SDK_KEY = "sdk-xxx" 

  // STEP 3: Intialize the SDK client
  const ldclient = ld.do_some_method();

  // STEP 4: Print a test message to indicate the client has initialized successfully
  ldclient.on('ready', () => {
    console.log('LD INITIALIZED');
  });

// ---------------------------
// Do not edit below this line
  launchDarkly.setInstance(ldclient);
}
module.exports = { ldclient: launchDarkly.ldclient };