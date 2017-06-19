(function () {
    'use strict';

    angular
        .module('app')
        .controller('heroesController', heroesController);

    function heroesController() {
        var vm = this;
        vm.heroes = [{ name: 'Spiderman', realName: 'Peter Parker', bounty: '700000', counter: 0 },
        { name: 'Superman', realName: 'Clark Kent', bounty: '300000', counter: 0 },
        { name: 'Batman', realName: 'Bruce Wayne', bounty: '500000', counter: 0 },
        ]

        vm.showFullList = true;
        
        /*vm.radioChange = function (showList) {
            vm.showFullList = showList;
        };*/

        vm.increaseCounter = function (name) {
            (vm.heroes.filter(function (obj) {
                return obj.name === name;
            })[0]).counter++;
        };

        vm.likesList = [];
        vm.addToLikes = function (movie) {
            vm.likesList.push(movie);
        };

        vm.unlike = function (index) {
            vm.likesList.splice(index, 1);
        };

        vm.newTitle = '';
        vm.newRelease = '';

        vm.addMovie = function () {
            vm.heroes.unshift({ title: vm.newTitle, year: vm.newRelease });
        };

        vm.onFocus = function () {
            console.log('Focus!');
        };

        vm.onBlur = function () {
            console.log('Blur!');
        };

        vm.onChange = function () {
            console.log('Change! ' + vm.newTitle);
        };
    }
})();