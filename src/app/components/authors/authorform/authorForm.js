function authorForm($templateCache) {
  return {
    restrict: 'A',
    template: $templateCache.get('components/authors/authorform/authorForm.tpl.html'),
    controller: 'authorFormController',
    controllerAs : 'authorFormCtrl',
    transclude: true,
    replace: true
  };
}

exampleApp.directive('authorForm', ['$templateCache', authorForm]);