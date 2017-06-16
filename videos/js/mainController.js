(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    function mainController() {
        var vm = this;
        vm.name = "Jose";
    }
})();

/*(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    function mainController($scope) {
        var vm = this;
        $scope.name = "Jose";
    }
})();*/

/*(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', ['$scope', mainController]);

    // minification, $scope injected on the mainCOntroller function with the name 'a'
    function mainController(a) {
        var vm = this;
        a.name = "Jose";
    }
})();*/

