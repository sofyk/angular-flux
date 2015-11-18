function AuthorActionsSrv(AppDispatcher, ActionTypes, AuthorApi) {
  var AuthorActions = {
    createAuthor: function(author) {
      var newAuthor = AuthorApi.saveAuthor(author);
  
      //Hey AppDispatcher, go tell all the stores that an author was just created.
      AppDispatcher.dispatch({
        actionType: ActionTypes.CREATE_AUTHOR,
        author: newAuthor
      });
    },
  
    updateAuthor: function(author) {
      var updatedAuthor = AuthorApi.saveAuthor(author);
  
      AppDispatcher.dispatch({
        actionType: ActionTypes.UPDATE_AUTHOR,
        author: updatedAuthor
      });
    },
  
    deleteAuthor: function(id) {
      AuthorApi.deleteAuthor(id);
  
      AppDispatcher.dispatch({
        actionType: ActionTypes.DELETE_AUTHOR,
        id: id
      });
    }
  };
  
  return AuthorActions;
}

exampleApp.service('AuthorActions', [
  'AppDispatcher',
  'ActionTypes',
  'AuthorApi',
  AuthorActionsSrv
]);