(function () {
    'use strict';

    angular
        .module('app')
        /*.service('userService', userService);*/
        .factory('userService', userService);


    // toda la logica reside en el controlador, se deben usar servicios y factorias
    function userService($http) {
        var API = 'http://jsonplaceholder.typicode.com/users/';
        function getUser (userId) {
            return $http
                .get(API + userId)
                .then(function (response) {
                    return response.data;            
                }, function (error) {
                    console.log(error);
                })
        }

        //factory
        return{
            getUser: getUser
        }
    };
})();