// Important!!! Configuration MUST be loaded from this path!
const expectedConfigPath = '/var/opt/myApp/config.json';
const expectedDependencyVersion = "0.6";

class Configuration {
  constructor(options) {
    this.application = 'myApp';
    this.file = null;
    this.ready = false;
    this.debug = options.debug;
  }

  loadFromFile(path) {
    this.file = path;
  }

  validate() {
    return true;
  }

  addDependencies(obj) {
    this.dependencies = obj;
  }

  checkDependencies() {
    return true;
  }
}

// Shiny new app configuration model - expects a very specific config file location!
class AppConfiguration extends Configuration {
  constructor(options) {
    super(options);
  }

  validate() {
    if (this.file === expectedConfigPath) {
      return true;
    } else {
      if (this.debug) {
        console.error(`Invalid configuration file! Configuration must be loaded from ${expectedConfigPath}`);
      }
      return false;
    }
  }

  checkDependencies() {
    if (this.dependencies['critical-dependency'] === expectedDependencyVersion) {
      return true;
    } else {
      if (this.debug) {
        console.error(`Extreme error condition! The app is crashing and we're losing money!!!`);
      }
      return false;
    }
  }
}

class LegacyAppConfiguration extends Configuration {
  constructor(options) {
    super(options);
  }
}

module.exports = { AppConfiguration, LegacyAppConfiguration }