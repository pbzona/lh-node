const moduleLoader = require('./_moduleLoader');
const moduleMap = require('./_moduleMap');
const progressTracker = require('./progressTracker');
const FlagKeyCache = require('./flagKeyCache');
const { getServerURL } = require('./helpers');

exports.homepageHandler = (req, res) => {
  const redirectAddress = 'https://northstar-workshop.netlify.app/';
  
  res.writeHead(301, {
    Location: redirectAddress
  }).end();
};

exports.contentHandler = (req, res) => {
  res.send({ message: 'This is content' });
};

exports.moduleHandler = async (req, res) => {
  const { id } = req.params;
  const exportedValue = moduleLoader.load(id);
  const result = await moduleMap.transformModuleExports(id, exportedValue);
  res.send(result);
};

exports.progressHandler = (req, res) => {
  const response = {
    moduleStatus: progressTracker.moduleStatus,
    percentComplete: progressTracker.getPercentageComplete(),
    completedCount: progressTracker.getCompletedModuleCount()
  };
  res.send({ response });
};

exports.singleModuleProgressHandler = (req,res) => {
  const { id } = req.params;
  const response = {
    isModuleComplete: progressTracker.isModuleComplete(id)
  };
  res.send({ response });
};

exports.listenHandler = (port) => {
  console.log(`Server URL: ${getServerURL(port)}\n`);
  console.log('Listening for connections...');
};

exports.flagKeyHandler = {
  set: (req, res) => {
    const { flagKey } = req.body;
    FlagKeyCache.flagKey = flagKey;
    res.send({ message: 'Successfully updated flag key on server' });
  },
  get: (req, res) => {
    const { flagKey } = FlagKeyCache;
    res.send({ flagKey });
  }
};

exports.statusHandler = (req, res) => {
  // Hard coding a response for now, just need to be able to ping this
  // as a health check on the frontend
  res.send({ isThisTheNorthStarServer: true });
};
