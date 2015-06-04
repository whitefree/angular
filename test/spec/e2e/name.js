'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('nameController', {
      $scope: scope
    });
  }));

  it("the dicount should to be 0 when i change the quantity of the third product from 3 to 1 ", function() {

    $('input')[4].val(1);
    expect($('span')[6].val).toBe('$0.00');
  });
});
