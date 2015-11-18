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
  AuthorStore = angular.extend({}, {
    // TODO: Event Emitter should be separate class that store
    // is extended from.
    // START: Event Emitter
    listeners: [],
  
    emit: function emit(event) {
      this.listeners.forEach( function emitToEach(listener) {
        listener(event);
      });
    },
  
    addListener: function addListener(listener) {
      this.listeners.push(listener);
      return this.listeners.length - 1;
    },
    // END: Event Emitter
    
    addChangeListener: function(callback) {
      this.addListener(callback);
    },
  
    // TODO: implement remove listener
    // removeChangeListener: function(callback) {
    //   this.removeListener(CHANGE_EVENT, callback);
    // },
  
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