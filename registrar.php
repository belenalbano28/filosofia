<?php session_start(); session_destroy(); ?>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href='https://fonts.googleapis.com/css?family=Nunito:400,300' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="css/registrar.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="js/functions.js"> </script>
    </head>
    <body>
	
	

      <div class="form">
        <h1>Ingresa tu nombre</h1>
        
        <fieldset>
          <label for="name">Nombre:</label>
          <input type="text" id="nombre" name="user_name">

        </fieldset>
        
       
        <button type="submit" onclick="guardar()">Listo</button>
        <div class="error" id="error">Lo sentimos, el nombre ya existe.</div>
        <div id="loader" class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      
        
    
      
    </body>
</html>