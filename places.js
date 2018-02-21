// Hands-On Project 04-3
// A: Christopher Merriman  D: 2.21.18
// F: student.js

var places = []; // new array to store entered places
var i = 1; // counter variable to track array indexes

// function to add input to array and then generate list after 5th submission
function processInput() {
    // Was missing an aposthrophe so was taking in everything as a string
    places[i] = document.getElementById('placeBox').value; // add entered value to array
    // Was missing a semi-colon
    document.getElementById("placeBox").value = ""; // clear text box
    if (i < 5) { // iterate counter variable
        i++;
    }
    else { // add entered value to array and write results to document
        document.getElementById("resultsExpl").innerHTML = "You entered the following places:";
        listItem = "";
        // For statement was trying to call the variable j, which didn't exist so it was replaced with the global variable of i
        for (i = 1; i < 6; i++) { // write each array element to its corresponding list item
               listItem = "item" + i;
               document.getElementById(listItem).innerHTML = places[i];
            }
    }
    // Was missing a closing }, causing the function to never end
}

    // add backward compatible event listener to Submit button
      var submitButton = document.getElementById("button");
      if (submitButton.addEventListener) {
        submitButton.addEventListener("click", processInput, false); 
      } else if (submitButton.attachEvent)  {
        submitButton.attachEvent("onclick", processInput);
      }