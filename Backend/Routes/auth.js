const express = require('express');

const authcontroller = require('../Controller/authController');

const router = express.Router();

router.get('/signup', authcontroller.getsignup);

router.post('/signup', authcontroller.postsignup);

router.get('/signin', authcontroller.getsignin);

router.post('/signin', authcontroller.postsignin);

router.post('/logout', authcontroller.postlogout);

module.exports = router;