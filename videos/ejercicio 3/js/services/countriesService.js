(function () {
    'use strict';

    angular
        .module('app')
        .factory('countriesService', countriesService);

    function countriesService($http) {
        var API = 'https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json';
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