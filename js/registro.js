angular.module('registerApp', ['firebase'])

.controller('RegisterCtrl', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray){

        var ref = new Firebase('https://listatareas-lcouoh.firebaseio.com/registros');

        $scope.registros = $firebaseArray(ref);

        $scope.getRandomSpan = function(){
            return Math.floor((Math.random() * 41) + 40);
        };

        $scope.agregarRegistro = function(){
            $scope.registros.$add({
                nombre: $scope.nombre,
                apellido_paterno: $scope.apellidop,
                apellido_materno:$scope.apellidom,
                nacimiento_dia: $scope.nacimientod,
                nacimiento_mes: $scope.nacimientom,
                nacimiento_anio: $scope.nacimientoa,
                telefono: $scope.telefono,
                email: $scope.email,
                nivel_estudios: $scope.nivel,
                puesto: $scope.puesto
            });

            $scope.nombre = "";
            $scope.apellidop = "";
            $scope.apellidom = "";
            $scope.nacimientod = "";
            $scope.nacimientom = "";
            $scope.nacimientoa = "";
            $scope.telefono = "";
            $scope.email = "";
            $scope.nivel = "";
            $scope.puesto = "";

        }


    }]);