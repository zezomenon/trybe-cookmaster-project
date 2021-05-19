const express = require('express');
const { registerUserController } = require('../controllers');

const router = express.Router();

router.post('/', registerUserController);

module.exports = router;
