(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('stretch', stretch);


    /** @ngInject */
    function stretch() {

        function link($scope, $element, $attrs){
            var element = $element[0];
            element.addEventListener('focus', function () {
                this.style.width = '220px';
            });

            element.addEventListener('blur', function () {
                this.style.width = '120px';
            });
        }

        return {
            link: link,
            restrict: 'A'
        }
    }

} ());