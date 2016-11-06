angular.module('alurapic').controller('FotoController', function($scope, $http){
  $scope.foto = {};
  $scope.mensage = "";


  $scope.submeter = function(){
    if(!$scope.formulario.$valid){
      $http.post('v1/fotos', $scope.foto)
      .success(function(){
        $scope.mensage = "Foto Cadastrada com Sucesso";
        $scope.foto = {};
      })
      .error(function(erro){
        $scope.mensage = "Não foi possível Cadastrar a foto";
      });
    }
  };
});
