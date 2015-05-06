'use strict';

angular.module('tinkApp')
  .controller('interactiveTableController', ['$scope', function (scope) {

  // --- Define Controller Variables. ----------------- //

  // --- Define Scope Variables. ---------------------- //

  scope.loading = 0;

  // Override default items per page
  scope.pages = '5, 10, 25';

  // Data model
  scope.data = [
    {
      firstname: 'Jasper',
      lastname: 'Van Proeyen',
      username: '@trianglejuice'
    },
    {
      firstname: 'Tom',
      lastname: 'Wuyts',
      username: '@pxlpanic'
    },
    {
      firstname: 'Kevin',
      lastname: 'De Mulder',
      username: '@clopin'
    },
    {
      firstname: 'Vincent',
      lastname: 'Bouillart',
      username: '@BouillartV'
    },
    {
      firstname: 'Tom',
      lastname: 'Hermans',
      username: '@tomhermans'
    },
    {
      firstname: 'Lieven',
      lastname: 'Van Gestel',
      username: '@lievenvg'
    },
    {
      firstname: 'Jasper',
      lastname: 'Van Proeyen',
      username: '@trianglejuice'
    },
    {
      firstname: 'Tom',
      lastname: 'Wuyts',
      username: '@pxlpanic'
    },
    {
      firstname: 'Kevin',
      lastname: 'De Mulder',
      username: '@clopin'
    },
    {
      firstname: 'Vincent',
      lastname: 'Bouillart',
      username: '@BouillartV'
    },
    {
      firstname: 'Tom',
      lastname: 'Hermans',
      username: '@tomhermans'
    },
    {
      firstname: 'Lieven',
      lastname: 'Van Gestel',
      username: '@lievenvg'
    }
  ];

  // The headers you want to show and whether they are already visible in the table
  scope.headers = [
    {
      field: 'firstname',
      alias: 'Voornaam',
      checked: true
    },
    {
      field: 'lastname',
      alias: 'Achternaam',
      checked: false
    },
    {
      field: 'username',
      alias: 'Gebruikersnaam',
      checked: true
    }
  ];

  // Some actions that become available when you check one or multiple rows
  scope.actions = [
    {
      name: 'remove',
      callback: function(items) {
        angular.forEach(items, function(val) {
          scope.data.splice(scope.data.indexOf(val),1);
        });
      }
    }
  ];

  // --- Bind To Scope Events. ------------------------ //

  // --- Define Controller Methods. ------------------- //
  // function initialize() {}

  // --- Define Scope Methods. ------------------------ //

  // --- Initialize. ---------------------------------- //
  // initialize();

}]);
