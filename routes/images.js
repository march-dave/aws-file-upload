'use strict';

const express = require('express');
const multer = require('multer');

let router = express.Router();
let upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    filesize: 1000000 * 10
  }
});

let Image = require('../models/image');

//   /api/images

router.post('/', upload.single('newFile'), (req, res) => {
  Image.upload(req.file, (err, image) => {
    console.log('image:', image);

    res.status(err ? 400 : 200).send(err || image);
  });
});

module.exports = router;
