(function () {
    'use strict';

    angular
        .module('app')
        .controller('urlsController', urlsController);
        
    function urlsController(urlsService) {
        var vm = this;
        vm.responseJson = {};
        vm.getData = function () {
            urlsService
                .getData()
                .then(function (response) {
                    vm.responseJson = response;
                })
        }
    };
})();