// Business Logic

function beepBoop(n) {
  let finalArray = [];

  for (let i = 0; i <= n; i++) {
    let strings = i.toString();
      if (strings.includes("3")) {
        finalArray.push("Won't you be my neighbor!");
      } else if (strings.includes("2")) {
        finalArray.push("Boop!");
      } else if (strings.includes("1")) {
        finalArray.push("Beep!");
      } else { 
        finalArray.push(i)
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