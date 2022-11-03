const express = require('express');
const handlers = require('./handlers');

const router = express.Router();

router.get('/', handlers.homepageHandler);
router.get('/content', handlers.contentHandler);
router.get('/module/:id', handlers.moduleHandler);
router.get('/module/:id/:noop', handlers.moduleHandler);
router.get('/progress', handlers.progressHandler);
router.get('/progress/:id', handlers.singleModuleProgressHandler);

module.exports = router;