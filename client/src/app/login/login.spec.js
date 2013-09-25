/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'login section', function() {
  beforeEach( module( 'ngBoilerplate.login' ) );
    var $scope;
    var $controller;

    describe('controllers', function() {
        beforeEach(inject(function ($injector) {
            $scope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
        }));

        describe('LoginCtrl', function () {
            it('should be unauthenticated by default', function () {
                var params = {
                    $scope: $scope
                    //crudListMethods: jasmine.createSpy('crudListMethods'),
                    //users: {}
                };
                var ctrl = $controller('LoginCtrl', params);
                expect($scope.loggedIn).toBe(false);
                //expect($scope.users).toBe(params.users);
                //expect(params.crudListMethods).toHaveBeenCalled();
            });
        });

    });
});


