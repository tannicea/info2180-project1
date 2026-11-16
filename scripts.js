window.onload = function() {
    let myForm = document.querySelector('form');
    let emailField = document.getElementById('email');
    let msgBox = document.querySelector('.message');

    myForm.onsubmit = function(e) {
        e.preventDefault();
        
        let userEmail = emailField.value.trim();

        if (userEmail == "") {
            msgBox.innerHTML = "Please enter an email address.";
        } else if (!userEmail.includes('@') || !userEmail.includes('.')) {
            msgBox.innerHTML = "Please enter a valid email address.";
        } else {
            msgBox.innerHTML = "Thank you! Your email address " + userEmail + " has been added to our mailing list!";
            emailField.value = "";
        }
    };
};