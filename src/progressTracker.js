const moduleLoader = require('./_moduleLoader');

// Tracks which modules have been completed so far, updates frontend when to show a new one
class ProgressTracker {
  constructor() {
    if (ProgressTracker.instance !== null) {
      ProgressTracker.instance = this;
      this.totalModules = moduleLoader.getNumberOfModules();

      // Array of bools indicating which modules are complete
      // e.g. [true, false, false, false] would mean the first of 4 modules is done
      this.moduleStatus = Array(moduleLoader.getNumberOfModules()).fill(false);
    }
    return ProgressTracker.instance;
  }

  // Returns number of modules completed
  getCompletedModuleCount() {
    return this.moduleStatus.reduce((prev, current) => {
      if (current) return prev + 1;
      return prev;
    }, 0);
  }

  // Returns floating point value indicating the ratio of complete to total modules
  // Not sure if I'll end up using this
  getPercentageComplete() {
    return (this.getCompletedModuleCount() / this.totalModules).toFixed(2);
  }

  // Set the completion status
  setModuleStatus(index, val) {
    const idx = index - 1; // Subctracting 1 so the index argument matches with the module's name
    this.moduleStatus[idx] = !!val; // Ensure val is a boolean
  }

  // Returns whether a specific module (by number, not array index) is complete
  isModuleComplete(index) {
    const idx = index - 1;
    return this.moduleStatus[idx];
  }
}

module.exports = new ProgressTracker();