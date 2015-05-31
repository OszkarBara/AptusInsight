/**
 * Created by Oszkar on 5/24/2015.
 */

(function () {
    'use strict';
    angular
        .module('appInsight')
        .directive('loginDirective', loginDirective);

    function loginDirective() {
        var directive = {
            restrict: 'EA',
            templateUrl : 'app/js/login/login.template.html',
            controller : 'loginController',
            controllerAs : 'login'
        };

        return directive;
    }
})();
