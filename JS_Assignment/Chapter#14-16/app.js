// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var std_names = []

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var std_names = new Array();

// 3. Declare and initialize a strings array.

// var str_arr = ["a","b","c"];

// 4. Declare and initialize a numbers array.

// var num_arr = [1,2,3,4];

// 5. Declare and initialize a boolean array.

// var bool_arr = [true,false,false,true];

// 6. Declare and initialize a mixed array.

// var mix_arr = ["a" , 1 , true];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qual = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PHD"];
// var series = 1
// document.write("<h2> Qualifications </h2>");
// for(i = 0 ; i<qual.length ; i++){
//     document.write(series,") ",qual[i],"<br>");
//     series++;
// }


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var names = ["Mahnoor" , "Subhan" , "Rafay"];
// var scores = [320 , 230 , 480] , per;
// for(i = 0 ; i<scores.length ; i++){
//     per = scores[i]/500*100;
//     document.write("Score of ",names[i]," is ",scores[i],".Percentage: ",per,"%<br>");
// }


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors = ["Yellow" , "Black" , "Red" , "Blue"] , series = 1;
// for(i = 0 ; i<colors.length ; i++){
//     document.write(series ,".  " , colors[i],"<br>");
//     series++
// }
// var inp = prompt("Enter the color you want to add in the beginning : ");
// colors.unshift(inp);
// document.write("The updated array of colors : ",colors);
// var inp = prompt("Enter the color you want to add in the end : ");
// colors.push(inp);
// document.write("<br>The updated array of colors : ",colors);
// colors.unshift("White" , "Orange");
// document.write("<br>The updated array of colors : ",colors);
// colors.shift();
// document.write("<br>The updated array of colors : ",colors);
// colors.pop();
// document.write("<br>The updated array of colors : ",colors);
// var ind = Number(prompt("At which index you want to add color : "));
// var name = prompt("Color Name : ");
// colors.splice(ind , 0 , name);
// document.write("<br>The updated array of colors : ",colors);
// var del_ind = Number(prompt("At which index you want to delete color(s) : "));
// var count = Number(prompt("How many colors you want to delete ? "));
// colors.splice(del_ind , count);
// document.write("<br>The updated array of colors : ",colors);



// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var score = [320,230,480,120];
// var sorted = score.sort();
// document.write("Scores of Students : ",score);
// document.write("<br>");
// document.write("Ordered Scores of Students : ",sorted);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// var selected_cities = [];
// selected_cities.splice(0,0,cities[2],cities[3]);
// document.write("<h4> Cities List: </h4>");
// document.write(cities);
// document.write(" <h4> Selected Cities List: </h4>");
// document.write(selected_cities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", "is", "my", "cat"];
// document.write("Array :<br>",arr);
// document.write("<br><br> String : <br>",arr.join(" ")); 

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var arr = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
// document.write("Devices: <br>",arr);
// for(i=0 ; i<arr.length ; i++){
//     document.write("<br><br> Out: <br>",arr[i]);
// }

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// var arr = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
// document.write("Devices: <br>",arr);
// for(i=arr.length-1 ; i>=0 ; i--){
//     document.write("<br><br> Out: <br>",arr[i]);
// }

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// var manufacturers = ["Apple", "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
// document.write("<select name='devices' size='1'> <option value='apple'>", manufacturers[0] ,"</option>")
// document.write("<option value='samsung'>", manufacturers[1] ,"</option>");
// document.write("<option value='moto' selected>", manufacturers[2] ,"</option>");
// document.write("<option value='nokia'>", manufacturers[3] ," </option>");
// document.write("<option value='sony'>", manufacturers[4] ," </option>");
// document.write("<option value='haier'>", manufacturers[5] ," </option> </select>");



