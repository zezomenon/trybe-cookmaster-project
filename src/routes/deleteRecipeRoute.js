const express = require('express');
const { deleteRecipeController } = require('../controllers');

const router = express.Router();

router.delete('/:id', deleteRecipeController);

module.exports = router;
