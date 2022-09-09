// Do not edit above this line
// ---------------------------

// Step 1:
// Create a boolean feature flag and assign its key here
const flagKey = 'lighthouse';

// Step 2:
// Review the three example users below
const user1 = {
  key: 'user1',
  email: 'jsmith@businesscorporation.org',
  name: 'John Smith',
  custom: {
    state: 'FL',
    early_access: false
  }
}

const user2 = {
  key: 'user2',
  email: 'alice@gmail.com',
  name: 'Alice Jackson',
  custom: {
    state: 'PA',
    early_access: true
  }
}

const user3 = {
  key: 'user3',
  email: 'diego333@protonmail.com',
  name: 'Diego Rodriguez',
  custom: {
    state: 'CA',
    early_access: false
  }
}

// Step 3:
// In the LaunchDarkly UI, create a targeting rule that 
// returns true only for users who work at Business Corporation
// and signed up with their work email

// ---------------------------
// Do not edit below this line
module.exports = {
  flag: flagKey,
  users: [user1, user2, user3]
};