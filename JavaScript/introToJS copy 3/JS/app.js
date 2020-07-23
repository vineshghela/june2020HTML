// let paras = document.getElementById("pid1");

// for (let p of paras) {
//   p.style.color = "red";
//   p.style.backgroundColor = "green";
//   p.style.border = "dashed";
// }

function myPara() {
  let myPara = document.querySelector("p.pid");
  let a = (document.getElementById("pid").innerHTML = "so this is my new text");
}
function myPara1() {
  let myPara = document.querySelector("p.pid");
  let a = (document.getElementById("pid").innerHTML = "This is new");
}


if(false){
    let para = document.createElement("div"); // Create a <p> element
para.className = "alert alert-danger col-md-8";
para.innerText = "This is new and im using boostrap ";
let myDiv = document.getElementById("myDiv");
myDiv.appendChild(para);
}else{
    let para1 = document.createElement("div"); // Create a <p> element
    para1.className = "alert alert-primary col-md-8";
    para1.innerText = "This is sad ";
    let myDiv1 = document.getElementById("myDiv");
    myDiv1.appendChild(para1);
}

function myButton(){
let a = document.getElementsByTagName("p");
for (let p of a) {
  p.style.color = "red";
  p.style.backgroundColor = "black";
  p.style.border = "dashed";
}

}



 let buttoneg = document.querySelector("#butt1");

// function callMe() {
//   alert("Hi there Friends");
// }

// function alsoCallMe() {
//   alert("How can I help?");
// }
// // SYNTAX: button.addEventListener(event-type, function-to-execute, bubbling?)
// buttoneg.addEventListener("click", callMe, false);
// buttoneg.addEventListener("click", alsoCallMe);


buttoneg.addEventListener("click", function () {
  alert("Do Stuff");
});

function newfunc(){
  alert("HERE i am");
}

// we can also nest functions
buttoneg.addEventListener("click", function () {
  alert("Here i am");
});

 buttoneg.removeEventListener("click",newfunc,false);


 setTimeout(function () {
  alert("You will see this after 3 seconds");
}, 5000);


let myWindow = window.open("", "", "width=300,height=100");
myWindow.document.write("<h1>hello</h1><p> Isn't this cool? </p>");
setTimeout(function () {
  myWindow.close();
}, 5000);

let myWindow1 = window.open("", "", "width=300,height=100");
myWindow1.document.write("<h1>hello</h1><p> Isn't this cool? </p>");
setTimeout(function () {
  myWindow1.close();
}, 5000);