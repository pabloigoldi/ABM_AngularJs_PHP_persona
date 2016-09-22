var miApp = angular.module("angularABM",['ui.router','angularFileUpload']);

miApp.config(function($stateProvider,$urlRouterProvider){

$stateProvider
	.state(
		"inicio",{
			url:"/inicio",
			templateUrl:"inicio.html",
			controller:"controlInicio"
		})

	.state(
				"persona",{
					url:"/persona",
					abstract:true,
					templateUrl:"abstractaPersona.html"
				})	

.state(
		"persona.menu",{
			url:"/menu",
			views: {
				"contenido":{

					templateUrl:"personaMenu.html",
				 controller:"controlPersonaMenu"

				}
				}
			
		})

	.state(
		"persona.alta",{
			url:"/alta",
			views: {
				"contenido":{

					templateUrl:"personaAlta.html",
				 controller:"controlAltaPersonaMenu"

				}
				}
			
		})

	.state(
		"persona.grilla",{
			url:"/grilla",
			views: {
				"contenido":{

					templateUrl:"personaGrilla.html",
				 	controller:"controlgrillaPersona"

				}
				}
			
		})
		
		
	$urlRouterProvider.otherwise("/inicio");
});

miApp.controller("controlInicio",function($scope){

			


});

miApp.controller("controlPersonaMenu",function($scope, $http,  $state, FileUploader){

  $scope.DatoTest="**alta**";

 //$scope.SubidorDeArchivos = new FileUploader({url:"servidor/archivo.php"});	
  $scope.uploader=new FileUploader({url:'PHP/nexo.php'});
  $scope.persona={};
  $scope.persona.nombre= "natalia" ;
  $scope.persona.dni= "12312312" ;
  $scope.persona.apellido= "natalia" ;
  $scope.persona.foto="pordefecto.png";
  //$scope.foto="fotos/pordefecto.png";
  //$scope.persona.foto="fotos/pordefecto.png";
  $scope.uploader.onSuccessItem=function(item, response, status, headers)
  {
	$http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
	  .then(function(respuesta) {     	
			 //aca se ejetuca si retorno sin errores      	
		 console.log(respuesta.data);
		 $state.go("grilla");

	},function errorCallback(response) {     		
			//aca se ejecuta cuando hay errores
			console.log( response);     			
	  });
	console.info("Ya guardé el archivo.", item, response, status, headers);
 	};

  $scope.Guardar=function(){
	console.log($scope.uploader.queue);
	if($scope.uploader.queue[0]!=undefined)
	{
		var nombreFoto = $scope.uploader.queue[0]._file.name;
		$scope.persona.foto=nombreFoto;
	}
	$scope.uploader.uploadAll();
  	console.log("persona a guardar:");
    console.log($scope.persona);
  }

});

miApp.controller("controlAltaPersonaMenu",function($scope){

			


});

miApp.controller("controlgrillaPersona",function($scope){

			


});


