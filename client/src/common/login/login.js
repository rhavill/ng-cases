angular.module('login', [
    'login.link',
    'login.form'])
.factory('login', ['$http', function($http) {
    return {
        loggedIn: false
    };
}]);
