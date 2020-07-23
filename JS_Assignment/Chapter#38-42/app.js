// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(){
//     var a=+prompt("Enter the base..")
//     var b=+prompt("Enter the Power..")
//     var result=Math.pow(a,b)
//     alert("The Result is :"+result)
// }
// power()


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function leapyear(){
//     var year=prompt("Enter the Year:")
//     if (year%4==0) {
//         alert("It is a Leap Year...");
//     }else{
//         alert("it is not a leap Year...")
//     }
// }

// leapyear()

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function input(){
//     var a=+prompt("Enter the Value of a")
//     var b=+prompt("Enter the Value of a")
//     var c=+prompt("Enter the Value of a")
//     var s=(a+b+c)/2;
//     document.write(s+"<br>");    
//     var tri_area=s*(s-a)*(s-b)*(s-c)
//     document.write("Area Of Triangle Is: " +tri_area);
// }
// input()



// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function mainFunction(m1,m2,m3){
// var avg = average(m1,m2,m3);
// var per = percentage(m1,m2,m3);
// document.write("Average of ",m1,",",m2,",",m3," is ", avg.toFixed(3));
// document.write("<br><br>Percentage : ",per.toFixed(2),"%");
// }
// function average(m1,m2,m3){
// ans = (m1+m2+m3)/3;
// return ans;
// }
// function percentage(m1,m2,m3){
// var ans = ((m1+m2+m3)*100)/300;
// return ans;
// }
// mainFunction(71,70,85);



// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function index(){
//     var country="Pakistan"
//     for(var i=0;i<=country.length;i++){
//         document.write(i)
//     }
// }
// index()

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence“Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.

// function vowel_count(str1){
//     var vowel_list='aieouAEIOU';
//     var vcount=0;

//     for(var i=0;i < str1.length;i++){
//         if(vowel_list.indexOf(str1[i]) !== -1){
//             vcount +-1;
//         }

//     }
//     return vcount;
// }

// console.log(vowel_count("Pleases read this application and give me gratuity"))

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// var a =+prompt("Enter the Value in KM");
// var km=a*1000;

// document.write("The Distance In Meter"+''+''+km.toFixed(1)+"meter " + "<br>");

// var f=a*3280.84;
// document.write("The Distance In Feet"+''+''+f.toFixed(1)+"feet " +"<br>");

// var inc=a*39370.05;
// document.write("The Distance In Inches"+''+''+inc.toFixed(1)+"Inc " +"<br>");

// var cent=a*1000*100;
// document.write("The Distance In Centimeter"+''+''+cent.toFixed(1)+"Centemeter " +"<br>");





// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// var time=prompt("Write down your Over Time..");
// document.write("Your over time pay is "+" "+ (time*12));


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.


// function note(){
//     var amount=+prompt("Please Input amount of withdraw: ");

//     document.write("Your input amount for withdraw : "+amount+"<br>")

//     document.write("Required notes of Rs. 100  :  " +amount / 100 +"<br>")
//     document.write("Required notes of Rs. 50  :  " +(amount % 100) / 50+"<br>")
//     document.write("Required notes of Rs. 10  :  " +(((amount % 100) %50 ) / 10+"<br>"))
//     document.write("Amount still remaining Rs.  :  " +(((amount % 100) % 50 ) % 10+"<br>"))

// }

// note()



