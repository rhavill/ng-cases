/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe('login form', function () {
  beforeEach(module('login'));

  describe('loginForm controllers', function() {

    beforeEach(function(){
      this.addMatchers({
        toEqualData: function(expected) {
          return angular.equals(this.actual, expected);
        }
      });
    });

    describe('LoginFormController', function(){
      var scope, ctrl, $httpBackend;

      beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        ctrl = $controller('LoginFormController', {$scope: scope});
      }));


      it('should set some default values.', function() {
        expect(scope.authError).toBe(null);
        expect(scope.user).toBe(null);
      });

      it('should set authentication error after failed login.', function() {
        $httpBackend.expectPOST('/login', {username: 'test', password: 'wrong'}).
            respond({id:0});
        scope.user = {username:'test',password:'wrong'};
        scope.login();
        $httpBackend.flush();
        expect(scope.authError).toBeTruthy();
      });
    });
  });


});


