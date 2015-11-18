function authorItemController($scope, $attrs, AuthorActions) {
  this.author = $scope.$eval($attrs.author);
  
  this.deleteAuthor = function deleteAuthor(id) {
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