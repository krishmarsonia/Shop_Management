const express = require('express');

const ServiceController = require('../Controller/ServiceController');

const app = express();

const router = express.Router();

router.get('/', ServiceController.home);

router.get('/haircut', ServiceController.haircut);

router.post('/addApp', ServiceController.addApp);

router.get('/dandt/:barbId', ServiceController.dandt);

router.get('/barberselect/:servId', ServiceController.barberselect);

module.exports = router;