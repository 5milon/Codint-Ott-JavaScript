function togalButton(btn){
    btn.innerHTML = 'open';
    var image = document.getElementById('change');
  var dis = image.style.display ;

  if(dis == 'block')
  {
    image.style.display = 'none';
    btn.innerHTML = 'open'
  }
 else{
    image.style.display = 'block';
    btn.innerHTML = 'close';
 }

    // if(display =='none')
    // {
    //     image.style.display = 'block';
    // }
    // else if (display =='block')
    // {
    //     image.style.display = 'none';
    // }


}