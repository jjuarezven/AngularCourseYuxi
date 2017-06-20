(function () {
    'use strict';

    angular
        .module('app')
        .controller('heroesController', heroesController);

    function heroesController() {
        var vm = this;
        vm.heroes = [{ name: 'Spiderman', realName: 'Peter Parker', bounty: '700000', counter: 0 },
        { name: 'Superman', realName: 'Clark Kent', bounty: '300000', counter: 0 },
        { name: 'Batman', realName: 'Bruce Wayne', bounty: '500000', counter: 0 }
        ]

        vm.showFullList = true;

        vm.increaseCounter = function (name) {
            (vm.heroes.filter(function (obj) {
                return obj.name === name;
            })[0]).counter++;
        };
    }
})();