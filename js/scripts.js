// Business Logic

function beepBoop(n) {
  let outputArray = [];
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
  }
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
  const passage = document.getElementById("text-passage").value; // this part may need to change to grab results of beepBoop()
  const beepBoop = beepBoop(n); // need to get the array produced by beepBoop() in order to append to "div#add-array"
  
  document.querySelector("div#add-array").append(beepBoop); // I think this needs to be the array returned by beepBoop(); not sure how to grab it right now
}

window.addEventListener("load", function() {
  document.querySelector("form#number-change").addEventListener("submit", handleFormSubmission);
});