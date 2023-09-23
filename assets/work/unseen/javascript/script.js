

var a = document.getElementById('bt');

var b = document.getElementsByClassName('eye-one')[0];

var c = document.getElementsByClassName('eye-two')[0];

a.addEventListener('mouseover', function (){
     
   b.style.background = 'red' ;

   c.style.background = 'red' ;
 
});
    
a.addEventListener('mouseout', function (){
     
    b.style.background = 'none';
  
 
    c.style.background = 'none' ;
 });

 
 a.addEventListener('click', function (){
       
       location.href = 'inner.html' ;


 });   
    
    