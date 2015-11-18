function authorItem($templateCache) {
  return {
    restrict: 'A',
    template: $templateCache.get('components/authors/authoritem/authorItem.tpl.html'),
    controller: 'authorItemController',
    controllerAs : 'authorItemCtrl',
    transclude: true,
    replace: true
  };
}

exampleApp.directive('authorItem', ['$templateCache', authorItem]);