'use strict';

/**
 * @ngdoc function
 * @name yoMamaApp.controller:PlayerCtrl
 * @description
 * # PlayerCtrl
 * Controller of the yoMamaApp
 */
angular.module('yoMamaApp')
  .controller('PlayerCtrl',function ($scope, ngAudio) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.test = "I understand something";
    $scope.audio = ngAudio.load('/music/every_other_freckle.mp3');
  });
