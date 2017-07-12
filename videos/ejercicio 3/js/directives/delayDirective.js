(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('delay', delay);
        
    function delay() {

        return {
            scope: {},
            restrict: 'E',
            template: `<div class="delay">
            <button class="btn btn-primary" ng-click="delay.getData();">Get Delay</button>
            <pre>{{delay.responseJson | json}} </pre>
            </div>`,
            controller: 'delayController as delay'
        }
    }

} ());