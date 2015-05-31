(function () {
    'use strict';

    angular
        .module('appInsight')
        .factory('loginService', loginService);


        loginService.$inject = ['$resource', 'appSettings'];

        /* @ngInject */
        function loginService($resource, appSettings) {

            var service = {
                login: loginResource
            };

            return service;

            ////////////////
            function loginResource() {
                return $resource(appSettings.serverPath + '/token', null,
                    {
                        loginUser: {
                            method: 'POST',
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                            transformRequest: function (data, headersGetter) {
                                var str = [];
                                for (var d in data)
                                    str.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
                                return str.join('&');
                            }
                        }
                    })
            }


        }



})();