// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city=prompt("Please Enter the City Name:");

if (city==="Karachi") {
    document.write("Well Come to the City of Lights"+ city +"<br><br><br>");   
}
else{
    document.write(city+"<br><br><br>");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


var gender=prompt("Please Enter Your Gender:");

if (gender==="Male" || gender==="male") {
    document.write("Good Morning Sir..<br><br><br>")
} else if (gender==="Female" || gender==="female") {
    document.write("Good Morning Ma'am <br><br><br>");
}
else{
    document.write("Error <br><br><br>");
    
}



// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var traffic_Signal=prompt("Please Enter the Color of a Traffic Signal Light :");

if (traffic_Signal==="Red" || traffic_Signal==="red") {
    document.write("Must Stop!!! <br><br><br>");
} else if (traffic_Signal==="Yellow" || traffic_Signal==="yellow") {
    document.write("Ready to Move!!! <br><br><br>");
} else if (traffic_Signal==="Green" || traffic_Signal==="green") {
    document.write("Move Now!!! <br><br><br>");
}

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
    
var fuel=+prompt("Please Enter the Fuel Of a Car");

if (fuel<=0.25){
   document.write("Please refill the fuel in your car <br><br><br>"); 
}else{
    document.write("fuel is ok <br><br><br>");
}


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a.
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// b.
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c.
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// d.
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e.
 if (true){
alert("True");
}
if (false){
alert("False");
}
// f.
 if("car" < "cat"){
    alert("car is smaller than cat");
    }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
        
document.write("<h1>Marks Sheet</h1> <br><br><br>");


var Eng=+prompt("Please Enter the Numbers of English");
var Urdu=+prompt("Please Enter the Numbers of Urdu");
var Maths=+prompt("Please Enter the Numbers of Maths");
var Total=300;
var Marks_obtained=Eng+Urdu+Maths;
var percentage=Marks_obtained/Total*100;

document.write("Total Marks: "+Total+"<br>");
document.write("Marks Obtained: "+Marks_obtained+"<br>");
document.write("percentage: "+percentage+"%"+"<br>");

if(percentage >= 80){
    document.write("Grade: A-One <br>");
    document.write("Remarks: Excellent <br><br><br>");

}else if(percentage >= 70){
    document.write("Grade: A <br>");
    document.write("Remarks: Good <br><br><br>");

}else if(percentage >= 60){
    document.write("Grade: B <br>");
    document.write("Remarks: you Need To improved <br><br><br>");

}else if(percentage <= 60){
    document.write("Grade: You Fail <br>");
    document.write("Remarks: Sorry! <br><br><br>");

}else{
    document.write("Error!! <br><br><br>");
}





// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


var secret_num=5;
var guess_num=+prompt("Please Guess the Number:");

if(guess_num===secret_num){
    document.write("Bingo! Correct answer. <br><br><br>");
}else {
    document.write("Close enough to the correct answer.  <br><br><br>");
}



// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var Num=+prompt("Please Enter the Number...");

if (Num % 3 === 0){
    document.write("The Number is Divisible by 3..");
}else{
    document.write("The Number Is Not Divisible By 3..");
}


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var Number=+prompt("Please Enter the NUmber...");

if (Number % 2 === 0){
    document.write("The Number Is Even...<br><br><br>");
} else{
    document.write("The Nuber is Odd..<br><br><br>")
}


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature=+prompt("Please Enter the Temperature...");

if (temperature>= 40){
    document.write("It is Too hot outside...<br><br><br>");
}else if(temperature>=30){
    document.write("The Weather Today is Normal..<br><br><br>");
}else if(temperature>=20){
       document.write("Today's Weather is Cool...<br><br><br>");
     }else if(temperature>=10){
        document.write("OMG! Today's Weather is so Cool.<br><br><br>");
    } else{
        document.write("Temperature Invalid!!! <br><br><br>")
    }


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var First_Num=+prompt("Please Enter the First Number...");
var Operator=prompt("Please Enter the Operator...");
var Second_Num=+prompt("Please Enter the Second Number...");

document.write(First_Num + Operator + Second_Num);
if(Operator==="+"){
    alert((+First_Num)+(+Second_Num));
}else if(Operator==="-"){
    alert((+First_Num)-(+Second_Num));
}else if(Operator==="/"){
    alert((+First_Num)/(+Second_Num));
}else if(Operator==="*"){
    alert((+First_Num)*(+Second_Num));
}else if(Operator==="%"){
    alert((+First_Num) % (+Second_Num));
}else {
    document.write("Error!");
}