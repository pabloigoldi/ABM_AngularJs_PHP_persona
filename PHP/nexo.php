<?php 

	include "clases/Personas.php";

	$accion=$_GET['accion'];

	if($accion=="traer")
	{	
		$respuesta= array();		
		$respuesta['listado']=Persona::TraerTodasLasPersonas();		
		$arrayJson = json_encode($respuesta);
		echo  $arrayJson;
	}	
	else if($accion=="borrar")	{         
		$idPersona = $_GET['idPersona'];
		Persona::BorrarPersona($idPersona);		
	}else if($accion=="modificar")	{   
		$idPersona = $_GET['idPersona'];
		$nombrePersona = $_GET['nombrePersona'];
		$apellidoPersona = $_GET['apellidoPersona'];
		//$dniPersona = $_GET['dniPersona'];

		Persona::ModificarPersona($idPersona,$nombrePersona,$apellidoPersona);
		
		///Persona::BorrarPersona($idPersona);		

		//$arrayJson = json_encode($idPersona + " ;"+$nombrePersona+ " ;"+$apellidoPersona+ " ;"+$dniPersona);
		$arrayJson = json_encode($idPersona );
		echo  $arrayJson;

	}else if($accion=="agregar")	{   
		$nombrePersona = $_GET['nombrePersona'];
		$apellidoPersona = $_GET['apellidoPersona'];
		$dniPersona = $_GET['dniPersona'];

		Persona::agregarPersona($nombrePersona,$apellidoPersona, $dniPersona);
		
		///Persona::BorrarPersona($idPersona);		

		//$arrayJson = json_encode($idPersona + " ;"+$nombrePersona+ " ;"+$apellidoPersona+ " ;"+$dniPersona);
		$arrayJson = json_encode($idPersona );
		echo  $arrayJson;		
	}else{
		$arrayJson = json_encode("Error: accion no existe");
		echo  $arrayJson;	
	}

	

 ?>