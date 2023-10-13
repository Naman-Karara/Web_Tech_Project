function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");

    if (username === "" || password === "") {
        errorElement.textContent = "Both fields are required.";
    } else if (username === "user" && password === "pass") {
        window.location.href = 'test5.html';
    } else {
        errorElement.textContent = "Invalid username or password.";
    }
    
    
}
