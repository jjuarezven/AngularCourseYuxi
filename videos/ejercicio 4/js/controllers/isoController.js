(function () {
    'use strict';

    angular
        .module('app')
        .controller('isoController', isoController);

    function isoController(isoService) {
        var vm = this;
        vm.data = {
            name: "Colombia",
            alpha2_code: "CO",
            alpha3_code: "COL"
        };
        vm.isoCode2 = '';
        vm.isoCode3 = '';
        
        vm.getData = function () {
            var isoCode = '';
            vm.isoCode2 !== '' ? isoCode = vm.isoCode2 : isoCode = vm.isoCode3;
            isoService
                .getData(isoCode)
                .then(function (response) {
                    vm.data = {
                        name: response.name,
                        alpha2_code: response.alpha2_code,
                        alpha3_code: response.alpha3_code
                    };
                })
        }
    };
})();