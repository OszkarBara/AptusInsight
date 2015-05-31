(function () {
    'use strict';

    angular
        .module('appInsight')
        .controller('loginCheckController', loginCheckController);

    loginCheckController.$inject = [];

    /* @ngInject */
    function loginCheckController() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'loginCheckController';


        activate();

        ////////////////

        function activate() {
        }


    }

})();