// 1. Write a function that displays current date & time in your
// browser.


// function date(){
//     var d=new Date();
//     document.write(d)
// }
// date();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greet(){
//     var first_Name=prompt("Please Enter the First Name")
//     var last_Name=prompt("Please Enter the last Name")
//     document.write("Hello " +first_Name+last_Name)
// }
// greet();


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers

// function add(){

//     var num1=+prompt("Please Enter the Number 1 ");
//     var num2=+prompt("please Enter the Number 2")
//     var sum=num1+num2;
//     alert( sum);
// }
// add()


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// function calculator(num1,num2,operator){
//     if (operator=='+'){
//         document.write(num1+num2)
//     }        
//     else if(operator=="-"){
//         document.write(num1-num2)
//     }
//     else if(operator=="*"){
//         document.write(num1*num2)
//     }
//     else if(operator=="/"){
//         document.write(num1/num2)
//     }
// }
// num1=prompt("enter number 1")
// num2=prompt("enter number 1")
// operator=prompt("enter operator")
// calculator(num1,num2,operator)


// 5. Write a function that squares its argument.

// function square(n){
//     alert(n*n);
// }

// n=+prompt("Please Enter the Number ")
// square(n)

// 6. Write a function that computes factorial of a number.

// function Factorial(n){
//     var f=1
//     for (var i=n;i>=2;i--){
//         f=f*i
//     }
// document.write("Factorial of 4 is :"+f)
// }    

// Factorial(4)

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.


// var start=+prompt("Enter the Start Point")
// var end=+prompt("Enter the Endt Point")

// function count(start,end){
//     for(i=start;i<=end;i++){
//         document.write(i+"<br>")
//     }
// }

// count(start,end)




// 8. Write a nested function that computes hypotenuse of a
// right angle triangle. 

// function calculate_Hypotenuse(base,perpendicular){
//     function square(n){
//         return (n*n)
//     }

//     var hypotenuse=Math.sqrt(square(base)+square(perpendicular))
//     document.write("Hypotenuse : "+hypotenuse)
// }

// calculate_Hypotenuse(2,4)

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// var a,w,h;

// function area(w,h){
//     a=w*h;
//     return(a)
// }
// area(2,2)

// w=+prompt("Enter Width");
// h=+prompt("Enter Height");
// area(w,h)
// alert(a)


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.


// function palindrome(word){
//     var w=word.split(" ")
//     var wr=w.reverse()

//     if (w==wr) {
//     alert("Word Is Palindrome!")        
//     }
// else{
//     alert("Word Is Not a Palindrome!")
// }
// }

// var word=prompt("PLease Enter the Word");

// palindrome(word)



// function pallindrome(word) {
//     var w = word.split('')
//     var wr = w.reverse()
//     if (w === wr) {
//         alert("word is pallindrome")
//     }else {
//         alert("word is not pallindrome")
//     }
// }
// // Driver Code
// var word = prompt("enter word")
// pallindrome(word)


// function pallindrome(word) {
//     var w = word.split('').reverse().join("")
//     if (word == w) {
//         alert("word is pallindrome")
//     }
//     else {
//         alert("word is not pallindrome")
//     }
// }

// var word = prompt("enter word")
// pallindrome(word)

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function caps(word) {
//     var w = word.split(' ')
//     for (let i = 0; i <= w.length - 1; i++) {
//         var q = w[i]
//         var e = q.split('')
//         var r = (e[0].toUpperCase())
//         document.write(r + q.slice(1) + " ")
//     }
// }

// var word = prompt("enter sentence");
// caps(word)


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longestWord() {
//     var sent = prompt("Enter Sentence")
//     var brkSent = sent.split(' ')
//     for (let i = 0; i < brkSent.length - 1; i++) {
//         if (brkSent[i].length < brkSent[i + 1].length) {
//             var a = (brkSent[i + 1])
//         }
//         else {
//             var a = brkSent[i]
//         }
//     }
//     alert(a)
// }
// longestWord()

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function count(sent, word) {
//     var count = 0
//     for (let i = 0; i < sent.length; i++) {
//         if (sent[i] == word) {
//             count++
//         }
//     }
//     document.write(count)
// }
// var sent = prompt("enter sentence")
// var word = prompt("enter word to be searched")
// count(sent,word)


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(r) {
//     var circ=2*3.142*r
//     document.write(circ)
// }

// function calcArea(radius) {
//     var area=3.142*radius*radius
//     document.write(area)    
// }
// calcCircumference(1)
// calcArea(1)