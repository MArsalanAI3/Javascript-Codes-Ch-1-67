// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var First_Name=prompt("Enter the first Name..");
// var last_Name=prompt("Enter the last Name..");

// var Full_Name=First_Name+last_Name;

// document.write("Hello " + Full_Name)

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var fav_Mobile_Model=prompt("Please Enter the Favorite mobile phone model !");

// document.write("Lenght of Srting : " + fav_Mobile_Model.length)


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var word="pakistan";
// document.write("Index of 'n' : " + word.indexOf("n"))

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var string="Hello world";
// document.write("Last index of 'l' " + string.lastIndexOf("l"))

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser

// var word ="Pakistani";

// document.write("Character at index 3 :"+word.charAt(3) )

// 6. Repeat Q1 using string concat() method.

// var First_Name=prompt("Enter the first Name..");
// var last_Name=prompt("Enter the last Name..");

// var fullName =First_Name.concat(last_Name)
// document.write(" Hello " + First_Name )

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city="Hyderabad";

// document.write("After the replacement :" + city.replace("Hyderabad","Islamabad"))


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together";

// document.write(message.replace(/and/g  ,"&"))


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// var val="472";
// document.write( "Value " + val +"<br>");
// document.write( "Type :"+ typeof  val + "<br>");

// var val=472;
// document.write( "Value " + val +"<br>");
// document.write( "Type :"+ typeof  val + "<br>");


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var text=prompt("Please Enter the Text:");
// document.write(text.toUpperCase())

// 11. Write a program that takes user input. Convert and
// show the input in title case.


// var inp=prompt("input")
// var f=inp.slice(0,1)
// f=(f.toUpperCase())
// alert(inp.replace("j",f))

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num =35.36;
// document.write("Number: " + num);
// var result=parseInt(num)
// var num = 35.36;
// document.write("Number: " + num +"<br>")
// var myInteger = parseInt(35.36);

// document.write("Result :"+ myInteger)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var userName = prompt("entere username");
// var userName = userName.split("")
// for (let i = 0; i < userName.length; i++) {
//     if (userName[i]=="@" || userName[i]=="!" || userName[i]=="." || userName[i]==",") {
//         var flag=false
//     }
// }
// if (flag===false){
//     alert("enter valid username")
// }
// else{
//     alert("ok fine")
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// const b=prompt("Please Enter the Item" );
// var c=A.find(b);
// alert(c)


// var input = prompt("enter item name");
// var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// input = input.toLocaleLowerCase()
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === input) {
//         var flag=false
//     }
// }
// if (flag === false) {
//     alert(input + " found in bakery")
// }
// else {
//     alert(input + " not found in bakery")
// }  

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// var inputtxt=prompt("Please Enter the Password")

// var passw=  /^[A-Za-z]\w{7,14}$/;

// if (inputtxt.length<=6) {
//     alert("It's Too Short")
// }else if(inputtxt.match(passw)) 
// { 
// alert('Correct, try another...')

// }
// else
// { 
// alert('Password Can not be begin with a Number Or Characters Please Enter the Valid Password...!')

// }

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university="University of Karachi";
    
// var ar = university.split(''); 
// console.log( ar );

// 17. Write a program to display the last character of a user
// input.

// var input=prompt("please Enter the Country Name:");

// document.write("User Input: " + input + " <br>");

// document.write("last Character of input :" + input.substr(-1))


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var text="The quick brown fox jumps over the lazy dog";
// var ch = 'the';

// document.write("Text:" +text +"<br>")
// var count = text.split(ch).length ;

// document.write("There are " + count  + " occurrences(s) of Words 'the'" ) 




