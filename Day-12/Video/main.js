var model = document.getElementById("model-body");
var modelBody = document.getElementById("model-content");

var user = {};


function signup(event) {
    event.preventDefault();

    model.style.display ='flex';
    model.className = 'animate__animated animate__zoomIn';
    modelBody.className = "animate__animated animate__fadeIn";
   
   
   /* var form = document.forms.register;

    user.firstname = form.elemnets.firstname.value;
    user.lastname = form.elemnets.lastname.value;
    user.email = form.elemnts.email.value;

    user.password = form.elements.password.value;
    console.log(user);

    model.style.display = 'flex';
    model.className = 'animate__animated animate__fadeIn';
    modelBody.className = 'animate__animated animate__zoomIn';



    var user ={
          firstname : form.elements.firstname.value,
          lastname : form.elements.lastname.value,
          email : form.elements.email.value,
          password :form.elements.password.value,
  
  
      }
    

    console.table(user);

    */
    /*
    console.log(form.elements);
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var email = document.getElementById('email');
    var password =document.getElementById('password');

    console.log(
        firstname.value,
        lastname.value,
        email.value,
        password.value
    )
        */
}




function closeClick() {

    model.className = 'animate__animated animate__zoomOut';
    modelBody.className = "animate__animated animate__fadeOut";
}
