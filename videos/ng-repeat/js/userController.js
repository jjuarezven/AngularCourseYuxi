(function () {
    'use strict';

    angular
        .module('app')
        .controller('userController', userController);


    // toda la logica reside en el controlador, se deben usar servicios y factorias
    function userController(userService) {
        var vm = this;

        vm.userId = '';
        vm.chosenUser = {};
        vm.getUser = function () {
            if (!vm.userId) {
                return;
            }
            userService
                .getUser(vm.userId)
                .then(function (response) {
                    vm.chosenUser = response;
                })
        }
    };
})();