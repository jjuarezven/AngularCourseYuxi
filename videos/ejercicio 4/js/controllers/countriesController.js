(function () {
    'use strict';

    angular
        .module('app')
        .controller('countriesController', countriesController);

    function countriesController(isoService) {
        var vm = this;
        vm.txtName = '';
        vm.txtIso2 = '';
        vm.txtIso3 = '';
        
        vm.countriesList = [];
        vm.evalDefault = function (a, b) {
            if (a) {
                var comment = 'Default comment';
                if (b === 'txtName') {
                    vm.txtName = comment;
                }
                else{
                    if (b === 'txtIso2') {
                        vm.txtIso2 = comment;
                    }
                    else{
                        vm.txtIso3 = comment;
                    }
                }
            }
        }
    };
})();