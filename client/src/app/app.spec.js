describe('App', function () {
  describe('AppCtrl', function () {
    var ctrl, $location, scope, state;
    var mockLoginService = {
      isAuthenticated: function (){
        return false;
      }
    };
    beforeEach(module('ngCases'));
    beforeEach(module('login'));
    beforeEach(module('ui.router'));

    beforeEach(inject(function (_$rootScope_, $controller, $rootScope, $state) {
      $rootScope = _$rootScope_;
      //$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        //console.log('stateChangeSuccess called toState:'+toState.name);
      //});
      $rootScope.$digest();
      scope = $rootScope.$new();
      state = $state;
      ctrl = $controller('AppCtrl', {
        $scope: scope,
        $state: $state,
        login: mockLoginService
      });

    }));

    it('should redirect to login state if cases state is accessed while unauthenticated.', inject(function (_$rootScope_) {
      $rootScope = _$rootScope_;
      state.go('cases');
      $rootScope.$digest();
      expect(state.is('login')).toBe(true);
    }));

    it('should be in cases state when accessing cases page while authenticated.', inject(function (_$rootScope_) {
      $rootScope = _$rootScope_;
      mockLoginService.isAuthenticated = function() {
        return true;
      };
      state.go('cases');
      $rootScope.$digest();
      expect(state.is('cases')).toBe(true);
    }));
  });
});
