(function () {
    'use strict';

    angular
        .module('app')
        .controller('delayController', delayController);
        
    function delayController(delayService) {
        var vm = this;
        vm.responseJson = {};
        vm.getData = function () {
            delayService
                .getData()
                .then(function (response) {
                    vm.responseJson = response;
                })
        }
    };
})();