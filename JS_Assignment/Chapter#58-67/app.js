// 1. Consider you have following code snippet:
//  (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.


// // part(i)
// var main_ = document.getElementById("main-content");

// // part(ii)

// var a = main_.childNodes;
// document.write("<h1> Displaying All Child Elements Of main-content </h1>");
// for(i=0;i<a.length;i++){
//     document.write("<b>",i, "</b>", a[i].nodeName, "<br/>");
// }
// console.log(a);

// // part(iii)
// document.write("<h1>Displaying InnerHTML In Browser </h1>" )
// for(i=0;i<a.length;i++){
// document.write("<b>Tag : </b>",a[i].nodeName,"<br/><b>Content : </b>" , a[i].innerHTML,"<br/><br/>");
// }


// // part(iv)
// var fname = document.getElementById("first-name");
// val = a[0].innerHTML;
// fname.value = val.slice(14);


// // part(v)
// var fname = document.getElementById("last-name");
// val = a[1].innerHTML;
// fname.value = val.slice(11);
// var fname = document.getElementById("email");
// val = a[2].innerHTML;
// fname.value = val.slice(9);


// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”


// part(i)
// var ntype = document.getElementById("form-content");
// console.log(ntype.nodeType);

// // part(ii)
// var ntype = document.getElementById("lastName");
// document.write("Node Type of lastName Element : ",ntype.nodeType);
// document.write("<br><br> Node Type of ChildNode of lastName Element :",ntype.childNodes[0].nodeType);


// // part(iii)
// document.write("<br><br> Before Updation, ChildNode of lastName Element : ",ntype.childNodes[0].nodeValue)
// var new_txt= document.createTextNode("Last Name: Helen");
// ntype.replaceChild(new_txt , ntype.childNodes[0]);
// document.write("<br><br> Updated ChildNode of lastName Element : ",ntype.childNodes[0].nodeValue)


// // part(iv)
// var elements = document.getElementById("main-content");
// var first_Child = elements.firstChild
// var last_Child = elements.lastChild
// console.log(first_Child)
// console.log(last_Child)


// // part(v)
// var ele = document.getElementById("lastName");
// var next_sib = ele.nextSibling;
// var prev_sib = ele.previousSibling;
// console.log(next_sib);
// console.log(prev_sib);


// // part(vi)
// var ele = document.getElementById("email");
// var p_node = ele.parentNode;
// console.log(p_node);
// console.log(p_node.nodeType);