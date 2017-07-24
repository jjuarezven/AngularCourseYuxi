(function () {
    'use strict';

    angular
        .module('app')
        .directive('countries', countries);

    function countries() {

        return {
            scope: {},
            bindToController: {
                data: '='
            },
            restrict: 'E',
            controller: 'countriesController as countries',
            template: `<div class="countryInfo">
                <input name="txtcountry" type="text" ng-model="countries.data.name">
            </div>`         
        }
    }

}());