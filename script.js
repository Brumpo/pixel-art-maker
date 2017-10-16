document.addEventListener('DOMContentLoaded',function(){
    var dady= document.getElementsByClassName('border')[0];
  for(var i=0;i<784;i++){
    var cubes = document.createElement('div')
    cubes.class=`tile ${i}`;
    cubes.style.border='2px solid #8c520b';
    cubes.style.float='left';
    cubes.style.width='11px';
    cubes.style.height='11px';
    dady.appendChild(cubes);
  }
  
})
