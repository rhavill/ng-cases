describe('login link', function() {
    var $rootScope, scope, link, login;
    beforeEach(module('login/loginLink.tpl.html', 'login'));
/*
    beforeEach(inject(function(_$rootScope_, $compile, _login_) {
        $rootScope = _$rootScope_;
        login = _login_;
        link = $compile('<login-link></login-link>')($rootScope);
        $rootScope.$digest();
        scope = link.scope();
        angular.element(document.body).append(link);
    }));
*/
    beforeEach(inject(function(_$rootScope_, $compile, _login_) {
        $rootScope = _$rootScope_;
        login = _login_;
        //link = $compile('<login-link></login-link>')($rootScope);
        link = $compile('<li login-link></li>')($rootScope);
        $rootScope.$digest();
        scope = link.scope();
        angular.element(document.body).append(link);
        console.log(link);
        console.log(login.loggedIn);
        console.log(scope.isAuthenticated);
    }));
    it( 'should have a dummy test', inject( function() {
        expect( true ).toBeTruthy();
    }));

    afterEach(function() {
        link.remove();
    });

    /*
     it('should attach stuff to the scope', inject(function ($compile, $rootScope) {
        expect(scope.currentUser).toBeDefined();
        expect(scope.isAuthenticated).toBe(login.isAuthenticated);
        expect(scope.login).toBe(login.showLogin);
        expect(scope.logout).toBe(login.logout);
    }));
*/
    it('should attach stuff to the scope', inject(function ($compile, $rootScope) {
        //expect(scope.isAuthenticated).toBe(login.isAuthenticated);
    }));
    /*
    it('should display a link with the current user name, when authenticated', function () {
        login.currentUser = { firstName: 'Jo', lastName: 'Bloggs'};
        $rootScope.$digest();
        expect(link.find('a').text()).toBe('Jo Bloggs');
    });

    it('should not display a link with the current user name, when not authenticated', function () {
        login.currentUser = null;
        $rootScope.$digest();
        expect(link.find('a').is(':visible')).toBe(false);
    });

    it('should display login when user is not authenticated', function() {
        expect(link.find('button:visible').text()).toBe('Log in');
        expect(link.find('button:hidden').text()).toBe('Log out');
    });

    it('should display logout when user is authenticated', function() {
        login.currentUser = {};
        $rootScope.$digest();
        expect(link.find('button:visible').text()).toBe('Log out');
        expect(link.find('button:hidden').text()).toBe('Log in');
    });

    it('should call logout when the logout button is clicked', function () {
        spyOn(scope, 'logout');
        link.find('button.logout').click();
        expect(scope.logout).toHaveBeenCalled();
    });

    it('should call login when the login button is clicked', function () {
        spyOn(scope, 'login');
        link.find('button.login').click();
        expect(scope.login).toHaveBeenCalled();
    });
*/
    it('should display login when user is not authenticated', function() {
        expect(link.find('a').text()).toBe(String.fromCharCode(0xA0)+'Login');
        //expect(link.find('a:hidden').text()).toBe('<i class="icon-user"></i>&nbsp;Logout');
        //expect(link.find('li').text()).toBe('Log in');
    });
});