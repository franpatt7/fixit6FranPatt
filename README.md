# fixit6FranPatt


let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
petNames.push("Marmaduke")
let withMarmaduke = petNames

let userChoice= prompt('Select which action you would like to perform by typing the number: 1. Remove "Vinny" 2. Remove "Marty" 3. Add "Nancy" 4. Add your name 5. Find "Riley" 6. Find "Cindy" 7. Display Array')

if (userChoice == 1){
  delete withMarmaduke[5]
  alert("You chose to Remove Vinny")
  console.log(`The action taken was: Remove Vinny. The remaining array data are: ${withMarmaduke}`);
  }
else if (userChoice == 2){
  delete withMarmaduke[3]
  alert("You chose to Remove Marty")
  console.log(`The action taken was: Remove Marty. The remaining array data are: ${withMarmaduke}`);
  }
else if (userChoice == 3){
  withMarmaduke.unshift("Nancy")
  alert("You chose to Add Nancy")
  console.log(`The action taken was: Add Nancy. The remaining array data are: ${withMarmaduke}`);
  }
else if (userChoice == 4){
  let userName = prompt("What is your name?")
  withMarmaduke.push(userName)
  console.log(`The action taken was: Add Your Name. The remaining array data are: ${withMarmaduke}`);
  }
else if (userChoice == 5){
  let rileyIndex = withMarmaduke.indexOf("Riley")
  alert("You chose to Find Riley's index")
  console.log(`The action taken was: Find Riley's Index. The index is : ${rileyIndex}`);
  }
else if (userChoice == 6){
  let cindyIndex = withMarmaduke.indexOf("Cindy")
  alert("You chose to Find Cindy's index")
  console.log(`The action taken was: Find Cindy's Index. The index is : ${cindyIndex}`);
  }
else if (userChoice == 7){
  alert("You chose to see the array")
  alert(withMarmaduke)
  console.log(`The action taken was: Display array. The array is : ${withMarmaduke}`);
  }
else{
  alert("Enter a valid number please")
  }

  
