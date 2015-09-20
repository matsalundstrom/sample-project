(function () {
  'use strict';

  angular
    .module('app')
    .controller('AppController', AppController);

  function AppController() {
    var self = this;

    self.title = 'Sample Project';
  }
})();
