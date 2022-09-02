const express = require('express');
const handlers = require('./handlers');

const router = express.Router();

router.get('/content', handlers.contentHandler);
router.get('/module/:id', handlers.moduleHandler);
router.get('/progress', handlers.progressHandler);

module.exports = router;