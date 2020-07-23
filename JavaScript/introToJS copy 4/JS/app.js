// async function test(){
//   return Promise.resolve("Hello there");
// }

// test().then(console.log);


// async function test(){
//   let promise = new Promise((resolve, reject)=>{
//       setTimeout(()=>resolve('Done'),-1)
//   });
//   let result = await promise; // wait until the promise resolves
//   console.log(result);
// }
// test().then((result)=> console.log(result));

fetch('../JSON/warHammer.json')

  .then(
    function(response){
      if(response.status !==200){
        console.log("Looks like there is an issue!!!"+response.status);
        return;
      }
      response.json().then(function(data){
        console.log(data);
      });
    }
  )
  .catch(function(err){
    console.log("Fetch went wrong");
  })