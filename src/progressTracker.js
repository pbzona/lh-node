const moduleLoader = require('./_moduleLoader');

// Tracks which modules have been completed so far, updates frontend when to show a new one
class ProgressTracker {
  constructor() {
    if (ProgressTracker.instance !== null) {
      ProgressTracker.instance = this;
      this.completedModules = 0;
      this.totalModules = moduleLoader.getNumberOfModules(); 
    }
  }

  // Indicate that a new module has been completed by incrementing a count
  increment() {
    this.completedModules += 1;
  }

  // Returns floating point value indicating the ratio of complete to total modules
  // Not sure if I'll end up using this
  getPercentageComplete() {
    return (this.completedModules / this.totalModules).toFixed(2);
  }
}

module.exports = new ProgressTracker();