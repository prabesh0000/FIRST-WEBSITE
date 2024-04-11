var email = document.forms ['form']['email'];
var message= document.forms['form']['message'];

var email_error = document.getElementById('email_error');
var NO_MESSAGE = document.getElementById('NO_MESSAGE');


function validated(){
  if ( email.value.length < 9) {
    email.style.border="1px solid red";
    email_error.style.display="block";
    email.focus();
    return false;
  }

  if ( message.value.length < 9) {
    message.style.border="1px solid red";
    NO_MESSAGE.style.display="block";
    message.focus();
    return false;

}
}