function emailSend(){
    var Username = document.getElementById('name').value;
    var phon = document.getElementById('phon').value;
    var emal = document.getElementById('email').value;

    var messageBody = "Name" + Username +"<br/> Phone" +"<br/> Email" + email;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : " wijdanomar20@gmail.com",
        Password : "F8397471BOBB9CB7F45E4A715F460FA666AE",
        To : 'wijdanomar20@gmail.com',
        From : "wijdanomar20@gmail.co",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    );
    
}

