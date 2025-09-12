// Code to check if the entered password is "correct"
function checkPassword( _password) {
    let input = document.getElementById("passwordInput").value;
    let message = document.getElementById("message");

    if (input === _password) {
        message.textContent = "Correct password!";
        message.style.color = "limegreen";
    } else {
        message.textContent = "Incorrect password. Try again.";
        message.style.color = "red";
    }
}
