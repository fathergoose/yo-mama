'use strict';

/**
 * @ngdoc function
 * @name yoMamaApp.controller:PlayerCtrl
 * @description
 * # PlayerCtrl
 * Controller of the yoMamaApp
 */
angular.module('yoMamaApp')
  .controller('PlayerCtrl',function ($scope, ngAudio, playlist) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.test = "I understand something";
    $scope.audio = ngAudio.load(playlist.nowPlaying());
    $scope.playlist = playlist;
  });
