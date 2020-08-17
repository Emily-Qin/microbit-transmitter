let morseSend = ""
let morseLetter: string[] = []
morseLetter = [""]

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

// Button A+B - sends the letter
input.onButtonPressed(Button.AB, function () {
    // turn off lights first
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            led.unplot(i, j)
        }
    }
    //unpack the array
    for (let k = 0; k <= morseLetter.length - 1; k++) {
        morseSend += morseLetter[k]
    }
    //print
    basic.showString(morseSend)
    radio.sendString(morseSend);
    morseLetter= []
    serial.writeLine("clear")
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
    morseLetter.shift()
})

radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString);
    serial.writeString(morseSend)
})
/*
//RECEIVER
radio.onReceivedString(function (receivedString) {
    //checking for matches
    //a
    if (morseSend==".-") {
        basic.showString("A")
    }
    //b
    else if (morseSend=="-...") {
        basic.showString("B")
    }
    //c
     else if (morseSend=="-.-.") {
        basic.showString("c")
    }
    //d
     else if (morseSend=="-..") {
        basic.showString("D")
    }
    //e
     else if (morseSend==".") {
        basic.showString("E")
    }
    //f
     else if (morseSend=="..-.") {
        basic.showString("F")
    }
    //g
     else if (morseSend=="--.") {
        basic.showString("G")
    }
    //h
     else if (morseSend=="....") {
        basic.showString("H")
    }
    //i
     else if (morseSend=="..") {
        basic.showString("I")
    }
    //j
     else if (morseSend==".---") {
        basic.showString("J")
    }
    //k
     else if (morseSend=="-.-") {
        basic.showString("K")
    }
    //l
     else if (morseSend==".-..") {
        basic.showString("L")
    }
    //m
     else if (morseSend=="--") {
        basic.showString("M")
    }
    //n
     else if (morseSend=="-.") {
        basic.showString("N")
    }
    //o
     else if (morseSend=="---") {
        basic.showString("O")
    }
    //p
     else if (morseSend==".--.") {
        basic.showString("P")
    }
    //q
     else if (morseSend=="--.-") {
        basic.showString("Q")
    }
    //r
     else if (morseSend==".-.") {
        basic.showString("R")
    }
    //s
     else if (morseSend=="...") {
        basic.showString("S")
    }
    //t
     else if (morseSend=="-") {
        basic.showString("T")
    }
    //u
     else if (morseSend=="..-") {
        basic.showString("U")
    }
    //v
     else if (morseSend=="...-") {
        basic.showString("V")
    }
    //w
     else if (morseSend==".--") {
        basic.showString("W")
    }
    //x
     else if (morseSend=="-..-") {
        basic.showString("X")
    }
    //y
     else if (morseSend=="-.--") {
        basic.showString("Y")
    }
    //z
     else if (morseSend=="--..") {
        basic.showString("Z")
    }
    //1
     else if (morseSend==".----") {
        basic.showString("1")
    }
    //2
     else if (morseSend=="..---") {
        basic.showString("2")
    }
    //3
     else if (morseSend=="...--") {
        basic.showString("3")
    }
    //4
     else if (morseSend=="....-") {
        basic.showString("4")
    }
    //5
     else if (morseSend==".....") {
        basic.showString("5")
    }
    //6
     else if (morseSend=="-....") {
        basic.showString("6")
    }
    //7
     else if (morseSend=="--...") {
        basic.showString("7")
    }
    //8
     else if (morseSend=="---..") {
        basic.showString("8")
    }
    //9
     else if (morseSend=="----.") {
        basic.showString("9")
    }
    //0
    else if (morseSend=="-----") {
        basic.showString("0")
    }
    //anything else
    else {
        basic.showString("Invalid")
    }
})
*/