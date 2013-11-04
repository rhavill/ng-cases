describe('App', function () {
  describe('AppCtrl', function () {
    var ctrl, $location, scope, state;
    var mockLoginService = {
      isAuthenticated: function (){
        return false;
      }
    };
    beforeEach(module('ngBoilerplate'));
    beforeEach(module('login'));
    beforeEach(module('ui.router'));

    beforeEach(inject(function (_$rootScope_, _$httpBackend_, $controller, _$location_, $rootScope, $state) {
      $location = _$location_;
      $rootScope = _$rootScope_;
      $httpBackend = _$httpBackend_;
      //$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        //console.log('stateChangeSuccess called toState:'+toState.name);
      //});
      $rootScope.$digest();
      scope = $rootScope.$new();
      state = $state;
      ctrl = $controller('AppCtrl', {
        $location: $location,
        $scope: scope,
        $state: $state,
        login: mockLoginService
      });

    }));

    it('should redirect to login state if private state is accessed while unauthenticated.', inject(function (_$rootScope_) {
      $rootScope = _$rootScope_;
      state.go('private');
      $rootScope.$digest();
      expect(state.is('login')).toBe(true);
    }));
  });
});
