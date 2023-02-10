"use strict";

var names = prompt("Enter Your Name ");

var gender = prompt("What is your Gender ?");

if(gender == "male" || gender == "female")
{
    alert("you entered " + " " + gender);
}
else{
    alert("The Answer Should Be male or female please")
}

var age  = prompt("Enter Your Age please ");

if(age <= 0)
{
    alert("INCORRECT AGE !!!");
}
else{
    alert("your age is" + " " + age);
}

var massage = confirm("Do you want to Read the Welcoming Massage ?");

if(massage = true)
{
    if(gender == "male"  && age >= 0 )
    {
        alert("Welcome Mr." + names);
    }

    else if(gender == "female" && age >= 0 )
    {
        alert("Welcome Mrs." + names);
    }

    else
    {
        alert("welcome");
    }
    
}


else
{
   alert("You skipped the welcoming masseage");
}

/*function myQuast(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
myQuast(myArr);*/


/*```````````````````````````LAP 6``````````````````````````````````*/

  function questionOne(){ 
    const quast1 = prompt("Do You Like Fast Food ?");

    if(quast1 != "yes" && quast1 !="no"){
        console.log("Invalid")
    }
    else{
        console.log(quast1)
    }
}


function questionTwo(){
    const quast2 = prompt("Do You Like Fast Cars ?");

    if(quast2 != "yes" && quast2 !="no"){
        console.log("Invalid")
    }
    else{
        console.log(quast2)
    }
}

function questionThree(){
    const quast3 = prompt("Do You Like Watching Sports ?");

    if(quast3 != "yes" && quast3 !="no"){
        console.log("Invalid")
    }
    else{
        console.log(quast3)
    }
}

let myArr=[questionOne(),questionTwo(),questionThree()];


function myQuast(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
myQuast(myArr);