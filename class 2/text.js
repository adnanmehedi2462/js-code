
// const stor= document.getElementsByClassName("adnan");
// stor[0].innerHTML="my name is";
// stor[1].innerHTML="rafa i love u";
// stor[0].style.backgroundColor="red";
// stor[0].style.padding="30px";
// stor[1].style.backgroundColor="red";
// stor[1].style.padding="30px";



// const store=document.forms["frm"];
// let text  = "";

// for (let i=0;i<store.length;i++){
//     text=text+store.elements[i].value;
// }
// document.getElementById("show").innerHTML=text;



// function mymove(){
//     const animation=document.querySelector('.animatebox');
//     let pos = 0;
  
    
//     const interval = setInterval(fram,50);
//     function fram(){
//       if(pos < 250){
//         animation.style.top=pos +'px';
//         animation.style.left=pos +'px';
//         pos++;
//       }
//       else{
//         clearInterval(interval);
//       }
//     }
  
  
//   }



// const button=document.querySelector('#button');

// button.addEventListener('mouseout',function(){
//      alert("move")
// })


// button.addEventListener('click',function(){
//      alert("click")
// })






const pera=document.createElement("p");
const p4=document.createTextNode("al");

pera.appendChild(p4);
const eliment= document.querySelector('.maindiv');
const p3=document.querySelector('.c3');

eliment.insertBefore(pera,p3);