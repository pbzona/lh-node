const launchDarkly = require('../launchdarkly');

class FakeLDClient {
  constructor(init) {
    this._init = init || false;
  }

  initialized() {
    return this._init
  }
}

test('should be able to store a client', () => {
  const ld = new FakeLDClient();
  launchDarkly.setInstance(ld);
  expect(launchDarkly.ldclient).toBe(ld);
})

describe('initialization properties', () => { 
  test('should respond true if client has initialized', () => {
    const ld = new FakeLDClient(true);
    launchDarkly.setInstance(ld);
    expect(launchDarkly.hasClientInitialized()).toBe(true);
  })
  
  test('should respond false if client has not yet initialized', () => {
    const ld = new FakeLDClient(false);
    launchDarkly.setInstance(ld);
    expect(launchDarkly.hasClientInitialized()).toBe(false);
  })

  test('should respond false if invalid client supplied', () => {
    launchDarkly.setInstance(null);
    expect(launchDarkly.hasClientInitialized()).toBe(false);
  })
})