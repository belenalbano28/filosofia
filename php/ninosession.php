<?php session_start();

if(isset($_POST['puntos'])){
    if(empty($_SESSION['nino'])){
        $_SESSION['nino']=$_POST['puntos'];
    }else{
        $_SESSION['nino']=$_SESSION['nino']+$_POST['puntos'];
    }
    
echo $_SESSION['nino'];
}else{
    echo false;
}

?>