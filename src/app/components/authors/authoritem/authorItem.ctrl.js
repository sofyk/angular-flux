function authorItemController($scope, $attrs) {
  this.author = $scope.$eval($attrs.author);
}

exampleApp.controller('authorItemController', ['$scope', '$attrs', authorItemController]);