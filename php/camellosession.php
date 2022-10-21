<?php session_start();

if(isset($_POST['puntos'])){
    if(empty($_SESSION['camello'])){
        $_SESSION['camello']=$_POST['puntos'];
    }else{
        $_SESSION['camello']=$_SESSION['camello']+$_POST['puntos'];
    }
    
echo $_SESSION['camello'];
}else{
    echo false;
}

?>