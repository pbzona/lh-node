// This is the file where we configure the locations of learning modules.
// Usually the four defaults provided here will be enough, but you can add
// or subtract items from this list as needed - copy and paste the line with
// the module name changed as appropriate
const fs = require('fs');
const ExportCache = require('./exportCache');

const modules = [
  require('path').resolve(__dirname, '../module01'),
  require('path').resolve(__dirname, '../module02'),
  require('path').resolve(__dirname, '../module03'),
  require('path').resolve(__dirname, '../module04'),
];

// Manages loading and reloading of learning module code
class Loader {
  // Instantiated with an array of module paths
  constructor(workshopModules) {
    if (Loader.instance !== null) {
      Loader.instance = this;
      this.modules = workshopModules;
      this.cache = new ExportCache(this.modules);
    }
    return Loader.instance;
  }

  // Forces a reload of a module, specified by its number
  // The `index` argument is the module's actual number, not index 
  // in an array (for readability elsewhere in the code)
  load(index) {
    let idx = index - 1; // Subctracting 1 so the index argument matches with the module's name
    try {
      delete require.cache[require.resolve(this.modules[idx])]
      this.cache.update(index);
      return require(this.modules[idx]);
    } catch (err) {
      console.error(`ERROR: Unable to load export from module ${index} - falling back to last known good value. There is likely a syntax error in the file ${this.modules[idx]}`);
    }
    return this.cache.moduleExports[idx];
  }

  // Returns number of modules in this workshop
  getNumberOfModules() {
    return this.modules.length;
  }
}

let moduleLoader = new Loader(modules);
module.exports = moduleLoader;