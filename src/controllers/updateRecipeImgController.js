const { StatusCodes } = require('http-status-codes');
const { updateRecipeImgService } = require('../services');

const updateRecipeImgController = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    const { filename } = req.file;
    const image = `localhost:3000/images/${filename}`;
    const recipe = await updateRecipeImgService(authorization, id, image);
    await res.status(StatusCodes.OK).json(recipe);
  } catch (error) {
    console.log(error);
    const { status, message } = error;
    await res.status(status).json({ message });
  }
};

module.exports = updateRecipeImgController;
