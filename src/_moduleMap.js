const moduleTransforms = require('./_moduleTransforms');

const transformModuleExports = (moduleID, exportedValue) => {
  moduleID = parseInt(moduleID);

  // Return the return value of the corresponding module test
  // Each test should take `exportedValue` as an argument; this will be the
  // object exported by that learning module
  switch (moduleID) {
    case 1:
      return moduleTransforms.sdkSetup(exportedValue);
    case 2:
      return moduleTransforms.configureApp(exportedValue);
    case 3:
      return moduleTransforms.getUserVariations(exportedValue);
    case 4:
      break;
    default:
      return `Invalid request - no module with index ${moduleID}`;
  }
}

module.exports = { transformModuleExports };