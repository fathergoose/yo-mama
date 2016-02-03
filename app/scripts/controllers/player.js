'use strict';

/**
 * @ngdoc function
 * @name yoMamaApp.controller:PlayerCtrl
 * @description
 * # PlayerCtrl
 * Controller of the yoMamaApp
 */
angular.module('yoMamaApp')
  .controller('PlayerCtrl',[ '$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.test = "I understand something";
  }]);
