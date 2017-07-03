(function () {
    'use strict';

    angular
        .module('app')
        .controller('orderFormController', orderFormController);


    // toda la logica reside en el controlador, se deben usar servicios y factorias
    function orderFormController() {
        var vm = this;

        vm.products = [{
            label: 'Product 1',
            id : 1
        },
        {
            label: 'Product 2',
            id : 2
        },
        {
            label: 'Product 3',
            id : 3
        }];

        vm.onSubmit = function () {
            vm.submit();
        }
    };
})();