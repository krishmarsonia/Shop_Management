const express = require('express');

const ServiceController = require('../Controller/ServiceController');

const app = express();

const router = express.Router();

router.get('/', ServiceController.home);

router.get('/haircut', ServiceController.haircut);

router.post('/addApp', ServiceController.addApp);

router.post('/testdate', ServiceController.testdate);

router.get('/dandt', ServiceController.dandt);

module.exports = router;