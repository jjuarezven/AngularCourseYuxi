(function () {
    'use strict';

    angular
        .module('app')
        .controller('childController', childController);

    function childController() {
        var vm = this;
        vm.user = { name: "George", lastName: "Washington", img: "images/washington.jpg" };
    }
})();