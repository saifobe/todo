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

var quast1 = prompt("Do You Like Fast Food ?");
var quast2 = prompt("Do You Like Fast Cars ?");
var quast3 = prompt("Do You Like Watching Sports ?");
let myArr=[quast1,quast2,quast3];
function myQuast(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
myQuast(myArr);



