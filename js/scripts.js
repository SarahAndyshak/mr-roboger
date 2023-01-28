// Business Logic

function beepBoop(n) {
  let outputArray = []; //not actually needed if first loop is omitted
  let finalArray = [];
  for (let i = 0; i <= n; i++) {
    if (i === 3) {
      outputArray.push("Won't you be my neighbor");
    } else if (i === 2) {
      outputArray.push("Boop!");
    } else if (i === 1) {
      outputArray.push("Beep!");
    } else { 
      outputArray.push(i)
    }
  } //note lines 18 and 26 don't need brackets around i, change this to make lines 6-16 unnecessary
  for (let i = 0; i <= n; i++) {
    let strings = outputArray[i].toString(); //create a variable to store string
      if (strings.includes("3")) {
        finalArray.push("Won't you be my neighbor!");
      } else if (strings.includes("2")) {
        finalArray.push("Boop!");
      } else if (strings.includes("1")) {
        finalArray.push("Beep!");
      } else { 
        finalArray.push(outputArray[i])
      }
    }
    return finalArray;
  };


// User Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value; //assign a variable to the inputted number
  const finalArr = beepBoop(passage); //reading the inputted number and running the function to return finalArray
  document.querySelector("div#add-array").innerText = finalArr; //change the way the array is displayed so that it replaces each time a new number is entered.
}

window.addEventListener("load", function() {
  document.querySelector("form#number-change").addEventListener("submit", handleFormSubmission);
});