(function () {
    'use strict';

    angular
        .module('app')
        .directive('countries', countries);

    function countries() {

        return {
            scope: {},
            /*bindToController: {
                count: '=',
                title: '@name'
            },*/
            restrict: 'E',
            template: `<div class="countries">
            <button class="btn btn-primary" ng-click="countries.getData();">Get countries</button>
            <ul>
                <li ng-repeat="country in countries.countriesList | orderBy: country">
                    <label>{{country}}</label>
                </li>
            </ul>
            </div>`,
            controller: 'countriesController as countries'
        }
    }

}());