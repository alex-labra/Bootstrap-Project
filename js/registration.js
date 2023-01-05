function regFunction() {
    var email = document.getElementById('email').value;
    var re_email = document.getElementById('re_email').value;

    var password = document.getElementById('password').value;
    var re_password = document.getElementById('re_password').value;

    //verify retyped variables match each other
    if (email == re_email && password == re_password) {

            //send variables to PHP
            $.ajax({
                    type: 'POST',
                    url: 'connection/registration.php',
                    data: { email: email, password: password },
                    success: function (response) {

                            //check response and act accordingly
                            if (response == 1) {
                                    setTimeout("window.location.href = 'index.html';", 3000);
                                    document.getElementById('jsreply').innerHTML = "Account ready.<br> Please login.";
                            } else {
                                    document.getElementById('jsreply').innerHTML = "ERROR: Try again...";
                            }
                    }
            });

    } else {
            document.getElementById('jsreply').innerHTML = "Error: Mismatch of email or password.<br> Try again...";
    }

}
