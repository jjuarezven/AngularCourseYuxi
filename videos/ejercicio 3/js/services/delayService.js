(function () {
    'use strict';

    angular
        .module('app')
        .factory('delayService', delayService);

    function delayService($http) {
        var API = 'https://httpbin.org/delay/2';
        function getData () {
            return $http
                .get(API)
                .then(function (response) {
                    return response;            
                }, function (error) {
                    console.log(error);
                })
        }

        //factory
        return{
            getData: getData
        }
    };
})();