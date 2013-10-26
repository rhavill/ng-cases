/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe('login section', function () {
  beforeEach(module('login'));
  var $scope;
  var $controller;

  describe('controllers', function () {
    beforeEach(inject(function ($injector) {
      $scope = $injector.get('$rootScope');
      $controller = $injector.get('$controller');
    }));

    describe('LoginFormController', function () {
      it('should be unauthenticated by default', function () {
        var params = {
          $scope: $scope
        };
        var ctrl = $controller('LoginFormController', params);
        expect($scope.user).toBe(null);
        expect($scope.authError).toBe(null);
        //expect(params.crudListMethods).toHaveBeenCalled();
      });
    });

  });
});


