const REQ = new XMLHttpRequest();

function getTodos() {
  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log(REQ.response);
      console.log(REQ.response.title);
      for (let i = 0; i < 200; i++) {
        document.querySelector("#resp").innerHTML = REQ.response[i].id;
        console.log((document.querySelector("#resp").innerHTML = REQ.response[i].userId));
        console.log((document.querySelector("#resp").innerHTML = REQ.response[i].id));
        console.log((document.querySelector("#resp").innerHTML =REQ.response[i].title));
        console.log((document.querySelector("#resp").innerHTML = REQ.response[i].completed)
        );

        let para = document.createElement("P"); // Create a <p> element
        para;
        para.className = "alert alert-primary col-md-8";
        para.innerText = `The User id is : ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response[i].id)} \n The User id is :  ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response[i].userId)} \n  The title is : ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response[i].title)}  \n  The completed status is : ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response[i].completed)}`; // Insert text
        let myDiv = document.getElementById("todos");
        myDiv.appendChild(para);
      }
    } else {
      console.log(`Handle Error!`);
    }
  };
  REQ.open("GET", "http://jsonplaceholder.typicode.com/todos/");
  REQ.setRequestHeader("Content-Type", "Application/json");
  //This is to fix the cors ERROR
  REQ.setRequestHeader("Access-Control-Allow-Origin", "*");
  REQ.responseType = "json";
  REQ.send();
}


// POSTING INFORMATION TO THE SERVER
let data = '{"title": "foo","body": "bar","userId": 1}';
function postTodo() {
  REQ.open("POST", "http://jsonplaceholder.typicode.com/posts");
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.setRequestHeader("Access-Control-Allow-Origin", "*");
  REQ.onload = () => {
    if (REQ.status === 201) {
      console.log(REQ.response);
    } else {
      console.log("handle error");
    }
  };
  REQ.send(data); // What we want to send across
}







document.querySelector('form.form').addEventListener('submit', function(stop) {
  stop.preventDefault();
  let x = document.querySelector('form.form').elements;
  let uName =("Username: ", x['userid'].value);
  console.log(uName);
  alert(uName)
  console.log("Password: ", x['pwd'].value);
});

let i=0;

document.querySelector('form.formGetID').addEventListener('submit', function(e) {
  e.preventDefault();
  let x = document.querySelector('form.formGetID').elements;

  console.log("ID: ", x['todoid'].value);

  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log(REQ.response);
      console.log(REQ.response.title);

        let para = document.createElement("P"); // Create a <p> element
        para;
        para.className = "alert alert-danger col-md-8";
        para.id
        para.innerText = `The User id is : ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response.id)} \n The User id is :  ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response.userId)} \n  The title is : ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response.title)}  \n  The completed status is : ${(document.querySelector(
          "#resp"
        ).innerHTML = REQ.response.completed)}`; // Insert text
        let myDiv = document.getElementById("todosID");
        myDiv.appendChild(para);
    } else {
      console.log(`Handle Error!`);
    }
  };
  REQ.open("GET", "http://jsonplaceholder.typicode.com/todos/"+ x['todoid'].value);
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.setRequestHeader("Access-Control-Allow-Origin", "*");
  REQ.responseType = "json";
  REQ.send();
});




fetch('http://jsonplaceholder.typicode.com/todos')
.then(
  function(response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }

    // Examine the text in the response
    response.json().then(function(data) {
      console.log(data);
      for (let i = 0; i < 200; i++) {
        document.querySelector("#resp").innerHTML = data[i].id;
        console.log(
          (document.querySelector("#resp").innerHTML = data[i].userId)
        );
        console.log(
          (document.querySelector("#resp").innerHTML = data[i].title)
        );
        console.log(
          (document.querySelector("#resp").innerHTML =
          data[i].completed)
        );
        console.log(
          (document.querySelector("#resp").innerHTML =
          data[i].completed)
        );

        let para = document.createElement("P"); // Create a <p> element
        para;
        para.className = "alert alert-danger col-md-8";
        para.innerText = `The User id is : ${(document.querySelector(
          "#resp"
        ).innerHTML = data[i].id)} \n The User id is :  ${(document.querySelector(
          "#resp"
        ).innerHTML = data[i].userId)} \n  The title is : ${(document.querySelector(
          "#resp"
        ).innerHTML = data[i].title)}  \n  The completed status is : ${(document.querySelector(
          "#resp"
        ).innerHTML = data[i].completed)}`; // Insert text
        let myDiv = document.getElementById("todos");
        myDiv.appendChild(para);
      }
    });
  }
)
.catch(function(err) {
  console.log('Fetch Error :-S', err);
});




