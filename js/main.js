

//FORM VALIDATION - CONTACT PAGE


/* var myForm = document.forms.myForm;
var message = document.getElementById('message');


myForm.onsubmit = function(){

    //check name inupt field
  if (myForm.name.value == ""){
      message.innerHTML = "please enter a first name *";
      return false; //Important - stops form submission if field is empty

  } else {
    message.innerHTML = "";
  }

   if (myForm.surname.value == "") {
    message.innerHTML = ("please enter surname *");
    getElementsById('messageSurname').innerHTML
    return false;

  }



  return true;





};*/

//JAVASCRIPT FORM VALIDATION BELOW
//Variable used to get form
var myForm = document.forms.myForm;

//Variable used  get name input
var messageName = document.getElementById('messageName')

//Variable used  get name input
var messageSurname = document.getElementById('messageSurname')

//Variable used  get name input
var messageEamil = document.getElementById('messageEmail')

//Variable used  get name input
var messagePhone = document.getElementById('messagePhone')

//Variable used  get name input
var messageTxtBox = document.getElementById('messageTxtBox')


//Onsubit form validation function
myForm.onsubmit = function formValidation() {


  if (myForm.name.value == "") {
      messageName.innerHTML = "Please enter your name *";
      return false; //Stop forms submission - saves times as no need to comunicate with server

  } else { //clears promt if user has entered correctly
    messageName.innerHTML = "";

  }

  if (myForm.surname.value == "") {
      messageSurname.innerHTML = "Please enter your surname *";
      return false; //Stop forms submission - saves times as no need to comunicate with server

  } else { //clears promt if user has entered correctly
    messageSurname.innerHTML = "";
  }

  if (myForm.email.value == ""){
      messageEmail.innerHTML = "Please enter your email address *";
      return false; //Stop forms submission - saves times as no need to comunicate with server

  } else { //clears promt if user has entered correctly
    messageEmail.innerHTML = "";
  }

  if (myForm.phone.value == "") {
      messagePhone.innerHTML = "Please enter your phone number *";
      return false; //Stop forms submission - saves times as no need to comunicate with server

  } else { //clears promt if user has entered correctly
    messagePhone.innerHTML = "";
  }


  if (myForm.message.value == "") {
      messageTxtBox.innerHTML = "Please enter message *";
      return false; //Stop forms submission - saves times as no need to comunicate with server

  } else {  //clears promt if user has entered correctly
    messageTxtBox.innerHTML = "";
  }

    return true; //Submits form validation once true

};

//end of script
