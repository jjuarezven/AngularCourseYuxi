function clearText() {
  return {
    restrict: 'A',
    scope: false,
    link: function ($scope, element, attrs, ngModel) {
      $scope.$watch(attrs.ngModel, function (newCountry, oldCountry) {
        setTimeout(function () {
          element.bind("focus", function (e) {
            if (element.val() !== "") {

              element.val("");
              attrs.ngModel = "PP";
            }
          });
        }, 0);
      })
    }
  };
}

angular
  .module('app')
  .directive('clearText', clearText);
