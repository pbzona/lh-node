const moduleLoader = require('./_moduleLoader');
const moduleMap = require('./_moduleMap');
const progressTracker = require('./progressTracker');

exports.contentHandler = (req, res) => {
  res.send({ message: 'This is content' });
}

exports.moduleHandler = (req, res) => {
  const { id } = req.params;
  const exportedValue = moduleLoader.load(id);
  const result = moduleMap.transformModuleExports(id, exportedValue);
  res.send(result);
}

exports.progressHandler = (req, res) => {
  const response = {
    moduleStatus: progressTracker.moduleStatus,
    percentComplete: progressTracker.getPercentageComplete(),
    completedCount: progressTracker.getCompletedModuleCount()
  };
  res.send({ response });
}

exports.singleModuleProgressHandler = (req,res) => {
  const { id } = req.params;
  const response = {
    isModuleComplete: progressTracker.isModuleComplete(id)
  };
  res.send({ response });
}

exports.listenHandler = () => {
  console.log('Listening for connections...');
}