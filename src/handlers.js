const moduleLoader = require('./_moduleLoader');
const moduleMap = require('./_moduleMap');
const progressTracker = require('./progressTracker');

exports.contentHandler = (req, res) => {
  res.send({ message: 'This is content' });
}

exports.moduleHandler = (req, res) => {
  const { id } = req.params;
  const exportedValue = moduleLoader.load(id);
  const result = moduleMap.evaluateTestForModule(id, exportedValue);
  res.send({ data: result });
}

exports.progressHandler = (req, res) => {
  const response = {
    moduleStatus: progressTracker.moduleStatus,
    percentComplete: progressTracker.getPercentageComplete(),
    completedCount: progressTracker.getCompletedModuleCount()
  };
  res.send({ data: response });
}

exports.singleModuleProgressHandler = (req,res) => {
  const { id } = req.params;
  const response = {
    isModuleComplete: progressTracker.isModuleComplete(id)
  };
  res.send({ data: response });
}

exports.listenHandler = (loaders) => {
  console.log('Listening for connections...');
}