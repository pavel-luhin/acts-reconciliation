'use strict';

angular.module('acts').controller('addConfigModalCtrl',
    function ($scope, $uibModalInstance, addConfigModalService) {
      $scope.ok = function (config) {
        addConfigModalService.addConfig(config).then(result => {
          $uibModalInstance.close();
        });
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss();
      };

      $(document).ready(() => {
        $('#actName').tooltip();
        $('#creditColumn').tooltip();
        $('#debitColumn').tooltip();
        $('#dataEndColumn').tooltip();
        $('#dataEndTextPart').tooltip();
        $('#dataStartRow').tooltip();
        $('#dateColumn').tooltip();
        $('#documentColumn').tooltip();
      })
    });