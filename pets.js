let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
petNames.push("Marmaduke") 
let withMarmaduke = petNames

let userChoice = prompt(`Select which action you would like to perform by typing the number: 
1. Remove "Vinny"
2. Remove "Marty"
3. Add "Nancy" 
4. Add your name
5. Find "Riley"
6. Find "Cindy"
7. Display Array`)

if (userChoice == 1){
delete withMarmaduke[5]
alert("You chose to Remove Vinny")

console.log(`The action taken was: Remove Vinny. The remaining array data is: ${withMarmaduke}`);
}

else if (userChoice == 2){
  delete withMarmaduke[3]
  alert("You chose to remove Marty")
  
  console.log(`Marty was removed. The remaining array data is: ${withMarmaduke}`);
  }
  
else if (userChoice == 3){
  withMarmaduke.unshift ("Nancy")
  alert("You added Nancy")
  
  console.log(`You chose to add Nancy. The remaining array data is: ${withMarmaduke}`);
  }
  
else if (userChoice == 4){
  let userName = prompt("What is your name?")
  
  console.log(`You added your name. The remaining array data is: ${withMarmaduke}`);
  }
  
else if (userChoice == 5){
  let rileyIndex = withMarmaduke.indexOf("riley")
  alert("You have found Riley's index")
  
  console.log(`You have found Rileys Index. The index is: ${rileyIndex}`);
  }
  
else if (userChoice == 6){
  let cindyIndex = withMarmaduke.indexOf("Cindy")
  alert("You found Cindy's Index")
  
  console.log(`You want to find Cindy's Index. The Index is: ${cindyIndex}`);
  }
  
else if (userChoice == 7){
  alert("You want to see the array")
  alert(withMarmaduke)
  
  console.log(`The array will be displayed here: ${withMarmaduke}`);
  }
  
else{ alert("Enter a valid number")
  }
  
