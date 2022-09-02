// This is the file where we configure the locations of learning modules.
// Usually the four defaults provided here will be enough, but you can add
// or subtract items from this list as needed - copy and paste the line with
// the module name changed as appropriate
const fs = require('fs');

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
    this.modules = workshopModules;
  }

  // Forces a reload of a module, specified by its number
  // The `index` argument is the module's actual number, not index 
  // in an array (for readability elsewhere in the code)
  load(index) {
    let idx = index - 1; // Subctracting 1 so the index argument matches with the module's name
    fs.readFile(this.modules[idx], () => {
      // TODO Check for file changes here?
      delete require.cache[require.resolve(this.modules[idx])]
    });
    return require(this.modules[idx]);
  }

  // Returns number of modules in this workshop
  getNumberOfModules() {
    return this.modules.length;
  }
}

module.exports = new Loader(modules);