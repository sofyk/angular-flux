function authorListController($scope, $attrs) {
  var vm = this;
  
  vm.authors = $scope.$eval($attrs.authors);
}

exampleApp.controller('authorListController', ['$scope', '$attrs', authorListController]);