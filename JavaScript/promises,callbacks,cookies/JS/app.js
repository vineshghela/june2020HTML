// let newProm = new Promise((resolve,reject)=>{
//   let a = 1+1;
//   if (a==2){
//       //we say what happens in the success outcome
//       resolve("Success");
//   }else{
//       //we say what happens in the reject outcome
//       reject("Failed");
//   }
// })

// //we then pass the value from resolve or reject and we set it to message.
// //.then() is executed if Fulfilled/successful.
// newProm.then((message)=>{
//   console.log(`This is in the then block and the status is: ${message}`);
//   //.catch() is executed if rejected/failed.
// }).catch((message)=>{
//   console.log(`This is in the catch block and the status is: ${message}`);
// //.then can be chained and will execute regardless of the outcome.
// }).then(()=>{
//   console.log("Function has now ended");
// })



// function greeting(name,age) {
//   //Creates an alert(pop-up box) which says hello and appends the value of name.
//   alert('Hello ' + name + age);
// }

// function processUserInput(a) {
// //A simple user input box appears on the browser that take a value and assigns it to name
//   let name = prompt('Please enter your name.');
//   let age = prompt("Whats your age?");
//   // we then pass the `name` variable to the callback function which will be passed to greeting.
//   a(name,age);
// }
// //Call the function `processUserInput( )` and in the brackets we pass the function `greeting`.
// processUserInput(greeting);

// let name = prompt('Please enter your name.');
// let exdays = prompt ("Enter a number");
// let date = new Date();
// date.setTime(date.getTime()+(exdays*24*60*1000));
// let expires ="expires=" + date.toUTCString();
// document.cookie = `name=${name};expires=${expires}`;
// document.cookie = document.cookie = "username=Donald Tramp, expires=Thu, 18 Dec 2013 12:00:00 UTC, path=/;";

// let myCookie = document.cookie;
// alert(myCookie);


const params = new URLSearchParams(window.location.search);

console.log(params)

for(const param of params){
  console.log(param);
}