const username = document.querySelector('#txtUsername');
const phone = document.querySelector('#txtNumber');
const email = document.querySelector('#txtEmail');
const password = document.querySelector('#txtPassword');
const conPassword = document.querySelector('#txtConPassword');

const errorDisplay = document.querySelector("#error-sign-up");
const signupButton = document.querySelector("#btnSignup");


//Here we start with the sign up ssection

signupButton.addEventListener("click", check_sign_up_details);

function check_sign_up_details(event){
    //check if any value is empty

    errorDisplay.innerText = "";
    let errorMessage = "";

    if(username.value===""){
        errorDisplay.innerText += "Username cannot be empty" + "\n";
        event.preventDefault();
    }else{
        //username needs be letters only 
        if(errorMessage = validating_username(username.value)){
            errorDisplay.innerText += errorMessage + "\n";
            event.preventDefault();
        }
    }

    if(phone.value===""){
        errorDisplay.innerText += "Phone Number cannot be empty" + "\n";
        event.preventDefault();
    }else{
        //validate the phone number user entered
        if(errorMessage = validating_phone(phone.value)){
            errorDisplay.innerText += errorMessage + "\n";
            event.preventDefault();
        }
    }

    if(email.value===""){
        errorDisplay.innerText += "Email Address cannot be empty" + "\n";
        event.preventDefault();
    }else{
        //validate the email address user entered
        if(errorMessage = validating_email(email.value)){
            errorDisplay.innerText += errorMessage + "\n";
            event.preventDefault();
        }
    }

    if(password.value==="" || conPassword.value===""){
        errorDisplay.innerText += "Neither password can be empty" + "\n";
        event.preventDefault();
    }else if(password.value !== conPassword.value){     //check if passwords do not match
        errorDisplay.innerText += "Password do not match" + "\n";
        event.preventDefault();
    }else{
        //validate password
        if(errorMessage = validating_password(password.value)){
            errorDisplay.innerText += errorMessage + "\n";
            event.preventDefault();
        }
    }

}

function validating_username(username){
    username = username.trim();
    const lettersOnlyRegex = /^[a-zA-Z]+$/;
    if(!lettersOnlyRegex.test(username))
        return "User name contains none letters";
    if(username.length < 3)
        return "User name contains less than 3 letters";
    if(username.length > 20)
        return "User name contains more than 20 letters";

    return false;
}

function validating_phone(phone){
    const lettersOnlyRegex = /^[0-9]+$/;
    if(!lettersOnlyRegex.test(username))
        return "Phone Number needs be digits only";
    if(phone.length !== 10)
        return "Phone number need be 10 digits";

    return false;
}

function validating_email(email){
    email = email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email))
        return "Email format is wrong";
    if(email.length > 100)
        return "Email need be 100 characters long";

    return false;
}

function validating_password(password){
    password = password.trim();
    const hasLetters = /[a-zA-Z]/.test(password);    // Checks for at least one letter
    const hasNumbers = /\d/.test(password);          // Checks for at least one number
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);  // Checks for at least one symbol
    
    if(password.length > 20)
        return "password is too long";

    if(password.length < 3)
        return "Password is too short"

    if(!hasLetters)
        return "Password needs to have some letters";

    if(!hasNumbers)
        return "password needs to have some numbers";

    if(!hasSymbols)
        return "Password needs to have some symbols";

    return false;
}

const pass_view = document.querySelector("#view-password");

pass_view.addEventListener("click", ()=>{
    password.type = "text";
    pass_view.src = "media/open eyes.jpg"
    setTimeout(() => {
        password.type = "password";
        pass_view.src = "media/closed eyes.jpg"
    }, 5000);
});



/* 


LOGIN CODE HERE 

*/

const usename = document.querySelector("#txtUsename");
const pass = document.querySelector("#txtPass");

const log_password_viewer = document.querySelector("#log-pass-view");
const errorLogDisplay = document.querySelector("#error-log-in");
const loginButton = document.querySelector("#btnLogin");

loginButton.addEventListener('click', (e)=>{
    if(usename.value.length === 0){
        errorLogDisplay.innerText = "Username cannot be blank\n";
        e.preventDefault();
    }
    if(pass.value.length === 0){
        errorLogDisplay.innerText = "Password cannot be blank";
        e.preventDefault();
    }
});

log_password_viewer.addEventListener("click", ()=>{
    pass.type = "text";
    log_password_viewer.src = "media/open eyes.jpg"
    setTimeout(() => {
        pass.type = "password";
        log_password_viewer.src = "media/closed eyes.jpg"
    }, 5000);
})

