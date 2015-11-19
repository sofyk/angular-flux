function authorListController($scope, $attrs) {
  var vm = this;
  
  $scope.$watch($attrs.authors, function(authors) {
    vm.authors = authors;
  });
}

exampleApp.controller('authorListController', ['$scope', '$attrs', authorListController]);