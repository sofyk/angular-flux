function authorList($templateCache) {
  return {
    restrict: 'E',
    template: $templateCache.get('components/authors/authorlist/authorList.tpl.html'),
    controller: 'authorListController',
    controllerAs : 'authorListCtrl',
    transclude: true,
    replace: true
  };
}

exampleApp.directive('authorList', ['$templateCache', authorList]);