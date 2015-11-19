//This would be performed on the server in a real app. Just stubbing in.
var authors = [
  { id: 'douglas-adams', firstName: 'Douglas', lastName: 'Adams' },	
  { id: 'john-tolkien', firstName: 'John', lastName: 'Tolkien' },	
  { id: 'francis-fitzgerald', firstName: 'Francis', lastName: 'Fitzgerald' }
];

var _generateId = function(author) {
	return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var AuthorApi = {
	getAllAuthors: function() {
		return _clone(authors); 
	},

	getAuthorById: function(id) {
		var author = _.find(authors, {id: id});
		return _clone(author);
	},
	
	saveAuthor: function(author) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');
    
    var _author = _clone(author);
		
		if (_author.id) {
			var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: _author.id})); 
			authors.splice(existingAuthorIndex, 1, _author);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			_author.id = _generateId(_author);
			authors.push(_author);
		}

		return _author;
	},

	deleteAuthor: function(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(authors, { id: id});
	}
};

exampleApp.service('AuthorApi', function () { return AuthorApi; });