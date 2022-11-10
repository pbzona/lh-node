class FlagKeyCache {
  constructor(val) {
    if (!FlagKeyCache.instance) {
      FlagKeyCache.instance = this;
    }
    this._flagKey = val;
    return FlagKeyCache.instance;
  }

  get flagKey() {
    return this._flagKey;
  }

  set flagKey(val) {
    this._flagKey = val;
  }
}

module.exports = new FlagKeyCache('myFlag');