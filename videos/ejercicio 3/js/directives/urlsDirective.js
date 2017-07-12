(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('urls', urls);
        
    function urls() {

        return {
            scope: {},
            restrict: 'E',
            template: `<div class="urls">
            <button class="btn btn-primary" ng-click="urls.getData();">Get Urls</button>
            <pre>{{urls.responseJson | json}} </pre>
            </div>`,
            controller: 'urlsController as urls'
        }
    }

} ());