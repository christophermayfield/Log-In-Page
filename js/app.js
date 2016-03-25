//Problem: Hits are shown even when the form is valid
//Solution: Hide and show them at the appropriate times
var $password = $('#password');
var $confirmPassword = $('#confirm_password');

//Hide hints
$('form span').hide();

function isPasswordValid() {
return $password.val().length > 8;
}

function arePasswordsMatching() {
  
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
return isPasswordValid() && arePasswordsMatching();

}
//when hint on password
function passwordEvent(){

//find out if password is valid >8 characters
  
  if (isPasswordValid())  { //works on anything that a value can be dervied from
  //hide hint if valid
  $($password).next().hide()
  } else {
  //else show hint
   $($password).next().show(); 
    
  }

}


function confirmPasswordEvent() {
//find out if event and confirmation match 
  if(arePasswordsMatching) {
//Hide hint if matched  
   $confirmPassword.next().hide();
  } else {

//Show hint if they don't match 
   $confirmPassword.next().show();
  }
}

var $span = $("<span></span>");
$span.hide();

function enableSubmitEvent() {
$('#submit').prop("disabled",!canSubmit())

}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);


enableSubmitEvent();