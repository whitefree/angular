'use strict';

angular.module('angularApp')
  .controller('listingController', function ($scope) {
    $scope.listings = [
      { name: 'listing1', address: 'address1'},
      { name: 'listing2', address: 'address2'},
      { name: 'listing3', address: 'address3'}
    ];

    $scope.remove = function(index){
      $scope.listings.splice(index,1);
    };

  });
