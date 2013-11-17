angular.module('ngCases.cases', [
      'ui.router',
      'placeholders',
      'ui.bootstrap'
    ])

    .config(function config($stateProvider) {
      $stateProvider.state('cases', {
        url: '/cases',
        views: {
          "main": {
            controller: 'CasesCtrl',
            templateUrl: 'cases/cases.tpl.html'
          }
        },
        data: { pageTitle: 'Cases' }
      });
    })

    .controller('CasesCtrl', function CasesCtrl($scope) {
      // This is simple a demo for UI Boostrap.
      $scope.dropdownDemoItems = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
      ];
    })

;
