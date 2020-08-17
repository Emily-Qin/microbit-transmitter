let morseLetter: string[] = []
let morseSend = ""
morseLetter = []
let letterSend =""
let receivedResponse = false

// Button A - adds a dot
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    morseLetter.push(".")
})

// Button B - adds a dash
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    morseLetter.push("-")
})

// Shaking - erases the previous entry - > dot/dash
input.onGesture(Gesture.Shake, function () {
    morseLetter.pop()
})

// Button A+B - sends the letter
input.onButtonPressed(Button.AB, function () {
    // turn off lights first
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            led.unplot(i, j)
        }
    }
    // unpack the array
    for (let k = 0; k <= morseLetter.length - 1; k++) {
        morseSend = "" + morseSend + morseLetter[k]
    }
    // print
    basic.showString(morseSend)
    radio.sendString(morseSend)
    receivedResponse = false
   
if (morseSend == ".-") {
        letterSend = "A"
    } else if (morseSend == "-...") {
        letterSend ="B"
    } else if (morseSend == "-.-.") {
        letterSend = "C"
    } else if (morseSend == "-..") {
        letterSend ="D"
    } else if (morseSend == ".") {
        letterSend ="E"
    } else if (morseSend == "..-.") {
        letterSend ="F"
    } else if (morseSend == "--.") {
        letterSend ="G"
    } else if (morseSend == "....") {
        letterSend ="H"
    } else if (morseSend == "..") {
        letterSend ="I"
    } else if (morseSend == ".---") {
        letterSend ="J"
    } else if (morseSend == "-.-") {
        letterSend ="K"
    } else if (morseSend == ".-..") {
        letterSend ="L"
    } else if (morseSend == "--") {
        letterSend ="M"
    } else if (morseSend == "-.") {
        letterSend ="N"
    } else if (morseSend == "---") {
        letterSend ="O"
    } else if (morseSend == ".--.") {
        letterSend ="P"
    } else if (morseSend == "--.-") {
        letterSend ="Q"
    } else if (morseSend == ".-.") {
        letterSend ="R"
    } else if (morseSend == "...") {
        letterSend ="S"
    } else if (morseSend == "-") {
        letterSend ="T"
    } else if (morseSend == "..-") {
        letterSend ="U"
    } else if (morseSend == "...-") {
        letterSend ="V"
    } else if (morseSend == ".--") {
        letterSend ="W"
    } else if (morseSend == "-..-") {
        letterSend ="X"
    } else if (morseSend == "-.--") {
        letterSend ="Y"
    } else if (morseSend == "--..") {
        letterSend ="Z"
    } else if (morseSend == ".----") {
        letterSend ="1"
    } else if (morseSend == "..---") {
        letterSend ="2"
    } else if (morseSend == "...--") {
        letterSend ="3"
    } else if (morseSend == "....-") {
        letterSend ="4"
    } else if (morseSend == ".....") {
        letterSend ="5"
    } else if (morseSend == "-....") {
        letterSend ="6"
    } else if (morseSend == "--...") {
        letterSend ="7"
    } else if (morseSend == "---..") {
        letterSend ="8"
    } else if (morseSend == "----.") {
        letterSend ="9"
    } else {
        letterSend ="0"
    } 

})

while (receivedResponse == false) {
    basic.pause(100)
    basic.showString("r")
    radio.sendString(morseSend)   
}
basic.showIcon(IconNames.Yes)
// reset array - PROBLEM array does not reset when invalid or when message not received
morseSend = ""
morseLetter = []

//only works when it receives a string..
radio.onReceivedString(function (receivedString) {
   if (receivedString == letterSend) {        
         receivedResponse = true       
    }
    else {
        receivedResponse = false
    }
    
})