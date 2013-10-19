angular.module( 'login.form', [] )
    .directive( 'loginForm', function() {
        return {
            templateUrl: 'login/loginForm.tpl.html'
        };
    })
// The LoginFormController provides the behaviour behind a reusable form to allow users to authenticate.
// This controller and its template (login/form.tpl.html) are used in a modal dialog box by the security service.
    .controller('LoginFormController', ['$scope', 'login', function($scope, login) {
        // The model for this form
        $scope.user = {};
        $scope.test = 'hello';
        // Any error message from failing to login
        $scope.authError = null;

        // Attempt to authenticate the user specified in the form's model
        $scope.login = function() {

            // Try to login
            login.login($scope.user.email, $scope.user.password).then(function(loggedIn) {
                if ( !loggedIn ) {
                    // If we get here then the login failed due to bad credentials
                    $scope.authError = 'Bad username or password.';
                }
            }, function(x) {
                // If we get here then there was a problem with the login request to the server
                $scope.authError = 'Error logging in. Problem contacting server.';
            });
        };

    }])
/**
 * And of course we define a controller for our route.
 */
    .controller('LoginFormCtrl', ['$scope', '$location', '$route',
        function ($scope, $location, $route) {
            $scope.location = $location;
            $scope.loginVar = 'this was a variable.';
            $scope.loggedIn = false;
        }])

;