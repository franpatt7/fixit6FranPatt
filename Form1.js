let userName = prompt("Enter your name") 
let userNameCapital = userName.charAt(0).toUpperCase() + userName.slice(1)

let userState = prompt("Enter the two letter code of your state: (ex: MN for Minnesota)")

let userStateCapital = userState.charAt(0).toUpperCase() + userState.charAt(1).toUpperCase()

let userTemp = prompt("Enter the temprature")

let message = ["Wear a warm coat, hat, and scarf." , "wear a warm coat, but you won't need a warm coat, hat or scarf." , "You do not need a heavy coat" , "wear a light jacket and smile!"]

if (userStateCapital == "MN" && userTemp < 32) 
NSB.MsgBox((`${userNameCapital}, ${message[0]}`);

else if (userStateCapital == "TX" && userTemp <= 50)
  NSB.MsgBox(`${userNameCapital}, ${message[2]}`);
  
else if (userStateCapital == "TX" && userTemp <=70)
  NSB.MsgBox(`${userNameCapital}, ${message[3]}`);
  
else NSB.MsgBox(`Sorry${userNameCapital}, we do not have data for this scenario.`)