const { ldclient } = require('../src/launchdarkly');
// Do not edit above this line
// ---------------------------

// Step 1:
// Review the three example users below
const user1 = {
  key: 'user1',
  email: 'jsmith@company.org',
  name: 'John Smith',
  custom: {
    state: 'FL',
    early_access: false,
    device: 'mobile',
    operating_system: 'android',
    browser_name: 'firefox',
    app_version: '1.9'
  }
}

const user2 = {
  key: 'user2',
  email: 'alice@gmail.com',
  name: 'Alice Jackson',
  custom: {
    state: 'PA',
    early_access: true,
    device: 'mobile',
    operating_system: 'iOS',
    browser_name: 'safari',
    app_version: '2.0'
  }
}

const user3 = {
  key: 'user3',
  email: 'diego333@protonmail.com',
  name: 'Diego Rodriguez',
  custom: {
    state: 'CA',
    early_access: false,
    device: 'mobile',
    operating_system: 'android',
    browser_name: 'chrome',
    app_version: '2.1'
  }
}

// Step 2:
// Add your feature flag to the variation call in the helper
async function targetingHelper(ctx) {
  // const flagValue = ???
  return false;
}

// Step 3:
// In the LaunchDarkly UI, create a targeting rule that 
// returns true only for users who work at Company
// and signed up with their work email

// ---------------------------
// Do not edit below this line
const userVariations = [user1, user2, user3].map(targetingHelper);

module.exports = {
  users: [user1, user2, user3],
  userVariations
};