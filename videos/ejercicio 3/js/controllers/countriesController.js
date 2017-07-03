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
                    angular.forEach(response.data, function (value, key) {
                        if (key !== '' && value[0] !== '') {
                            this.push(key + ': ' + value[0]);
                        }
                    }, vm.countriesList);
                })
        }
    };
})();