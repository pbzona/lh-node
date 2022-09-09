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
    this.moduleExports = modules.map(mod => {
      return require(mod);
    });
  }
  
  // The `index` argument is the module's actual number, not index 
  // in an array (for readability elsewhere in the code)
  update(index) {
    let idx = index - 1; // Subctracting 1 so the index argument matches with the module's name
    this.moduleExports[idx] = require(this.modules[idx]);
  }
}

module.exports = ExportCache;