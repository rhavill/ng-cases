angular.module( 'login.link', [] )
    .directive( 'loginLink', ['login', function(login) {
        return {
            templateUrl: 'login/loginLink.tpl.html',
            scope: true,
            link: function($scope, $element, $attrs, $controller) {
                $scope.isAuthenticated = login.isAuthenticated;
            }
        };
    }])
;