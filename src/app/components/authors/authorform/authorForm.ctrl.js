function authorFormController($scope, $attrs, AuthorActions) {
  this.author = {
    firstName: '',
    lastName: ''
  };
  
  this.addAuthor = function addAuthor() {
    AuthorActions.createAuthor(this.author);
  };
}

exampleApp.controller('authorFormController', [
  '$scope',
  '$attrs',
  'AuthorActions',
  authorFormController
]);