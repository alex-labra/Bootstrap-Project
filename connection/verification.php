<?php

 include 'dbConn.php';

 $email    = $_POST['email'];
 $password = $_POST['password'];

 $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
 $return_set =  $conn->query($sql);

 while ($row = $return_set->fetch_assoc()){
        $fetched_email = $row['email'];
        $fetched_password = $row['password'];

                if($email === $fetched_email && $password === $fetched_password){
                        /*print "Email: $fetched_email <br>";
                        print "Password: $fetched_password <br>";*/
                        /*header('location: home.html');*/
                        echo 1;
                } else {
                        echo 0;
                  }
 }

 $return_set->close();
 $conn->close();
?>
