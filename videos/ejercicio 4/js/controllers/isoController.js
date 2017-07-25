(function () {
    'use strict';

    angular
        .module('app')
        .controller('isoController', isoController);

    function isoController(isoService) {
        var vm = this;
        vm.data = [];
        vm.isoCode2 = '';
        vm.isoCode3 = '';

        vm.getData = function () {
            var isoCode = '';

            if (vm.isoCode2 !== '' && vm.isoCode3 !== '') {
                return alert('Error, please indicate just one code');
            }
            else {
                if (vm.isoCode2 === '' && vm.isoCode3 === '') {
                    isoService
                        .getDataCountry(isoCode)
                        .then(function (response) {
                            vm.data = response;
                        });
                }
                else {
                    vm.isoCode2 !== '' ? isoCode = vm.isoCode2 : isoCode = vm.isoCode3;
                    isoService
                        .getDataIso(isoCode)
                        .then(function (response) {
                            vm.data = [{
                                name: response.name,
                                alpha2_code: response.alpha2_code,
                                alpha3_code: response.alpha3_code
                            }];
                        });
                }
            }
        }
    };
})();