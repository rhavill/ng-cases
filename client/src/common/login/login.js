angular.module( 'login', [] )

    .directive( 'login', function() {
        return {
            template: '<a href="#/login"><i class="icon-user"></i>&nbsp;Login</a>'
        };
    })

;
