(function () {
    'use strict';

    angular
        .module('app')
        .factory('isoService', isoService);

    function isoService($http) {
        var API = '';
        var API2 = 'http://services.groupkt.com/country/get/iso2code/';
        var API3 = 'http://services.groupkt.com/country/get/iso3code/';
        function getData (isoCode) {
            isoCode.length === 2 ? API = API2 : API = API3;
            return $http
                .get(API + isoCode)
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