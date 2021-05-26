const express = require('express');
const { getRecipeByIdController } = require('../controllers');

const router = express.Router();

router.get('/:id', getRecipeByIdController);

module.exports = router;
