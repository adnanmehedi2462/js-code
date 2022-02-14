// const milestoneData=JSON.parse(data).data;
// function loadMilestone(){
//     const ms=document.querySelector(".milestones");
//     ms.innerHTML=`${milestoneData.map(function(milstn){
//         return `<div class="milestone border-b">
//         <div class="flex">
//           <div class="checkbox"><input type="checkbox" /></div>
//           <div onclick="openmilestone(this,${milstn._id})">
//             <p>
//               ${milstn.name}
//               <span><i class="fas fa-chevron-down"></i></span>
              
//             </p>
//           </div>
//         </div>
//         <div class="hidden_panel">
//         ${milstn.modules.map(function(module){
//             return ` <div class="module border-b">
//             <p>${module.name}</p>
//           </div>`;
//         }).join("")}
//         </div>
//       </div>`;
//     }).join('')}`;
// }


// function openmilestone(tageliment, id){

  
//   const carrentEliment=tageliment.parentNode.nextElementSibling;
//   const remv=document.querySelector(".show");
//   const activ=document.querySelector(".active");
//   tageliment.classList.toggle("active");

//   carrentEliment.classList.toggle("show");

//   remv.classList.remove("show");
//   activ.classList.remove("active");
//   showmileImg(id);
// }
// function showmileImg(id){
//     const showimg =document.querySelector('.milestoneImage');
//     showimg.src =milestoneData[id].image;
// }


// loadMilestone();  






const milestoneapi=JSON.parse(data).data;

function mainfun(){
  const ms=document.querySelector(".milestones");
  ms.innerHTML =`${milestoneapi.map(function(peramiterms){
    return ` <div class="milestone border-b" id="${peramiterms._id}">
   
    <div class="flex">
      <div class="checkbox" ><input type="checkbox" onclick ="markdone(this,${peramiterms._id})"/></div>
      <div onclick ="openhide(this,${peramiterms._id})">
      
        <p>
          ${peramiterms.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
    ${peramiterms.modules.map(function(module){
      return `<div class="module border-b">
      <p>${module.name}</p>
    </div>`;
    }).join('')};
    
    </div>
  </div>`;

  }).join('')}`;

}
function openhide(cach_this,id){
  const carrentEliment=cach_this.parentNode.nextElementSibling;
  const rmvshow=document.querySelector(".show");
  const activebold=document.querySelector(".active");

  if (!carrentEliment.classList.contains("show")&& rmvshow){
    rmvshow.classList.remove("show");
  }

  carrentEliment.classList.toggle("show");
if (!carrentEliment.classList.contains("active")&& activebold ){
  activebold.classList.remove("active");
}


  cach_this.classList.toggle("active");
  
  showimgs(id);
  
}

function showimgs(id){
  
  const imgs=document.querySelector(".milestoneImage");
  const titles=document.querySelector(".title");
  imgs.style.opacity="0";
  titles.innerText=milestoneapi[id].name;
  imgs.src = milestoneapi[id].image;


}


const milestoneImage=document.querySelector(".milestoneImage");

milestoneImage.onload=function(){
  this.style.opacity="1";
}


function markdone(checkbox,id){
const doneList=document.querySelector(".doneList");
const milestoneList=document.querySelector(".milestones");
const item=document.getElementById(id);


if (checkbox.checked){
  milestoneList.removeChild(item);

  doneList.appendChild(item);
  
}
else{
  
  milestoneList.appendChild(item)
 
  doneList.removeChild(item)
  
}


}


mainfun();
