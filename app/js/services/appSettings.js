(function () {
    'use strict';

    angular
        .module('appInsight', ['ngResource'])
        .constant('appSettings', {
            serverPath: 'http://localhost:4015'
        });


})();