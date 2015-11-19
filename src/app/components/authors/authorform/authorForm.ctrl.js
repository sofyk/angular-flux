function authorFormController($scope, $attrs, AuthorActions) {
  var vm = this;
  
  vm.author = {
    firstName: '',
    lastName: ''
  };
  
  vm.addAuthor = function addAuthor() {
    AuthorActions.createAuthor(vm.author);
  };
}

exampleApp.controller('authorFormController', [
  '$scope',
  '$attrs',
  'AuthorActions',
  authorFormController
]);