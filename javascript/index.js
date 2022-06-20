// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync


  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));


// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error))
  }, (error) => console.log(error));


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`})
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`})
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`})
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`})
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`})

  
    //  ... Your code here
.catch ((error) => console.log(error))
.catch ((error) => console.log(error))
.catch ((error) => console.log(error))
.catch ((error) => console.log(error))
.catch ((error) => console.log(error))


// function obtainDirections(step) {
//   return new Promise (function (resolve, reject) {
//     // setTimeout(() => {
//       console.log( directions[step] );
 
//       if (!directions[step]) reject("Instructions not found.")
//       else resolve();
//     // }, 2000); 
    
//   })
// };
 
 
// obtainDirections(0)
//   .then(() => obtainDirections(1) )
//   .then(() => obtainDirections(2) )
//   .then(() => obtainDirections(3) )
//   .then(() => console.log("You arrived at your destination!") )
//   .catch((err) => console.log(err));

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...