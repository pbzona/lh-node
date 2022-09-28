// This will be a singleton wrapper for our SDK, used to track the state of the client
//
// Necessary to hold the client once it's been initialized - otherwise testing for it will
// not work because of the async initialization operation
//
// Use this object for all modules after the first one rather than initializing
// a new client in each module

// Implement singleton pattern
class LaunchDarklySingleton {
  constructor() {
    if (LaunchDarklySingleton.instance == null) {
      LaunchDarklySingleton.instance = this;
      this.ldclient = null;
    }
    return LaunchDarklySingleton.instance;
  }

  // Set up the LaunchDarkly client
  setInstance(client) {
    this.ldclient = client;
  }

  // Returns true if `ldclient` is not a falsy value; i.e. it has been set
  hasClientInitialized() {
    try {
      return this.ldclient.initialized();
    } catch (err) {
      // console.error(err);
    }
    return false;
  }
}

// Instantiate the singleton object
const launchDarkly = new LaunchDarklySingleton();

module.exports = launchDarkly;