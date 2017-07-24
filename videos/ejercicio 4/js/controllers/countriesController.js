(function () {
    'use strict';

    angular
        .module('app')
        .controller('countriesController', countriesController);

    function countriesController(countriesService) {
        var vm = this;
        
        vm.countriesList = [];
        vm.getData = function () {
            countriesService
                .getData()
                .then(function (response) {
                    vm.countriesList = response;
                })
        }
    };
})();