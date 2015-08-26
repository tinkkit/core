'use strict';

/**
 * @ngdoc overview
 * @name tinkApp
 * @description
 * # tinkApp
 *
 * Main module of the application.
 */
 angular
 .module('tinkApp', [
   'ngAnimate',
   'ngCookies',
   'ngResource',
   'ngRoute',
   'ngMessages',
   'ngSanitize',
   'ngTouch',
   'tink.accordion',
   'tink.tinkApi',
   'tink.navigation',
   'tink.interactivetable',
   'tink.sorttable',
   'tink.modal',
   'tink.datepicker'
   ])
 .config(function ($routeProvider) { /*, $locationProvider */
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html'
  })
  .otherwise({
    redirectTo: '/'
  });

  // $locationProvider.html5Mode(true);
  // $locationProvider.hashPrefix('!');
});
