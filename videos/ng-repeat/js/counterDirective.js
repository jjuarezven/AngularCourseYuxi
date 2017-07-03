(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('counter', counter);
        
    function counter() {

        return {
            scope: {},
            bindToController: {
                count: '=',
                title: '@name'
            },
            restrict: 'E',
            template: `<div class="counter">
            {{counter.title}}
            <input type="text" ng-model="counter.count">
            <button ng-click="counter.increment();">+</button>
            <button ng-click="counter.decrement();">-</button>
            </div>`,
            controller: 'counterController as counter'
        }
    }

} ());