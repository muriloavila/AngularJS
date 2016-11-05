angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
  var ddo = {};//directive definition object

  ddo.restrict = "AE";//Attribute element

  ddo.scope = {
    titulo:'@'
  };

  ddo.transclude = true;

  ddo.templateUrl = 'js/directives/meu-painel.html';


  return ddo;
});
