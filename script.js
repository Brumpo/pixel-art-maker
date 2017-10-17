document.addEventListener('DOMContentLoaded',function(){
  var daddy= document.getElementsByClassName('border')[0];
  var palete = document.querySelector('.palete');
  var painting = false;
  var colorselected='white';
  for(var i=0;i<784;i++){
    var cubes = document.createElement('div')
    cubes.className=`tile`;
    cubes.style.border='1px solid black';
    cubes.style.float='left';
    cubes.style.width='13px';
    cubes.style.height='13px';
    daddy.appendChild(cubes);
  }
  getPalete();
 palete.addEventListener('click',function(){
      colorselected=event.target.style.backgroundColor;
      console.log(colorselected)
 });
 daddy.addEventListener('mousedown',function(){
   painting = true;
     console.log(colorselected);
 })
 daddy.addEventListener('mouseup',function(){
   painting = false;
 })
 daddy.addEventListener('mouseover',function(){
   if(event.target.className==='tile' && painting){
     event.target.style.backgroundColor = colorselected;
   }
 })

 //daddy.addEventListener('click')

})
var getPalete = function() {
   var palete = document.querySelector('.palete');

   var colors = [
     '#f44242',
     '#f45941',
     '#f48241',
     '#f4b541',
     '#f4ee41',
     '#bef441',
     '#97f441',
     '#41f44f',
     '#41f4a0',
     '#41f4ee',
     '#4182f4',
     '#4155f4',
     '#7641f4',
     '#d041f4',
     '#f441be',
     '#f44179',
     '#f44141',
     '#774c02',
     '#3c7702',
     '#022977',
     '#770202',
     '#000000',
     '#756d6d',
     '#efbaba',
     '#ffffff',
   ];

   for (var k of colors) {
     var color = document.createElement('div');
     color.style.backgroundColor= k;
     color.style.border = '1px solid black';
     color.style.float='left';
     color.style.width='25px';
     color.style.height='25px';
     color.style.margin='5px';
     palete.appendChild(color);
   }
 }
 // var selectcolor=function(){
 //      colorselected=event.target.style.backgroundColor;
 //      console.log(colorselected)
 // }
