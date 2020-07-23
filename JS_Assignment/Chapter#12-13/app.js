// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var ch=prompt("Please Enter the Character");

document.write(ch+"<br>");

if (ch >= 'A' && ch <= 'Z') {
    document.write("Character is a Capital Letter <br><br><br>");
}else if (ch >= 'a' && ch <= 'z'){
    document.write("Character is a Small Letter <br><br><br>");
}else{
    document.write("IT is not a Character <br><br><br>");
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1, num2;
num1 = prompt("Input the First integer", "0");
num2 = prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".<br><br><br>");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".<br><br><br>");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal. <br><br><br>");
  }
  

//   3. Write a program that takes input a number from user &
//   state whether the number is positive, negative or zero.
  
var num=prompt("Please Enter the number...");

if (num>0){
    document.write("It is Positive Integer<br><br><br>");
}else if (num<0){
    document.write("It is Negative Integer<br><br><br>");
}else if (num===0){
    document.write("It is Zero Integer <br><br><br>");
}


// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise


var ch=prompt("PLease Enter the character...");

if (ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u'
 || ch==='A' || ch==='E' || ch==='I' || ch==='O' || ch==='U'){
     document.write("it is a Vowel ... <br><br><br>");
 }else {
     document.write("It is not a Vowel..<br><br><br>");
 }



// 5. This if/else statement does not work. Try to fix it:

var greeting;
var hour = 13;
if (hour < 18) {
document.write("Good day <br><br><br>");
}else{
document.write("Good evening<br><br><br>");
}


// 6. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


var times=1900;

if (times>=0000 && times <1200){
    document.write("Good Morning...");
}else if (times>=1200 && times <1700){
    document.write("Good AfterNoon...");
}else if (times>=1700 && times <2100){
    document.write("Good Evening...");
}else if (times>=2100 && times <2359){
    document.write("Good Night...");
}else {
    document.write("Error!");
}
