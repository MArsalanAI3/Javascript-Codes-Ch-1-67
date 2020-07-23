// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write("<h1>Result:</h1> <br>");
var a=10;
document.write("The value of a is:"+a+ "<br>");

document.write("<h1>........................</h1> <br>");

document.write("The value of ++a is:"+ ++a + "<br>");
document.write(" Now the value of a is:"+ a + "<br><br><br>");


document.write("The value of a++ is:"+ a++ + "<br>");
document.write(" Now the value of a is:"+ a++ + "<br><br><br>");


document.write("The value of ++a is:"+ --a + "<br>");
document.write(" Now the value of a is:"+ --a + "<br><br><br>");


document.write("The value of ++a is:"+ a-- + "<br>");
document.write(" Now the value of a is:"+ a-- + "<br><br><br><br>");



// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("Results: "+result+"<br>");
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
document.write("Results of a: "+a+"<br>");
document.write("Results of b: "+b+"<br><br><br>");

// 3. Write a program that takes input a name from user &
// greet the user.

var name = window. prompt("Enter your name: "); alert("Well Come " + name);


// 4. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var num=prompt("Enter the number of table..");

for (var i=1;i<=10;i++){
    document.write(num +"*"+i+"="+num*i+"<br>");
}
document.write("<br><br><br><br>")



// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


var sub1=prompt("Enter the Subject1 Name:");
var sub2=prompt("Enter the Subject2 Name:");
var sub3=prompt("Enter the Subject3 Name:");

var sub1_Obt=+prompt("Enter the Subject1 Obtained Number :");
var sub2_Obt=+prompt("Enter the Subject2 Obtained Number:");
var sub3_Obt=+prompt("Enter the Subject3 Obtained Number:");
var Total_Obt=sub1_Obt+sub2_Obt+sub3_Obt;

var total=100;
var Total=total+total+total;

var percentage1=(sub1_Obt/total)*100;
var percentage2=(sub2_Obt/total)*100;
var percentage3=(sub3_Obt/total)*100;
var Total_percen=(Total_Obt/Total)*100;


document.write("<table border='1' width='300'>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");

document.write("<tr>");

document.write("<th>" +sub1 + "</th>");
document.write("<td>" + total + "</td>");
document.write("<td>" +sub1_Obt + "</td>");
document.write("<td>" +percentage1 +"%"+ "</td>");

document.write("</tr>");


document.write("<tr>");

document.write("<th>" +sub2 + "</th>");
document.write("<td>" + total + "</td>");
document.write("<td>" +sub2_Obt + "</td>");
document.write("<td>" + percentage2 + "%"+ "</td>");

document.write("</tr>");


document.write("<tr>");

document.write("<th>" +sub3 + "</th>");
document.write("<td>" + total + "</td>");
document.write("<td>" +sub3_Obt + "</td>");
document.write("<td>" +percentage3 + "%"+"</td>");

document.write("</tr>");


document.write("<tr>");

document.write("<th></th>");
document.write("<th>" + Total + "</th>");
document.write("<th>" +Total_Obt + "</th>");
document.write("<th>" +Total_percen + "%"+"</th>");

document.write("</tr>");

document.write("</table>");




