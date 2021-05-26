const express = require('express');
const { updateRecipeController } = require('../controllers');

const router = express.Router();

router.put('/:id', updateRecipeController);

module.exports = router;
