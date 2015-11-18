function authorPage($templateCache) {
  return {
    restrict: 'E',
    template: $templateCache.get('components/authors/authorPage.tpl.html'),
    controller: 'authorPageController',
    controllerAs : 'authorPageCtrl',
    transclude: true,
    replace: true
  };
}

exampleApp.directive('authorPage', ['$templateCache', authorPage]);