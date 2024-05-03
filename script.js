function handleSubmit() {
    let password = document.getElementById("pwd").value;
    let confirmPassword = document.getElementById("cpwd").value;

    if (password !== confirmPassword) {
        alert("Password do not match.")
        return ; // Prevent form submission
    }
    // Password validation check
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!password.match(passwordRegex)) {
        alert("Password is not valid. It must be at least 8 characters long and contain at least one number and one special character.");
        return false; // Prevent form submission
    }
    alert("Sign up successfully....");
    return true; // Allow form submission
}
function SignInsubmit(){
    alert("Sign in successfully....");
    return true; // Allow form submission
}
