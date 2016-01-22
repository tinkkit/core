'use strict';

angular.module('tinkApp')
  .controller('dateController', ['$scope', function ($scope) {

    var today = new Date();
    var minDate = new Date(new Date().setDate(today.getDate() - 1));
    var maxDate = new Date(new Date().setDate(today.getDate() + 15));

    console.log(today, minDate, maxDate);

    $scope.myDate = {
      value: today,
      min: minDate,
      max: maxDate
    };

}]);
