 var sidenav = document.querySelector(".sidenav");
 var section = document.querySelector(".section");
 var topnav = document.querySelector(".topnav");



function toggle(){
 var widthSidenav = sidenav.style.width;
 if(widthSidenav == '0px'){
    sidenav.style.width = '250px';
    sidenav.style.transition='0.3s';
    topnav.style.width ='calc( 100% - 250px)';
    topnav.style.transition = '0.3s';
    
 }
 else{
    sidenav.style.width = '0px';
    sidenav.style.transition='0.3s';
    topnav.style.width ='100%';
    topnav.style.transition ='0.3s'
    
 }
    
}

function tab(activeBtn, inActiveBtn,activeId, InactiveId){
   var active = document.getElementById(activeId);
   var inActive = document.getElementById(InactiveId);
   var activebtn = document.getElementById(activeBtn);
   var inActivebtn = document.getElementById(inActiveBtn);


   activebtn.style.background ='darkorange';
   activebtn.style.color = 'white';

   inActivebtn.style.background ='white';
   inActivebtn.style.color = 'black';


   active.style.display = 'block';
   inActive.style.display = 'none';
}

function singup(){
   event.preventDefault();
   var form = document.forms;
   console.log(form);
}