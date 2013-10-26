describe('login link', function () {
  var $rootScope, scope, link, login;
  beforeEach(module('login/loginLink.tpl.html', 'login'));

  beforeEach(inject(function (_$rootScope_, $compile, _login_) {
    $rootScope = _$rootScope_;
    login = _login_;
    link = $compile('<li login-link></li>')($rootScope);
    $rootScope.$digest();
    scope = link.scope();
    angular.element(document.body).append(link);
  }));
  it('should have a dummy test', inject(function () {
    expect(true).toBeTruthy();
  }));

  afterEach(function () {
    link.remove();
  });

  /*
   it('should attach stuff to the scope', inject(function ($compile, $rootScope) {
   expect(scope.currentUser).toBeDefined();
   expect(scope.isAuthenticated).toBe(login.isAuthenticated);
   expect(scope.logout).toBe(login.logout);
   }));
   */
  it('should attach stuff to the scope', inject(function ($compile, $rootScope) {
    expect(scope.user).toBeDefined();
    expect(scope.isAuthenticated).toBe(login.isAuthenticated);
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
  it('should display login when user is not authenticated', function () {
    expect(link.find('a:visible').text()).toBe(String.fromCharCode(0xA0) + 'Login');
    expect(link.find('a:hidden').text()).toBe(String.fromCharCode(0xA0) + 'Logout');
  });

  it('should display logout when user is authenticated', function () {
    login.user = {};
    $rootScope.$digest();
    expect(link.find('a:visible').text()).toBe(String.fromCharCode(0xA0) + 'Logout');
    expect(link.find('a:hidden').text()).toBe(String.fromCharCode(0xA0) + 'Login');
  });

});