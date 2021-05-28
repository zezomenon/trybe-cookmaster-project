const express = require('express');
const multer = require('multer');
const { updateRecipeImgController } = require('../controllers');

const router = express.Router();

router.use(express.static(`${__dirname}uploads/`));

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, _file, cb) => {
    const { id } = req.params;
    cb(null, `${id}.jpeg`);
  },
});

const uploadImg = multer({ storage });

router.put('/:id/image', uploadImg.single('image'), updateRecipeImgController);

module.exports = router;
// source: https://www.npmjs.com/package/multer
