'use strict';

angular.module('tinkApp')
  .controller('modalController', ['$scope', '$modal', function ($scope, $modal) {

  // --- Define Controller Variables. ----------------- //

  // --- Define Scope Variables. ---------------------- //

  $scope.openModal = function() {

    var modalInstance = $modal.open({
      templateUrl: 'templates/modal.html',
      // controller: 'ModalInstanceCtrl',
      // controllerAs:'ctrl',
      resolve: {
        items: function() {
          return ['test Array'];
        }
      }
    });

    modalInstance.result.then(function(obj) {
      console.log(obj); // The controller is closed because of the developer
    }, function(obj) {
      console.log(obj + ' dismissed at: ' + new Date()); // The contoller is closed by the use of the $dismiss call
    });
  };

  // --- Bind To Scope Events. ------------------------ //

  // --- Define Controller Methods. ------------------- //
  // function initialize() {}

  // --- Define Scope Methods. ------------------------ //

  // --- Initialize. ---------------------------------- //
  // initialize();

}]);
