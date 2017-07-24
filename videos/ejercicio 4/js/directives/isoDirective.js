(function () {
    'use strict';

    angular
        .module('app')
        .directive('iso', iso);

    function iso() {

        return {
            scope: {},
            restrict: 'E',
            template: `<div>
            <input type="text" placeholder="ISO 2 code" ng-model="iso.isoCode2">
            <input type="text" placeholder="ISO 3 code" ng-model="iso.isoCode3">
            <input type="text" placeholder="selected" ng-model="iso.data.name">
            <button class="btn btn-primary" ng-click="iso.getData();">Search countries</button> 
                          
            </div>`,
            controller: 'isoController as iso'
        }
    }

}());