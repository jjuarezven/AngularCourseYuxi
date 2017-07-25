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
                <ul class="todo__list">
                    <li ng-repeat="item in countries.data">
                        <label class="toggle" >{{item.name}}</label> <input type="text" placeholder="Add comment"></br>
                        <label class="toggle" >{{item.alpha2_code}}</label> <input type="text" placeholder="Add comment"> </br>
                        <label class="toggle" >{{item.alpha3_code}}</label> <input type="text" placeholder="Add comment"> </br>
                    </li>
                </ul>
            </div>`         
        }
    }

}());