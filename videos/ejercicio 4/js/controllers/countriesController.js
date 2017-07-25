(function () {
    'use strict';

    angular
        .module('app')
        .controller('countriesController', countriesController);

    function countriesController(isoService) {
        var vm = this;
        
        vm.countriesList = [];
        /*vm.getData = function () {
            isoService
                .getData()
                .then(function (response) {
                    vm.countriesList = response;
                })
        }*/
    };
})();