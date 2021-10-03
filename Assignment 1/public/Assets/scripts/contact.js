function checkValidity(evt)
{
   var firstName = document.forms["Contact"]["firstName"].value;
   var lastName = document.forms["Contact"]["lastName"].value;
   var contactNumber = document.forms["Contact"]["contactNumber"].value;
   var email = document.forms["Contact"]["emailAddress"].value;
   var message = document.forms["Contact"]["message"].value;

   var validateEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

   try{
      if((firstName === "") || (firstName === null)){
         throw new Error("First name must be filled out");
      }
      if((lastName === "") || (lastName === null))
      {
         throw new Error("Last name must be filled out");
      }
      if((contactNumber === "") || (contactNumber === null)){
         throw new Error("Contact number must be filled out");
      }
      if((email === "") || (email === null)){
         throw new Error("Email must be filled out");
      }
      if(validateEmail.test(email) === false){
         throw new Error("Invalid email address");
      }
      if((message === "") || (message === null)){
         throw new Error("Message must be filled out");
      }
      alert("Submission Complete. Thanks for contacting us");
      return true;
   }
   catch(formError){
      alert(formError.message);
      evt.preventDefault();
      return false;
   }
}

function createEventListeners() {
      if (document.getElementById("submitRequest").addEventListener) {
       document.getElementById("submitRequest").addEventListener("click", checkValidity, false);
    } else if (document.getElementById("submitRequest").attachEvent) {
        document.getElementById("submitRequest").attachEvent("onclick", checkValidity);
    }
}

function setUpPage() {
    createEventListeners();
 }

 if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
 } else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
 }

 if ( window.history.replaceState ) {
   window.history.replaceState( null, null, window.location.href )};
