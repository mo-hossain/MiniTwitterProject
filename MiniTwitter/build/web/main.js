/* 
 * --Mohammad Hossain-- worked on this page.
 */

function validateForm() {
        var errorDiv = document.getElementById("errorMessage");

        var test = true;
        
        //Call each check to make sure fields are inputted correctly
        test = checkNameSpace(errorDiv);
        test = checkNameQuote(errorDiv) && test;
        test = checkUserQuote(errorDiv) && test;
        test = checkEmailQuote(errorDiv) && test;
        test = checkPassQuote(errorDiv) && test;
        test = checkConfirmQuote(errorDiv) && test;
        test = checkBirthQuote(errorDiv) && test;
        test = checkPasses(errorDiv) && test;
        test = checkChars(errorDiv) && test;
        
        if(!test)
        {
            errorDiv.innerHTML +=  "<br/";
            errorDiv.className = "isVisible";
        }
        
        return test;
}


/* ***************************************************** */


function checkNameSpace(errorMessage)
{
    //Checks if full name input is one word or not
    var fullname = document.getElementById("fullname");
    var myFullname = fullname.value;
    var error_fullname = document.getElementById("fullname_error");

    if(!(/\s/.test(myFullname)) || name.charAt(myFullname.length-1) === " ")
    {
        fullname.style.backgroundColor = "yellow";
        error_fullname.className = "isVisible";
        errorMessage.className = "isVisible";
        errorMessage.innerHTML += "Full name is not valid and must have a space<br/>";
        return false;
    }    
    
    return true;
    
}


/* ***************************************************** */


function checkNameQuote(errorMessage)
{
    //Checks for single quote in full name input
    var fullname = document.getElementById("fullname");
    var myFullname = fullname.value;
    var error_fullname = document.getElementById("fullname_error");
    
    if(myFullname.includes("'"))
    {
        fullname.style.backgroundColor = "yellow";
        error_fullname.className = "isVisible";
        errorMessage.className = "isVisible";
        errorMessage.innerHTML += "Fullname has invalid characters<br/>";
        return false;
    }
 
    return true;

}


/* ***************************************************** */


function checkUserQuote(errorMessage)
{
 
    //Checks for single quote in username input
    var username = document.getElementById("username");
    var myUser = username.value;
    var error_username = document.getElementById("username_error");

    if(myUser.includes("'"))
    {
        username.style.backgroundColor = "yellow";
        error_username.className = "isVisible";
        errorMessage.className = "isVisible";
        errorMessage.innerHTML += "Username has invalid characters</br>";
        return false;
    }
    
    return true;

}


/* ***************************************************** */


function checkEmailQuote(errorMessage)
{
    //Checks for single quote in email input
    var email = document.getElementById("email");        
    var myEmail = email.value;
    var error_email = document.getElementById("email_error");

    if(myEmail.includes("'"))
    {
        email.style.backgroundColor = "yellow";
        error_email.className = "isVisible";
        errorMessage.className = "isVisible";
        errorMessage.innerHTML += "Email has invalid characters<br/>";
        return false;
    }
 
    return true;

}


/* ***************************************************** */


function checkPassQuote(errorMessage)
{
    //Checks for single quote in password input    
    var password = document.getElementById("password");
    var myPass = password.value;
    var error_pass = document.getElementById("password_error");

    if(myPass.includes("'"))
    {
        password.style.backgroundColor = "yellow";
        error_pass.className = "isVisible";
        errorMessage.className = "isVisible";
        errorMessage.innerHTML += "Password has invalid characters<br/>";
        return false;
    }
     
    return true;
    
}


/* ***************************************************** */


function checkConfirmQuote(errorMessage)
{
    //Checks for single quote in confirm password input 
    var confirmpassword = document.getElementById("confirmPassword");
    var myConfirmPass = confirmpassword.value;
    var error_confirmpass = document.getElementById("confirmPassword_error");

    if(myConfirmPass.includes("'"))
    {
        confirmpassword.style.backgroundColor = "yellow";
        error_confirmpass.className = "isVisible";
        errorMessage.className = "isVisible";
        errorMessage.innerHTML += "Confirm Password has invalid characters<br/>";
        return false;
    }
  
    return true;
    
}


/* ***************************************************** */


function checkBirthQuote(errorMessage)
{
    //Checks for single quote in birthday input 
    var birthday = document.getElementById("birthday");
    var myBirthday = birthday.value;
    var error_birthday = document.getElementById("birthday_error");                

    if(myBirthday.includes("'"))
    {
        birthday.style.backgroundColor = "yellow";
        error_birthday.className = "isVisible";
        errorMessage.className = "isVisible";
        errorMessage.innerHTML += "Birthday has invalid characters";
        return false;
    }
  
    return true;
       
}


/* ***************************************************** */


function checkPasses(errorMessage)
{
     
    //Checks the two passwords and if not output the error
    var password = document.getElementById("password");
    var myPass = password.value;
    var error_pass = document.getElementById("password_error");

    var confirmpassword = document.getElementById("confirmPassword");
    var myConfirmPass = confirmpassword.value;
    var error_confirmpass = document.getElementById("confirmPassword_error");

    
    if(myPass != myConfirmPass)
    {
        password.style.backgroundColor = "yellow";
        confirmpassword.style.backgroundColor = "yellow";
        error_pass.className = "isVisible";
        error_confirmpass.className = "isVisible"; 
        errorMessage.className = "isVisible";
        errorMessage.innerHTML += "Error! Passwords do not match! <br/>";
        return false;
    }
    
    return true; 
    
}


/* ***************************************************** */


function checkChars(errorMessage)
{
    //This will check if password has one digit,
    //one lowercase letter and one uppercase letter
    var password = document.getElementById("password");
    var myPass = password.value;
    var error_pass = document.getElementById("password_error");
        
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;

    if(!(myPass.match(regex)))
    {
        password.style.backgroundColor = "yellow";
        error_pass.className = "isVisible";
        errorMessage.innerHTML += "Password must have one digit, one lowercase letter and one uppercase letter ";
        errorMessage.className = "isVisible";
        return false;
    }
 
    return true;
   
}


/* ***************************************************** */


function dynamicForm() 
{   //This function will unhide the security input field when the select is changed.
    var answer = document.getElementById("SecurityQuestion");
    answer.className = "isVisible";
}