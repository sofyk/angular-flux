var exampleApp = angular.module('exampleApp',
  [
    'templates-app',
    'ui.router'
  ])
  .constant('_', window._)
  .run(function ($rootScope) {
     $rootScope._ = window._;
  });

// We can add router logic here 