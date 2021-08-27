<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/style.css">
    <title>Registed Page</title>
    <style>
        body{
            background: url('../img/bbg.jpg');
            background-size: cover;
        }
    </style>
</head>
<body>
    <div class="place">
        <div class="container__login">
            <div class="arrow">
                <a href="../index.html"><img src="../img/arrow.png" alt="arrow"></a>
            </div>
            <div class="login-icon-box">
                <img src="../img/user.png" alt="Member" class="login-icon">
            </div>
            <div class="title">
                <p id="discription-1"><?php echo $_SESSION['message'];?></p>
                <p id="discription-2">Hello, <?php echo $_SESSION['username'];?></p>
            </div>
            <div class="Logout"><a href="../php_register/logout.php">Logout</a></div>
        </div>
    </div>
    
</body>
</html>