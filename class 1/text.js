// let x=90; if (true){     let x=10;     console.log(x); } console.log(x); let
// i="adnan"; let y="johan"; let e=i + " "+ y; console.log(e); function
// ad(names,timess){     console.log(names + " ami valo asi" + timess); }
// ad("adnan"," 12.90"); ad("hira" , 12.90); ad("40", 12.90); function cal(a,b){
// return a+b; } let news=cal(5,6); console.log(news);

// const shape = {
//     redius: 10,
//     diametere() {
//         return this.redius * 2;
//     }

// }

// console.log(shape.diametere());

// function sayhi() {
//     console.log(name);
//     console.log(age);
//     var name = 'js';
//     var age = 32;

// }
// sayhi();


// function disdate(){

//  document.getElementById("demo1").innerHTML=Date();


// }


// function all(){
//     let text=document.getElementById("los").innerHTML=text.toUpperCase();
    
  

// }

// const frute=["banana","mengo","apple","afnan"];
// frute.push= ("adndn");
// let flen=frute.length;

// text="<ul>";
// for (i=0; i<flen;i++){
//    text+="<li>"+ frute[i]+"</li>";
// }
// text+="</ul>";
// document.getElementById("lo").innerHTML=text;


// text="<ol>";
// frute.forEach(myfun);
// text+="</ol>";


// function myfun(value){
    
//     text+="<li>"+ value + "</li>";
//   };
// document.getElementById("lo").innerHTML=text;



// const inta=[1,2,3,77,33,45];
// function my(total,value,index,array){
// return total+value;

// }

// const los=inta.reduce(my);
// console.log(los);

// const dats=new Date();
// document.getElementById("lst").innerHTML=dats.getDate();


// console.log(Math.sqrt(64));


// function myrendom(min,max){
//   return Math.floor(Math.random() * (max-min+1))+ min;


// }


// const student=["adann","cadiya","banon","emon"];
// let x = student.sort();
// console.log(x);
// const roll=[1,2,4,5,6,7,8,9,10,11,12,13,14];

// roll.sort(function (a,b){
//   return(a-b);
// })
// console.log(roll);
// document.getElementById("rolls").innerHTML=roll;


// let vls=["a","e","i","o","u","A","E","I","O","U"];
// function isVowel(sentence){
//   let count=0;
 
//   const letter=Array.from(sentence);
//   letter.forEach(function(value){
//     if(vls.includes(value)){
//       count++;
    

//     }
//   });
//   return count;
  
// }

// console.log(isVowel("i love u"));


// const number=[1,3,4,5,6,2,3,3,4];

// const dupicate=number.filter(function(value,index,array){
//   return array.indexOf(value) === index;

// })

// console.log(dupicate)


// let xx=10;


// function newad(iput,lod){
//   if (iput>lod){
//     console.log(`${iput} is big `);
  
//   }
//   else{
//     console.log("no worng");
//   }

// }
// console.log(newad(200,2230))




// let xj= "10";
// let age=Number(xj);
// if (isNaN(age)){
//   console.log("your inout not a number");
// }
// else{
//   console.log(age>=6 ? "your are chaild":"you are adult")  ;
// }





// const array=["a","b","c","d","er","sd"];
// const array2=["u","v","k","s"];
// let i;
// let j;
// let len=array.length;
// let len2=array2.length;
// for (i=0,j=0;i<len,j<len2;i++,j++){

//   console.log(array[i]);
//   console.log(array2[j]);
// }



// const person={fname:"adnan",lastname:"mahdi",age:"23"};
// let all;
// for (all in person){
//   console.log(person[all]);
// }



// let nam=[1,2,3,4];
// for (let x of nam){
//   console.log(x);
// }


// let i=0;
// let text="";

// while(i<20){
//   text+= "this number is "+i+"<br>";
 
//   i++;
// }
// console.log(text);




// const adnan= new Set(["adnan","love","lou"]);

// let text=" " ;
// adnan.forEach(function(value){
//    text+= value;
// });
// console.log(text);


// let xx="red adnan rafa rafa adnan rafa";
// let yy=xx.match(/adnan|rafa/ig);
// console.log(yy);



// let x = "33 3";

// try{
//    if (x=="")throw "fild is empty";
//    if (isNaN(x))throw "not a number ";
//    if (x<3)throw "false option";
// }
// catch(err){
//    console.log(err);
// }

// function adnan(){
//    let xs="adnan is my name";
//    console.log(xs);
// }
// console.log(adnan())


// const person={
//    firstname:"adnan",
//    lastname:"mehedi",
//    age:23,
//    fullname:function(){
//      return this.firstname+" "+ this.lastname;

//    }

  
// }
// console.log(person.fullname())
// console.log(person.age)



// const person={
//    fullname: function(){
//       return this.firstname +" " +this.lastname;

//    }
// }
// const info={
//    firstname:"adnan",
   
//    age:23,

// }
// const ins={
//    lastname:"mehedi",
// }

// console.log(person.fullname.call(info,ins))




// class car{
//    constructor(name,year){
//       this.name=name;
//       this.year=year;

//    }

//     play (){
//     console.log(`${this.name} DRIVE adnan.`);
//    }
// }
// const car1=new car("bmw",2012);
// const car2=new car("toyota",1012);

// console.log(car1,car2);
// car1.play();
// car2.play();



// class man{
//  constructor(name,age,exp){
//     this.name=name;
//     this.age=age;
//     this.exp=exp;
//  }

//  overview(value){
//     console.log(`${this.name} is ${this.age} year old.his experience is ${this.exp} years.so ${value}`)
//  }


// }

// man1=new man("adnan",33,3);

// man2=new man("rohim",13,30);
// console.log(man1);

// man1.overview("good");
// man2.overview("bad");



// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// const objs = JSON.parse(text);
// console.log(objs.employees[0]);


// let info={
//    firstname:"adnan",
//    lastname:"mehdi",
// }

// const conv=JSON.stringify(info);
// console.log(conv)




// let sr="i love you rafa. rafa is a good girl.rafa works a shop";

// let result2=sr.match(/(rafa)/igm);
// console.log(result2);
// let result=sr.search(/rafa/ig);
// let occr=result2 ? result2.length : 0;
 
// result>=0 ? result : "not found ";

// console.log(occr,result);

//let occar=result2.length;
// function linear(arr,valu){
//    let len=arr.length;
//    for(let i=0;i<len;i++){
//       if(arr[i]===valu){
//          return " we fo und : ",arr[i];
//       }
//    }
//    return "not found";
// }
// console.log(linear([1,2,3,4,5,6],6))




// function longarray(values){
// let longword='';

// for (val  of values){
//    if(val.length > longword.length){
//       longword=val;
//    }
// }
// return [longword,values.indexOf(longword)]
// }

// console.log(longarray(['i love rafa','i love adanan','i love']));





// function long(valus){
// let longword= '';
// for (vals of valus){
//    if (vals.length > longword.length){
//       longword=vals;
//    }
// }
// return ([longword,valus.indexOf(longword)]);
// }

// console.log(long(['adnan','rafa loves adnan','why you so serious','hammy']))




// function fizzBuzz(input){
//    for (let i=1;i<=input;i++){
//       if (i % 15 ===0){
//          console.log(`${i} is fizz Buzz`);
//       }
//       else if(i % 3 === 0){
//          console.log(`${i} is fizz`);
//       }
//       else if (i % 5 === 0){
//          console.log(`${i} is Buzz`);
//       }
//       else{
//          console.log(`${i}`);
//       }
//    }
// }
// fizzBuzz(100);




// const arrs=['adnan',NaN,false,'love',undefined,'amra'];
// const result=arrs.filter(Boolean);



// console.log(result)




// const obj={
//    a:'adnan',
//    b:false,
//    c:undefined,
//    d:'keys'
// }


// const fn=function(obj){
   
//    for (let i in obj){
//       if (!obj[i]){
//          delete obj[i];
//       }
//    }
//    return obj;
// }
// console.log(fn(obj));
// console.log(obj);




// const obj={
//    a:' adnan',
//    d:' keys ',
 
//    e:22,
//    person:[
// {name:'toki ', model:['rafa','keya','raka','chila ']},

  
//    ]
// };
// obj.city=' dhaka';

// let text= ' ';
// let txt='';

//    for (let aaa in obj.person){
    
//       text+= obj.person[aaa].name;
//       for(let j in obj.person){
//          txt+=obj.person[j].model;
//       }
   
//   }
  


// console.log(text,txt);


// const person={
//    all:function(){
//       return this.firstname +" "+ this.lastname;
//    }
// }

// const add={
//    firstname:"adnan",
//    lastname:"johan"
// }

// let res=person.all.call(add);
// console.log(res)




// const obj={
//    a:' adnan ',
//    d:' keys ',
 
//    e:22};

//    let text= '';

   
//    for (let i in obj){
//    text+=obj[i] ;
//    }
   



// let txt=JSON.stringify(obj);


   // for (x of txt){
   //    console.log(x);
   //    return x;
   //   }




   // document.getElementById('du').innerHTML=txt;




//    const obj={
//       firstName:'adnan',
//       lastName:'mahdi',
      
//       set lan(lan){
//          obj.languag=lan;
//       }
//    };
// obj.lan="En";
//    console.log(obj)











// class car{
//    constructor(name,year){
//       this.name=name;
//       this.year=year;

//    }

//     play (){
//     console.log(`${this.name} DRIVE adnan.`);
//    }
// }
// const car1=new car("bmw",2012);
// const car2=new car("toyota",1012);

// // console.log(car1,car2);

// car1.play()



// function person(first,last,age,hobbi){
//    this.firstName=first;
//    this.lastName=last;
//    this.age=age;
//    this.hobbi=hobbi;
//    this.add=function(){
//       console.log(`${this.firstName} ${this.lastName}'s age is ${this.age} and her/his hobbi is ${this.hobbi} `)
//    } 

// }


// const man1=new person('adnan','mahdi hasan',22,'codeing');
// const man2=new person('rafa','tasnim',18,'loveing');

// man1.add()   
// man2.add()  





// const arr={
//  name:'rafa',
//  age:33
// };

// for(let n in arr){
//    console.log(arr[n]);
// }


// const latter=new Set(['adnan','rafa','loves']);
// const itterset=latter.values();
// for (let n of itterset){
//    console.log(n);
// }
// const adnan=new Map([
// ["apple",100 ],
// [" age",23]

// ]);

// let text = "";
// adnan.forEach (function(value, keys) {
//   text += keys + ' = ' + value 
// })


// console.log(text);






// function check(x,y){

//    if (x==undefined){
//       console.log("  Enter x a number plase its now undefined ");
    
//    }
//  else if (y==undefined)
// {
//    console.log("hi y = Please enter a Number its now undefined");

// }

// else{
//    console.log( x*y);
// }
// }

// check (5,7);





// function add(){
//    let count=0;

//    return function (){
//       count+=1;
//       return count;
//    }
// };

// const temp = add();
// temp();
// temp();temp();temp();temp();
// console.dir(temp)


//  class car {
//     constructor(carname){
//        this.carname=carname;
//     }

//  }

// class model extends car{
//    constructor(carname,carmodel){
//       super(carname);
//       this.carmodel=carmodel;

//    }


// }

// class speed extends model{
//    constructor(carname,carmodel,carspeed){
//       super(carname,carmodel);
//       this.carspeed=carspeed;
//    }

// }
// class width extends speed{
//    constructor(carname,carmodel,carspeed,carwidth){
   
//     super(carname,carmodel,carspeed);
//     this.carwidth=carwidth;
//    }
   
//    showcar(){
//       console.log(`${this.carname} is very frist so its model is ${this.carmodel} 
//       and its speed is ${this.carspeed} . and this car width is ${this.carwidth}`)
//    }
// }




// const  allcar=new width("bmw","2012","120 Km","14000 kg");
// console.log(allcar.showcar())




// class one{
//    constructor(name){
//       this.name=name;
//    }

// }


// class two extends one{
//    constructor(name,age){
//       super(name);
//       this.age=age;

//    }
//    set myage(ages){
//       return this.age=ages;
//    }
// }
// class three extends two{
//    constructor(name,age,home){
//       super(name,age);
//       this.home=home;
//    }
// }
// class all extends three{
//    constructor(name,age,home){
//       super(name,age,home);
//       this.home=home;

//    }
//    get show(){
//       console.log(` my name is ${this.name}.im ${this.age}.im from ${this.home}`)
//    }
// }

// const output=new all("al adnan mehedi",23,"darilla");
// output.myage=32;
// console.log(output.show);





// function main(aso){
//    console.log(aso);
// }



// function add(xx,yy,callback){
//    let zz=xx+yy;

//    if (callback){
//       callback(zz);
//    }

      
// }
// add(4,4,main) 



// setInterval(function(){
//    console.log("hiiiiiiiiiiiiii");
// },1000)



// const pyment=true;
// const mark=700;

// function enroll(callback){
//    console.log("payment processing.....");
//    setTimeout(function(){
//         if (pyment){
//          console.log("Payment successfulluy");
//            callback();
           
          
         
//         }
//         else{
//          console.log("payment faid");
//         }
//    },2000)
// }

// function process(callback){
//    console.log("course on process.....");
//    setTimeout(function(){
//       if(mark>=80){
//          callback();  
         
//       }
//       else{
//          console.log("your mark is not enough to get the certifacte.");
//       }
//    },3000)
// }

// function getcerticat(){
//    setTimeout(function(){
//       console.log("you get the certifiate");
//    },1000)
   
// }

// enroll(function(){
//    process(getcerticat);
// });




// console.log("tesk 1");



// const pay=false;
// const process=new Promise(function(resolve,reject){
//       setTimeout(function(){
//          if(pay){
//             resolve("payment successfully");
//          }
//          else{
//             reject("faild try agein");
//          }
//       },2000);

// });

// process
//    .then(function(value){
//    console.log(value);
// })

//    .catch(function(err){
//    console.log(err);
// })


// console.log("tesk 3");




const pyment=false;
const mark=80;

function enroll(){
   const promise=new Promise(function(resolve,reject){
      console.log("payment processing.....");
      setTimeout(function(){
           if (pyment){
              console.log("payment successfull..");
            resolve();       
           }
           else{
            reject('payment faild..');
           }
      },2000);
   

   });
   return promise;
}


function process(){
   const promise=new Promise(function(resolve,reject){
   
      console.log("course on process.....");
      setTimeout(function(){
         if(mark>=80){
            console.log("your course end succcessfully with a good mark .....");
          resolve();
            
         }
         else{
            reject("your mark is not enough to get the certifacte.");
         }
      },3000);
     
   });
   return promise;
}

function getcerticat(){
   const promise = new Promise(function(resolve){
      setTimeout(function(){
         resolve("you get the certifiate");
      },1000);
      return resolve;
   })
 return promise;
   
}


async function course(){
   try{
      await enroll();
      await process();
      const sms=await getcerticat();
      console.log(sms);
   }
catch(err){
   console.log(err);
}
}
course();


// enroll()
//    .then(process)
//    .then(getcerticat)
//    .then(function(value){
//       console.log(value)
//    })
//    .catch(function(err){
//       console.log(err);
//    })
