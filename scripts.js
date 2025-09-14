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

// Code to check if zoomed far in or out
function checkZoom() {
    let zoom = window.devicePixelRatio;
    let message = document.getElementById("answer"); // get the message element

    if (zoom >= 3) {
      message.textContent = "[re   ]";
      message.style.color = "limegreen";
    } else if (zoom <= 1) {
      message.textContent = "[   ize]";
      message.style.color = "limegreen";
    }else{
        message.textContent = "[      ]";
        message.style.color = "limegreen";
    }
}
