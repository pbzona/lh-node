// The export cache tracks new and current versions of an exported module
// when loading via `require`. This enables falling back to the current version if a new
// version of a module isn't able to be loaded for some reason.
//
// Example: someone edits a file, then saves it in a syntactically invalid state. When
// the API polls, if it tries to load that module in a bad state, the whole server will 
// fail due to an unhandled error.

class ExportCache {
  constructor(modules) {
    this.modules = modules;
    this.moduleExports = Array(modules.length).fill(null);
  }
  
  // The `index` argument is the module's actual number, not index 
  // in an array (for readability elsewhere in the code)
  update(idx) {
    this.moduleExports[idx] = require(this.modules[idx]);
  }

  // Initialize the array of exports - this should only be called when the LD client is ready
  // Other modules refer to the LD singleton, so this prevents those modules from being loaded
  // until the singleton has a valid client
  initializeExports() {
    this.moduleExports = this.modules.map(mod => {
      return require(mod);
    });
  }
}

module.exports = ExportCache;