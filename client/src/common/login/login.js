angular.module('login', [
    'login.link',
    'login.form',
        'login.formcontroller'])
.factory('login', ['$http', function($http) {
    var service =  {
        user: null,
        isAuthenticated: function() {
            if (service.user) {
                return true;
            }
            return false;
        }
    };
    return service;
}]);
