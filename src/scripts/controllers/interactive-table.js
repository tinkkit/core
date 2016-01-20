'use strict';

angular.module('tinkApp')
  .controller('interactiveTableController', ['$scope', function (scope) {

  // --- Define Controller Variables. ----------------- //

  // --- Define Scope Variables. ---------------------- //

  var ctrl = this;

  ctrl.nums = 2;
  ctrl.totalitems = 20;
  ctrl.numpp = 5;
  scope.data = {};

  scope.load=function(){
    console.log('clicked');
  };

  scope.changed = function(type,value,fn){
    fn();
  };

  scope.boxChecked = function($data,c){
    console.log($data,c);
  };

  ctrl.loading = false;

  scope.data.content = [
    {
      firstname: 'Jasper',
      lastname: 'Van Proeyen',
      username: '@trianglejuice'
    },
    {
      firstname: 'Tom',
      lastname: 'Wuyts',
      username: '@pxlpanic'
    }
  ];

  scope.actions = [
    {
      name: 'add',
      callback: function(items) {
        angular.forEach(items, function(val) {
          // scope.data.content.splice(scope.data.content.indexOf(val),1);
          scope.data.content.push({
            firstname: 'New first',
            lastname: 'New last',
            username: '@newuser'
          });
          console.log('Added ' + val.firstname);
        });
      },
      order:0,
      master:true,
      icon:'fa-plus'
    },
    {
      name: 'edit',
      callback: function(items) {
        angular.forEach(items, function(val) {
          // scope.data.content.splice(scope.data.content.indexOf(val),1);
          console.log('Did something with ' + val.firstname);
        });
      },
      order:1,
      master:true,
      icon:'fa-edit'
    },
    {
      name: 'remove',
      callback: function(items) {
        angular.forEach(items, function(val) {
          scope.data.content.splice(scope.data.content.indexOf(val),1);
        });
      },
      order:2,
      master:true,
      icon:'fa-trash-o',
      single:true
    },
    {
      name: 'search',
      callback: function(items) {
        angular.forEach(items, function(val) {
          // scope.data.content.splice(scope.data.content.indexOf(val),1);
          console.log('Searched ' + val.firstname);
        });
      },
      order:3,
      master:true,
      icon:'fa-search'
    },
    {
      name: 'open',
      callback: function(items) {
        angular.forEach(items, function(val) {
          // scope.data.content.splice(scope.data.content.indexOf(val),1);
          console.log('Opened ' + val.firstname);
        });
      },
      order:4,
      master:false,
      icon:'fa-folder-open'
    },
    {
      name: 'do something else',
      callback: function(items) {
        angular.forEach(items, function(val) {
          // scope.data.content.splice(scope.data.content.indexOf(val),1);
          console.log('Did something else with ' + val.firstname);
        });
      },
      order:5,
      master:false,
      icon:'fa-magic'
    }
  ];
  scope.headers = [{
    name:'firstname',
    alias:'voornaam',
    sort:'firstname',
    checked:true,
    disabled:true
  },{
    name:'lastname',
    disabled:true,
    alias:'lastname',
    sort:'lastname',
    checked:true
  },{
    name:'username',
    alias:'username',
    sort:'',
    checked:true
  }];

  // --- Bind To Scope Events. ------------------------ //

  // --- Define Controller Methods. ------------------- //
  // function initialize() {}

  // --- Define Scope Methods. ------------------------ //

  // --- Initialize. ---------------------------------- //
  // initialize();

}]);
