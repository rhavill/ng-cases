angular.module('ngBoilerplate', [
      'templates-app',
      'templates-common',
      'ngBoilerplate.home',
      'ngBoilerplate.private',
      'ngBoilerplate.login',
      'ui.router',
      'ui.route',
      'login'
    ])

    .config(function myAppConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
    })

    .run(function run() {
    })

    .controller('AppCtrl', function AppCtrl($scope, $location, $state, login) {
      $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
          $scope.pageTitle = toState.data.pageTitle;
        }
        //var isAuth = login.isAuthenticated();
        //if (toState.name == 'private' || !login.isAuthenticated()) {
          //$state.go('login');
        //}
     });
    })

;

