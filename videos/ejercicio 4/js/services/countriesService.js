(function () {
    'use strict';

    angular
        .module('app')
        .factory('countriesService', countriesService);

    function countriesService($http) {
        var API = 'http://services.groupkt.com/country/get/all';
        function getData () {
            return $http
                .get(API)
                .then(function (response) {
                    return response.data.RestResponse.result;            
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