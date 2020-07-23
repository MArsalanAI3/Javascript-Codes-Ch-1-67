// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var numb = +prompt("Please Enter the Positive integer ..");
// document.write("Number "+numb +"<br>")

// var numb1 = Math.round(numb) ;
// document.write("Roundoff Value is : "+ numb1  +"<br>")

// document.write("Floor Value: " + Math.floor(numb) +"<br>")
// document.write("Ceil Value: " + Math.ceil(numb) +"<br>")



// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var numb=+prompt("Please Enter the negative floating point ..");
// document.write("Number "+numb +"<br>")

// var numb1 = Math.round(numb) ;
// document.write("Roundoff Value is : "+ numb1  +"<br>")

// document.write("Floor Value: " + Math.floor(numb) +"<br>")
// document.write("Ceil Value: " + Math.ceil(numb) +"<br>")



// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// var a=-4.66;
// document.write("The Absolute Value of "+ a + " is " + Math.abs(a) )


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write('You rolled a ' + diceRoll);



// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var coin = Math.floor( Math.random() * 2 ) +1;
// if (coin===1) {
//     document.write("Tail")
// }
// else{
//     document.write("Head")
// }


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var numb=Math.floor(Math.random()*100)+1;
// document.write("Random number between 1 and 100 :"+numb)

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50kgs
// b. 50.2kgs
// c. 50.4kgs
// d. 50.6kilograms


// var weight=prompt("Please Enter Your Weight..");

// if (weight==50) {
//     document.write("The Weight of User Is: "+ weight*2.2046)
// } else if (weight==50.2) {
//     document.write("The Weight of User Is: "+ weight*2.2046)
// } else if (weight==50.4) {
//     document.write("The Weight of User Is: "+ weight*2.2046)
// } else if (weight==50.6) {
//     document.write("The Weight of User Is: "+ weight*2.2046)
// }else{
//     alert("error")
// }

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// var numb=prompt("Please Enter the Number Between 1 To 10 :");
// var numb1=Math.floor(Math.random()*10)+1;
// if (numb==numb1) {
//     alert("congratulate !!!")
// }else{
//     alert("Try Again!")
// }
