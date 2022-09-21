// Example of how to import once the singleton's ldclient has been set
const { ldclient } = require('../src/launchdarkly');

async function getFlagValue() {
  const userCtx = { key: 'abc' };
  // ---------------------------
  // Do not edit above this line

  // Paste your call to variation here:


  // ---------------------------
  // Do not edit below this line
  return flagValue;
}

module.exports = getFlagValue();