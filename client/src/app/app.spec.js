describe('App', function () {
  describe('AppCtrl', function () {
    var ctrl, $location, scope, state;

    beforeEach(module('ngBoilerplate'));
    beforeEach(module('login'));
    beforeEach(module('ui.router'));

    beforeEach(inject(function (_$rootScope_, _$httpBackend_, $controller, _$location_, $rootScope, $state) {
      $location = _$location_;
      $rootScope = _$rootScope_;
      $httpBackend = _$httpBackend_;
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        console.log('stateChangeSuccess called toState:'+toState.name);
      });
      $rootScope.$digest();
      scope = $rootScope.$new();
      state = $state;
      ctrl = $controller('AppCtrl', { $location: $location, $scope: scope, $state: $state });

    }));

    it('should pass a dummy test', inject(function (_$rootScope_) {
      $rootScope = _$rootScope_;
      console.log('login?'+state.is('login'));
      state.go('login');
      $rootScope.$digest();
      console.log('login?'+state.is('login'));
      state.transitionTo('private', {});
      //$rootScope.$digest();
      //console.log(state.name);
      //expect(login.isAuthenticated()).toBe(false);
    }));
  });
});
