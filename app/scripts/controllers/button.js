'use strict';

angular.module('angularApp')
  .controller('buttonController', function ($scope) {
    $scope.isDisabled = true;
    $scope.block = function () {
      $scope.isDisabled = false;
    };
  });
