<?php
    session_start();

    $connection = mysqli_connect('localhost','root','','form');

    if(isset($_POST['login-btn'])) {
        
        $username =$_POST['username'];
        $passwordd = $_POST['password'];

        $query = "SELECT * FROM user WHERE username='$username' AND passwordd='$passwordd'";
        $result = mysqli_query($connection,$query);
        $row = mysqli_num_rows($result);

        if($row == 1){
            $_SESSION['message'] = "You are now logged in!";
            $_SESSION['username'] = $username;
            header("location: ./registration-page.php");
        }else{
            echo "Database connection faild";
        }
    }else{
        $_SESSION['message'] = "Username/Password combination incorrectly!";
    } 
?>