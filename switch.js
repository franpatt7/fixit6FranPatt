
let userName = prompt("Enter your name")
let userNameCapital = userName.charAt(0).toUpperCase() + userName.slice(1)

let userState = prompt("Enter the two letter code for your state (ex. NE for Nebraska)")
let userStateCapital = userState.charAt(0).toUpperCase() + userState.charAt(1).toUpperCase()

let userTemp = prompt("Enter the temperature:")

let message = ["wear a warm coat, hat, scarf and gloves." , "wear a warm coat but you won't need a hat, scarf or gloves.", "wear a less heavy coat." , "wear a light jacket and smile!"]

switch(true){
  case (userStateCapital == "NE" && userTemp < 32):
      NSB.MsgBox(`${userNameCapital}, ${message[0]}`)
      break;
  case (userStateCapital == "NE" && userTemp >= 32 && userTemp <= 50):
      NSB.MsgBox(`${userNameCapital}, ${message[1]}`)
      break;
  case (userStateCapital == "FL" && userTemp >= 32 && userTemp <= 50):
      NSB.MsgBox(`${userNameCapital}, ${message[2]}`)
      break;
  case (userStateCapital == "FL" && userTemp > 50 && userTemp <= 70):
    NSB.MsgBox(`${userNameCapital}, ${message[3]}`)
    break;
  default:
    NSB.MsgBox(`Sorry ${userNameCapital}, we do not have data for that scenario.`)
  
}
