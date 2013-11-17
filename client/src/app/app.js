angular.module('ngBoilerplate', [
      'templates-app',
      'templates-common',
      'ngBoilerplate.home',
      'ngBoilerplate.cases',
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
        //console.log('new AppCtrl state:'+toState.name);
        if (angular.isDefined(toState.data.pageTitle)) {
          $scope.pageTitle = toState.data.pageTitle;
        }
        $scope.isAuthenticated = login.isAuthenticated();
        if (toState.name == 'cases' && !$scope.isAuthenticated) {
          $state.go('login');
        }
     });

    })

;

