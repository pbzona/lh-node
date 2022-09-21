// Example of how to import once the singleton's ldclient has been set
const { ldclient } = require('../src/launchdarkly');

// Do not edit above this line
// ---------------------------

// Todo: decide if we want to make the user define their flag key here or on the
// frontend. If they define on the frontend we can maybe use it to autopopulate a code sample
// but will (potentially) send a larger response if we need to send allFlags and filter
let flagKey = 'first-flag';

// ---------------------------
// Do not edit below this line

module.exports = flagKey;