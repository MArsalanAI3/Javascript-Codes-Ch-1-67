// 1. Write a program that displays current date and time in
// your browser.

// var time=new Date();
// document.write(time)

// 2. Write a program that alerts the current month in words.
// For example December.

// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
// document.write(n)


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];
// document.write("Today is "+n)

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];
// // document.write("Today is "+n)
// if (n ===  "Saturday" ||  n ===  "Sunday"  ) {
//     alert("It's a Fun Day")
// }else{
//     alert("Work Days")
// }



// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.



// var d = new Date();
// var n = d.getDate();
// if (n<=15) {
//     document.write("First fifteen days of the month")
// } else {
//     document.write("Last days of the month")
// }



// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var today = new Date();
// var miliseconds = new Date().getTime();
// var minute = new Date().getTime() / 60000;
// document.write("Current Date :"+today+'<br>')
// document.write("MiliSeconds :"+miliseconds+'<br>')
// document.write("Minutes :"+minute+'<br>')
     
// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var month = 0;
// var laterDate = new Date(2020, month + 12, 0);
// alert(laterDate); 



// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var date1 = new Date("06/18/2015"); 
// var date2 = new Date("07/19/2019"); 
  
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  

// document.write( "The Numbers of Days is passed Since Ramazan 1st  is: "+ Difference_In_Days); 



// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var date1=new Date("Dec 05 2015 11:12:15")
// var date2=new Date()
// var timeDiff=date2.getTime()-date1.getTime()
// alert(timeDiff/1000+" seconds")


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.



// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var date=new Date('1920');
// alert(date)


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser

// var age =prompt("Please Enter the Age ")
// document.write("Yuor Age Is " + age+"<br>")
// var d=new Date();
// document.write(d.getFullYear()-age);



// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// var Customer_Name="ABC"
// var Current_Month="February"
// var Number_Of_Units=410;
// var charge_per_Unit=16;
// var late_Surcharge=350;
// var d=new Date();
// var d=d.getDate()

// document.write("<h1> K-Electric Bill</h1>")

// var Net_Amount=Number_Of_Units*charge_per_Unit;

// var after_Due_Date=Net_Amount+late_Surcharge;

// if (d <= 15) {
//     document.write("Payabe withIn Due Date is :"+Net_Amount)
// } else {
//     document.write("Payabe After Due Date is :"+after_Due_Date)
// }



