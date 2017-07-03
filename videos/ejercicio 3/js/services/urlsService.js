(function () {
    'use strict';

    angular
        .module('app')
        .factory('urlsService', urlsService);

    function urlsService($http) {
        var API = 'https://api.openaccessbutton.org/blacklist';
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