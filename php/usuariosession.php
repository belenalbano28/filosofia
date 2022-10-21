<?php session_start();

if(isset($_POST['nombre'])){
    $_SESSION['nombre']=$_POST['nombre'];
echo true;
}else{
    echo false;
}

?>
