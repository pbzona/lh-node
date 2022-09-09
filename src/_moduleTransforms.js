const launchDarkly = require('../src/launchdarkly');

// Write transformations against the learning module exports here

// Module01
const sdkSetupResult = (is_initialized) => {
  return {
    is_initialized
  }
}

exports.sdkSetup = (exportedValue) => {
  let { ldclient } = exportedValue;

  // This condition is likely going to happen at least once
  // prior to initialization, so we should just return false 
  // immediately and keep the output free of lengthy errors
  if (ldclient == null) return sdkSetupResult(false);

  try {
    let success = ldclient.initialized();
    if (success) return sdkSetupResult(true);
  } catch (err) {
    console.error(err);
  }

  return sdkSetupResult(false);
}

// Module02

// Module03
exports.getUserVariations = async (exportedValue) => {
  const { ldclient } = launchDarkly;
  const { flag, users } = exportedValue;

  try {
    let userArray = users.map(user => (
      ldclient.variation(flag, user)
    ));

    let userVariations = await Promise.all(userArray);

    return { users: users.map((user, idx) => {
      return {
        name: user.name,
        variation: userVariations[idx]
      }
    }) };
  } catch (err) {
    console.error(err);
  }

  return { users: null }
}