<?php session_start();

if(isset($_POST['puntos'])){
    if(empty($_SESSION['leon'])){
        $_SESSION['leon']=$_POST['puntos'];
    }else{
        $_SESSION['leon']=$_SESSION['leon']+$_POST['puntos'];
    }
    
echo $_SESSION['leon'];
}else{
    echo false;
}

?>