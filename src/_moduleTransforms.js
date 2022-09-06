// Write transformations against the learning module exports here

// Module01
exports.sdkSetup = (exportedValue) => {
  let { ldclient } = exportedValue;

  // This condition is likely going to happen at least once
  // prior to initialization, so we should just return false 
  // immediately and keep the output free of lengthy errors
  if (ldclient == null) return { is_initialized: false };

  try {
    let success = ldclient.initialized();
    if (success) return { is_initialized: true };
  } catch (err) {
    console.error(err);
  }

  return { is_initialized: false };
}

// Module02