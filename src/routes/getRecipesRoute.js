const express = require('express');
const { getRecipesController } = require('../controllers');

const router = express.Router();

router.get('/', getRecipesController);

module.exports = router;
