(function () {
    'use strict';

    angular
        .module('app')
        .controller('parentController', parentController);

    function parentController() {
        var vm = this;
        vm.user = { name: "Abraham", lastName: "Lincoln", img: "images/lincoln.jpg" };
        
    }
})();