const express = require('express');

const ServiceController = require('../Controller/ServiceController');

const router = express.Router();

router.get('/', ServiceController.home);

router.get('/hii', ServiceController.hi);

module.exports = router;