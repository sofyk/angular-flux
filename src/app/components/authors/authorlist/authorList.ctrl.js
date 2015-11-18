function authorListController($scope, $attrs) {
  this.authors = $scope.$eval($attrs.authors);
}

exampleApp.controller('authorListController', ['$scope', '$attrs', authorListController]);