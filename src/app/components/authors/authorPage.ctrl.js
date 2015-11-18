function authorPageController(AuthorStore) {
  this.authors = AuthorStore.getAllAuthors();
  
  this._onChange = function _onChange() {
    this.authors = AuthorStore.getAllAuthors();
  };
  
  AuthorStore.addChangeListener(this._onChange);
}

exampleApp.controller('authorPageController', [
  'AuthorStore',
  authorPageController
]);