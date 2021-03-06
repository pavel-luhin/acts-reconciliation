'use strict';

angular.module('acts').controller('uploadCtrl',
    function ($scope, $location, uploadService, toastr) {

      $scope.uploadFile = function (firstFile, secondFile) {
        if (!firstFile) {
          $scope.firstError = true;
        }

        if (!secondFile) {
          $scope.secondError = true;
        }

        if (!firstFile || !secondFile) {
          toastr.error('Выберите оба файла', 'Ошибка');
          return;
        }

        uploadService.upload(firstFile, secondFile).then(
            response => {
              toastr.success('', 'Success');
              $scope.errors = response.data.errors;
            }, error => {
              toastr.error(error.data.message, 'Ошибка')
            });
      };

      $('.custom-file-input').on('change', function () {
        let fileName = $(this).val().split('\\').pop();
        $(this).next('.custom-file-label').addClass("selected").html(fileName);
        $(this).removeClass('is-invalid');
        $(this).addClass('is-valid');
        $(this).next('.invalid-feedback').hide();
      });
    });