const express = require('express');
const multer = require('multer');//handles uploads
var upload = multer({dest: 'uploads/'});//sets destination folder

var app = express();

app.set('view engine', 'pug');

app.post('/file-upload', upload.single('myFile'), (request, response, next) => {
  const fileSize = request.file.size;
  response.json({
    size: fileSize,
  });
});

app.get('*', (request, response) => {
  response.render('index');
});

app.listen(process.env.PORT || 8080);