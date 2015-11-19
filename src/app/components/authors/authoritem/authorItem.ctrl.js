function authorItemController($scope, $attrs, AuthorActions) {
  var vm = this;
  
  vm.author = $scope.$eval($attrs.author);
  
  vm.deleteAuthor = function deleteAuthor(id) {
		AuthorActions.deleteAuthor(id);
		console.log('Author Deleted');
  };
}

exampleApp.controller('authorItemController', [
  '$scope',
  '$attrs',
  'AuthorActions',
  authorItemController
]);