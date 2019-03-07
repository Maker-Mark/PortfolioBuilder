var username = document.forms['vform']['username'];
var email = document.forms['vform']['email'];
var password = document.forms['vform']['password'];
var password_confirm = document.forms['vform']['password_confirm'];
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');
var reg_error = document.getElementById('reg_error');
var site_visits = document.getElementById('site_visits');
var count_vists = document.getElementById('count_vists'); 
// email.addEventListener('blur', emailVerify, true);
// email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);

// Demonstraition of the sessionStorage object
function clickCounter() {
  if(typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.clickcount = 1;
    }
    document.getElementById("count_vists").innerHTML = "We have had "+ sessionStorage.clickcount  +" visitor(s) login today!";
     // count_vists.textContent = ";
  } else {
    document.getElementById("site_visits").innerHTML = "Sorry, your browser does not support web storage...";
  }
}



// validation function
function Validate() {
  
  if(email.value =="") {
    document.getElementById('reg-btn').style.color = "blue";
    document.getElementById('reg-btn').style.backgroundColor = "red";
    reg_error.textContent = "You did not enter an email, try again!";
    // document.getElementById('reg-btn').disabled = true;
    return false;
  }
//   if (email.value != "") {
//   	email.style.border = "1px solid #5e6e66";
//   	document.getElementById('email_div').style.color = "#5e6e66";
//   	email_error.innerHTML = "";
//     // document.getElementById('reg-btn').disabled = false;
  	
//   }

  // validate email
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }
  // Validates password
  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }
  // Check to see if passwords match
  if (password.value != password_confirm.value) {
    password.style.border = "1px solid red";
    document.getElementById('pass_confirm_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "Password does not match!";
    return false;
  }
}

// function emailVerify() {
  
//   if(email.value =="") {
//     document.getElementById('reg-btn').style.color = "blue";
//     document.getElementById('reg-btn').style.backgroundColor = "red";
//     reg_error.textContent = "You did not enter an email, try again!";
//     // document.getElementById('reg-btn').disabled = true;
//     return false;
//   }
//   if (email.value != "") {
//   	email.style.border = "1px solid #5e6e66";
//   	document.getElementById('email_div').style.color = "#5e6e66";
//   	email_error.innerHTML = "";
//     // document.getElementById('reg-btn').disabled = false;
//   	return true;
//   }


function passwordVerify() {
  if (password.value != "") {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
  	document.getElementById('password_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
  if (password.value === password_confirm.value) {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
  
    
}