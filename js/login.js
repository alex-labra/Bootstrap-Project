function subFunction(){
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        //send variables to PHP
        $.ajax({
                type: 'POST',
                url: 'connection/verification.php',
                data:{ email: email, password: password },
                success: function(response) {

                        //check response and act accordingly
                        if(response == 1){
                        window.location.href = 'email.html';
                        } else {
                        document.getElementById('jsreply').innerHTML = "Error: Try Again...";
                          }
                }
        });
}
