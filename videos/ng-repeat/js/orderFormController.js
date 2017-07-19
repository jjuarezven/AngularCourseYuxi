(function () {
    'use strict';

    angular
        .module('app')
        .controller('orderFormController', orderFormController);

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
            // ejecuta la funcion indicada en la directiva, en este caso, del orderController
            vm.submit();
        }
    };
})();