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
      var $scope, ctrl;
      var mockLoginService = {
        user: null,
        isAuthenticated: function (){
          if (mockLoginService.user) {
            return true;
          }
          else {
            return false;
          }
        },
        login: function(username,password) {
          if (password == 'correct') {
            mockLoginService.user = {id: 1, username: 'test'};
          }
          else {
            mockLoginService.user = null;
          }
          if (username == 'server_error') {
            return { then: function(success, failure) {failure();}};
          }
          return { then: function(success, failure) {success();}};
        }
      };
      var mockStateService = {
        go: function (state){
        }
      };

      beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('LoginFormController', {$scope: $scope, login: mockLoginService});
      }));

      it('should set some default values.', function() {
        expect($scope.authError).toBe(null);
        expect($scope.user).toBe(null);
      });

      it('should unset user and set authentication error after failed login.', function() {
        $scope.user = {username:'test',password:'wrong'};
        $scope.login();
        expect($scope.authError).toBe('Bad username or password.');
        expect($scope.user).toBe(null);
      });

      it('should set user and not set authentication error after successful login.', function() {
        $scope.user = {username:'test',password:'correct'};
        $scope.login();
        expect($scope.authError).toBe(null);
        expect($scope.user).toEqualData({id:1, username: 'test'});
      });

      it('should unset user and set authentication error after failure to contact server.', function() {
        $scope.user = {username:'server_error',password:'correct'};
        $scope.login();
        expect($scope.authError).toBe('Error logging in. Problem contacting server.');
        expect($scope.user).toBe(null);
      });

    });

  });


});


