(function () {
    'use strict';

    angular
        .module('app')
        .controller('orderController', orderController);

    function orderController() {
        var vm = this;

        vm.orderQuantity = 5;
        vm.orderName = 'Coca-cola';

        vm.customerOrder = {
            name: '',
            email: '',
            location: '',
            product: {
                label: '',
                id: ''
            },
            comments: ''
        };

        vm.submitOrder = function () {
            
        };
    };
})();