/* globals _ */

var CHANGE_EVENT = 'change';
var AuthorStore = {};

// providining initial data here just as an example
// in real app you'll get it from API call event.
var _authors = [
  { id: 'cory-house', firstName: 'Cory', lastName: 'House' },	
  { id: 'scott-allen', firstName: 'Scott', lastName: 'Allen' },	
  { id: 'dan-wahlin', firstName: 'Dan', lastName: 'Wahlin' }
];

function AuthorStoreSrv(AppDispatcher, ActionTypes) {
  AuthorStore = angular.extend({}, EventEmitter2.prototype, {
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
  
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
  
    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },
  
    getAllAuthors: function() {
      return _authors;
    },
  
    getAuthorById: function(id) {
      return _.find(_authors, {id: id});
    }
  });
  
  AppDispatcher.register(function(action) {
    switch(action.actionType) {
      case ActionTypes.CREATE_AUTHOR:
        _authors.push(action.author);
        AuthorStore.emitChange();
        break;
      case ActionTypes.UPDATE_AUTHOR:
        var existingAuthor = _.find(_authors, {id: action.author.id});
        var existingAuthorIndex = _.indexOf(_authors, existingAuthor); 
        _authors.splice(existingAuthorIndex, 1, action.author);
        AuthorStore.emitChange();
        break;	
      case ActionTypes.DELETE_AUTHOR:
        _.remove(_authors, function(author) {
          return action.id === author.id;
        });
        AuthorStore.emitChange();
        break;
      default:
        // no op
    }
  });
  
  return AuthorStore;
}

exampleApp.service('AuthorStore', ['AppDispatcher', 'ActionTypes', AuthorStoreSrv]);