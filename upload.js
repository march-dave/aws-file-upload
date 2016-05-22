'use strict';

var AWS = require('aws-sdk');
var fs = require('fs');
var path = require('path');
var uuid = require('uuid');

var s3 = new AWS.S3();

// https://s3-us-west-1.amazonaws.com/i-cant-believe-its-not-bucket/a9fha9fha9sd8fjap9dfjpapdfijpaifj

// var bucketName = 'i-cant-believe-its-not-bucket';
// var urlBase = 'https://s3-us-west-1.amazonaws.com/'
var bucketName = 'coding-house-bucket';
var urlBase = 'https://s3-us-west-2.amazonaws.com/'

var fileName = 'tiger.jpg'

fs.readFile(path.join(__dirname, fileName), (err, data) => {
  if(err) throw err;

  // we need data, fileName

  var ext = fileName.split('.').pop();
  var key = uuid() + `.${ext}`;

  let params = {
    Bucket: bucketName,
    Key: key,
    ACL: 'public-read',
    Body: data
  };

  s3.putObject(params, (err, result) => {
    if(err) throw err;

    var imgUrl = `${urlBase}${bucketName}/${key}`;
    console.log('imgUrl:', imgUrl);

  });
});

