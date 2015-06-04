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

  it('should display Song Yuan', function () {
    expect(scope.name.text).toBe('Song Yuan');
  });
});
