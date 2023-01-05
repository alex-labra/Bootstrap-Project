<?php

 // DB access information
 $host = "localhost";
 $user = "users";
 $pass = "";
 $db   = "users";

 //connect to database
 $conn = new mysqli($host, $user, $pass, $db);

 if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
 } else {
        //echo "Connection established. Database connected\n";
  }
?>

