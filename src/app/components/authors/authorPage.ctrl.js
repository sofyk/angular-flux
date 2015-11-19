function authorPageController(AuthorStore) {
  var vm = this;
  
  vm.authors = AuthorStore.getAllAuthors();
  
  vm._onChange = function _onChange() {
    vm.authors = AuthorStore.getAllAuthors();
  };
  
  AuthorStore.addChangeListener(vm._onChange);
}

exampleApp.controller('authorPageController', [
  'AuthorStore',
  authorPageController
]);