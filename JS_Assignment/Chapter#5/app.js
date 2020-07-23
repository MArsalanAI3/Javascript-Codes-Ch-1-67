// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var a=3;
var b=8;
var c=a+b;

document.write("Sum of " + a + " and " + b + " is " + c  +"<br>");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

var a=12;
var b=4;
var c=a-b;
var d=a*b;
var e=a/b;
var f=a%b;
document.write("Subtraction of " + a + " and " + b + " is " + c  +"<br>");
document.write("Multiplication of " + a + " and " + b + " is " + d  +"<br>");
document.write("division of " + a + " and " + b + " is " + e  +"<br>");
document.write("Modulus of " + a + " and " + b + " is " + f  +"<br> <br><br><br>");


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.


document.write("Value after variable declaration is: ?? <br>");
var initial_value=5;
document.write("initial Value : " + initial_value + "<br>");
var after_value=initial_value++;
document.write("Value after increment is: " + initial_value + "<br>");
var add=initial_value + 7;
document.write("Value after addition is: " + add + "<br>");
var add=after_value + 7;
document.write("Value after addition is: " + add + "<br>");
var modulus=add%3;
document.write("The remainder is : " + modulus + "<br><br><br><br>");


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var movie_ticket=5;
var ticket_price=600;
var total=ticket_price*movie_ticket;
document.write("Total cost to Buy " + movie_ticket + "tickets to a movie is " +total+ "PKR <br><br><br><br>" );



// 5. Write a script to display multiplication table of any
// number in your browser. E.g

document.write("<h1>Table of 6:</h1>")
for (var i =1; i<=10; i++){
    document.write("6" + "x" + i + "=" +2*i + "<br>")
}



// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

document.write("<h1>Shopping Cart...</h1> <br><br><br><br>");

var price_item1=650;
document.write("price of item 1 is " +price_item1 + "<br>");
document.write("Quantity of items 1 To 3 <br>" );
var price_item2=100;
document.write("price of item 2 is " +price_item2 + "<br>");
document.write("Quantity of the items 2 is " + 7 + "<br>");
var shipping_charges=100;
document.write("shipping_charges" +shipping_charges +"<br><br>");
var total=price_item1*3 + price_item2*7 +shipping_charges;
document.write("total cost of your order is " +total +"<br>");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

document.write("<h1>Marks Sheet</h1> <br><br><br><br>");
var total_Marks=980;
document.write("Total Marks " + total_Marks + "<br>");
var obtained_marks=804;
document.write("Obtained Marks "+ obtained_marks+ "<br>");
var percentage=(obtained_marks/total_Marks)*100;
document.write("percentage "+ percentage);


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


document.write("<h1>Currency in PKR</h1>");

var US_dollars=104.80;
var saudi_riyal=28;

var PKR=US_dollars*10+saudi_riyal*25;
document.write("Total Currency in PKR :" +PKR +"<br><br><br><br>") ;


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num=10;
var result=num+5*10/2;
document.write("Perform all calculations Result is: "+result +"<br><br><br><br><br>");



// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.



document.write("<h1>Age Calculator...</h1>")

var current_year=2020;
document.write("Current_Year: "+current_year+"<br>");
var birth_year=2000;
document.write("Birth_Year: "+birth_year+"<br>");
var Your_age=current_year-birth_year;
document.write("Your Age is: "+Your_age+"<br><br><br><br>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


document.write("<h1>The Geometrizer</h1>");
var radius=20;
document.write("Radius of a Circle is :"+radius+"<br>");
var pae=3.142;
var Circumference_circle=2*pae*radius;
document.write("Circumference of a Circle is :"+Circumference_circle+"<br>");
var Area_Circle=pae*radius*radius;
document.write("Area of a Circle is :"+Area_Circle+"<br><br><br>");




// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


document.write("<h1>The Lifetime Supply  Calculate</h1> <br><br><br>");
var Fav_snack="Chocolate Chips";
document.write("Favorite Snack: "+Fav_snack+"<br>");
var Curr_Age=15;
document.write("Current Age: "+Curr_Age+"<br>");
var max_age=65;
document.write("Maximum Age: "+max_age+"<br>");
var amount_snack_per_day=3;
document.write("Amount of Snack per day: "+amount_snack_per_day+"<br>");
var total=amount_snack_per_day*max_age-Curr_Age*amount_snack_per_day;
document.write("You will need " +total+ " to last you until the ripe old age of "+max_age+"<br><br><br>");