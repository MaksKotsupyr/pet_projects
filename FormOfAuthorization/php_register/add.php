<?php

$connection = mysqli_connect('localhost','root','','form');

if(isset($_POST['submit'])){
    session_start();
    $first_name =$_POST['first_name'];
    $last_name =$_POST['last_name'];
    $username =$_POST['username'];
    $email =$_POST['email'];
    $phone_num =$_POST['phone_num'];
    $passwordd =$_POST['password'];
    $passwordd2 =$_POST['password2'];


    if($passwordd == $passwordd2) {
        $query = "INSERT INTO user(first_name,last_name,username,email,phone_num,passwordd)";
        $query .="VALUES ('$first_name','$last_name','$username','$email','$phone_num','$passwordd')";

        $result = mysqli_query($connection,$query);

        if($connection){
            $_SESSION['message'] = "Now you are registed!";
            $_SESSION['username'] = $username;
            header("location: ./registration-page.php");
        }else{
            echo "Database connection faild";
        }
    }else{
        echo "The two passwords do not match";
    } 
}
?>