const express = require('express');

const ServiceController = require('../Controller/ServiceController');

const app = express();

const router = express.Router();

router.get('/', ServiceController.home);

router.get('/haircut', ServiceController.haircut);

router.post('/addApp', ServiceController.addApp);

router.get('/dandt/:servId', ServiceController.dandt);

module.exports = router;