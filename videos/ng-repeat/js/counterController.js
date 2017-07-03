(function () {
    'use strict';

    angular
        .module('app')
        .controller('counterController', counterController);
        
    function counterController(/*$scope*/) {
        var vm = this;
        //vm.count = $scope.count;

        vm.increment = function () {
            vm.count++;            
        }

        vm.decrement = function () {
            vm.count--;            
        }
    };
})();