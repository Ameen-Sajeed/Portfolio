var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name=document.getElementById("contact-name").value;

    if(name.length== 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(name.length<3){
        nameError.innerHTML='Minimum 3 charater';
        return false;
    }
    if(!name.match( /^[a-zA-Z]+( [a-zA-Z]+)+$/)){
        nameError.innerHTML='Write full name';
        return false;
    }
   
    nameError.innerHTML= '';
    return true;
   
}

function validatePhone() {
    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = 'phone no is required';
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML = 'phone no should be 10 digits';
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digits please';
        return false;
    }
    phoneError.innerHTML= '';
    return true;


}

function validateEmail (){
    var email =document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML ='Email is required'
        return false;
    }

    if(!email.match( /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    if(email=='ameenputhalath789@gmail.com'){
        emailError.innerHTML = 'hey its my mail'
        return false;
    }

    emailError.innerHTML = '';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required -message.length;
    if(left > 0){
        messageError.innerHTML =left + 'more character required';
        return false;
    }
    messageError.innerHTML = '';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() ||!validateMessage()) {
      submitError.style.display='block';
      submitError.innerHTML='please fill correctly';
      setTimeout(function(){submitError.style.display='none';},3000);
      return false;
    }
}


