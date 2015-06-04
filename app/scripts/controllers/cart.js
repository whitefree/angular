'use strict';

angular.module('angularApp')          //模块的声明
  .controller('cartController', function ($scope) {
    $scope.items = [
      {title:'name1',quantity:1,price: 10},
      {title:'name2',quantity:2,price: 20},
      {title:'name3',quantity:3,price: 30}
    ];

    $scope.totalCart = function(){
      var total = 0;
      for (var i =0 ; i<$scope.items.length;i++){
        total = total +$scope.items[i].price * $scope.items[i].quantity;
      }
      return total;
    };

    function calculateDiscount(newValue,oldValue,$scope){
      $scope.discount = newValue>100?10:0;
    }

    $scope.subtotal = function(){
      return $scope.totalCart() - $scope.discount;
    };

    $scope.$watch($scope.totalCart,calculateDiscount);

  });
