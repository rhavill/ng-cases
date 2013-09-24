angular.module( 'login.link', [] )
    .directive( 'loginLink', function() {
        return {
            templateUrl: 'login/loginLink.tpl.html',
            scope: true,
            link: function($scope, $element, $attrs, $controller) {
                $scope.isAuthenticated = true;
            }
        };
    })
;