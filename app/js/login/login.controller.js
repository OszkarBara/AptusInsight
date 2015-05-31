/**
 * Created by Oszkar on 5/10/2015.
 */
(function () {
    'use strict';

    angular
        .module('appInsight')
        .controller('loginController', loginController);

    loginController.$inject = ['loginService', '$log'];

    /* @ngInject */
    function loginController(loginService, $log) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'loginController';


        vm.userData = {
            grant_type: 'password',
            userName: '',
            password: ''
        };

        vm.loginClick = loginClick;


        activate();

        ////////////////

        function activate() {
        }

        function loginClick() {



            $log.debug('Login clicked.');

            loginService.login().loginUser(
                vm.userData,
                function (data) {
                    $log.info('Login successful!');
                },
                function (response) {
                    $log.warn('Login failed!');
                });
        }

    }

})();
