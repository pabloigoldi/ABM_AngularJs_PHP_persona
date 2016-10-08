var miApp = angular.module("angularABM",['ui.router','angularFileUpload']);

miApp.config(function($stateProvider,$urlRouterProvider){

$stateProvider
	// .state(
	// 	"inicio",{
	// 		url:"/inicio",
	// 		templateUrl:"inicio.html",
	// 		controller:"controlInicio"
	// 	})

	// .state(
	// 			"persona",{
	// 				url:"/persona",
	// 				abstract:true,
	// 				templateUrl:"abstractaPersona.html"
	// 			})	

	.state('menu',
			{url: '/menu',
			templateUrl: 'menu.html',
			controller: 'controlMenu'})

	.state('alta',
			{url: '/alta',
			templateUrl: 'alta.html',
			controller: 'controlAlta'})

	.state(
		"grilla",
		{
			url:"/grilla",
			templateUrl:"formGrilla.html",
			controller:"controlgrilla"
			});
		
	$urlRouterProvider.otherwise("/menu");
});

//miApp.controller("controlInicio",function($scope){});

miApp.controller('controlMenu', function($scope, $http) {
  $scope.DatoTest="**Menu**";
});

/**
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

});*/

// miApp.controller("controlAltaPersonaMenu",function($scope){

			


// });

miApp.controller('controlAlta', function($scope, $http, $state, FileUploader) {
  $scope.DatoTest="**alta**";
  

//inicio las variables
  $scope.uploader=new FileUploader({url:'PHP/nexo.php'});
  $scope.persona={};
  $scope.persona.nombre= "natalia22" ;
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

miApp.controller('controlGrilla', function($scope, $http, $state) {
  	$scope.DatoTest="**grilla**";
 	
 	$http.get('PHP/nexo.php', { params: {accion :"traer"}})
 	.then(function(respuesta) {     	

      	 $scope.ListadoPersonas = respuesta.data.listado;
      	 console.log(respuesta.data);

    },function errorCallback(response) {
     		 $scope.ListadoPersonas= [];
				console.log( response);

 	 });


 	$scope.Borrar=function(persona){
		console.log("borrar"+persona);
			$http.post("PHP/nexo.php",{datos:{accion :"borrar",persona:persona}},
					{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores        
         console.log(respuesta.data);
		 $http.get('PHP/nexo.php', { params: {accion :"traer"}})
		.then(function(respuesta) {     	

			 $scope.ListadoPersonas = respuesta.data.listado;
			 console.log(respuesta.data);

		},function errorCallback(response) {
				 $scope.ListadoPersonas= [];
				console.log( response);
		 });

    	},function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });


    //  $http.post('PHP/nexo.php', 
    //  			 headers: 'Content-Type': 'application/x-www-form-urlencoded',
    //  			 params: {accion :"borrar",persona:persona}
    //  			 )
    // 	.then(function(respuesta) {       
    //      //aca se ejetuca si retorno sin errores        
    //      console.log(respuesta.data);

    // },function errorCallback(response) {        
    //     //aca se ejecuta cuando hay errores
    //     console.log( response);           
    // });


 	}

});


