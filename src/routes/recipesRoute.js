const express = require('express');
const { recipesController } = require('../controllers');

const router = express.Router();

router.post('/', recipesController);

module.exports = router;
