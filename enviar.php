<?php 

 $destino="dloto444@gmail.com" 
   $nombre= $_Post["Nombre"];
   $apellidos= $_Post["Apellidos"];
   $correo= $_Post["Correo"];
   $telefono= $_Post["Telefono"];
   $pais= $_Post["País"];
   $Zona/Área= $_Post["Zona/Área"];
   $mensaje= $_Post["mensaje"];
   $contenido = "\nNombre: " .$nombre. "\nApellidos:" . $apellidos . "\nCorreo:" . $correo . "\nTelefono:" . $telefono . "\nPaís:" . $pais ."\nZona/Área:" . $Zona/Área . "\nmensaje:" .$mensaje;
   mail($destino, "Contacto", $contenido);
   header("Location:gracias.html");
 ?>
   

