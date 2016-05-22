'use strict';

var app = angular.module('uploadApp', ['ngFileUpload']);

app.controller('mainCtrl', function($scope, Upload) {
  console.log('mainCtrl');

  $scope.submit = () => {
    upload($scope.file);
  };

  $scope.upload = files => {
    upload(files[0]);
  };

  function upload(file) {
    Upload.upload({
      url: '/api/images',
      data: { newFile: file }
    })
    .then(res => {
      console.log('res:', res);
    })
    .catch(err => {
      console.log('err:', err);
    })
  }
  
});

