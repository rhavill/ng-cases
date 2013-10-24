angular.module('login', [
    'login.link',
    'login.form'])
.factory('login', ['$http', function($http) {
    var service =  {
        user: null,
        isAuthenticated: function() {
            if (service.user) {
                return true;
            }
            return false;
        },
        login: function(username, password) {
            var request = $http.post('/login', {username: username, password: password});
            return request.then(function(response) {
                service.user = response.data;
            });
        }        
    };
    return service;
}]);
