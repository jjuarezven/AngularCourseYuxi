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
            template: `<form name="countriesForm" novalidate><div class="countryInfo">
                <ul class="list-unstyled">
                    <li ng-repeat="item in countries.data" class="list-group">
                        
                        <span class="list-group-item">
                        <label ng-dblclick="showEdit = true;">{{item.name}}</label> <input name = "txtName"  type="text" ng-model="countries.txtName" placeholder="Add comment"  ng-if="showEdit" clear-text ng-blur="countries.evalDefault(countriesForm.txtName.$untouched, 'txtName');"> </br>
                        </span>
                        <span class="list-group-item">
                        <label class="toggle" ng-dblclick="showEdit = true;">{{item.alpha2_code}}</label> <input name = "txtIso2" ng-model="countries.txtIso2" type="text" placeholder="Add comment" ng-if="showEdit" clear-text ng-blur="countries.evalDefault(countriesForm.txtIso2.$untouched, 'txtIso2');"> </br>
                        </span>
                        <span class="list-group-item">
                        <label class="toggle" ng-dblclick="showEdit = true;">{{item.alpha3_code}}</label> <input name = "txtIso3" ng-model="countries.txtIso3" type="text" placeholder="Add comment" ng-if="showEdit" clear-text ng-blur="countries.evalDefault(countriesForm.txtIso3.$untouched, 'txtIso3');"> </br>
                        </span>
                    </li>
                </ul>
            </div></form>`         
        }
    }

}());