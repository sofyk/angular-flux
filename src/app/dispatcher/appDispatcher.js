var Dispatcher = Flux.Dispatcher;
var appDispatcher = new Dispatcher();

exampleApp.service('AppDispatcher', function () { return appDispatcher; });