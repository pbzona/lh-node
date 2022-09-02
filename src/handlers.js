const moduleLoader = require('./_moduleLoader');
const moduleMap = require('./_moduleMap');

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
  res.send({ message: 'This is a progress update' });
}

exports.listenHandler = (loaders) => {
  console.log('Listening for connections...');
}