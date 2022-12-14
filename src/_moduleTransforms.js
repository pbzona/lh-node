// Write transformations against the learning module exports here

// Module00
const sdkSetupResult = (is_initialized) => {
  return {
    is_initialized
  };
};

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
};

// Module01 && Module03
exports.configureApp = async (exportedValue) => {
  const { flagValue, featureIsWorking } = await exportedValue;
  return { flagValue, featureIsWorking };
};

// Module02
exports.getUserVariations = async (exportedValue) => {
  const { users } = exportedValue;
  const userVariations = await Promise.all(exportedValue.userVariations);
  
  try {
    return { users: users.map((user, idx) => {
      return {
        context: user,
        variation: userVariations[idx]
      };
    })};
  } catch (err) {
    console.error(err);
  }

  return { users: null };
};