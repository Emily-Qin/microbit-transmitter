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

// Button A+B - sends the letter
input.onButtonPressed(Button.AB, function () {
    // turn off lights first
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            led.unplot(i, j)
        }
    }

    
    morseSend = ""
    //unpack the array
    for (let k = 0; k <= morseLetter.length - 1; k++) {
        morseSend += morseLetter[k]
    }
    //print
    basic.showString(morseSend)
    radio.sendString(morseSend);
    //reset array
    morseLetter= []
})

// Shaking - erases the previous entry - > dot/dash
input.onGesture(Gesture.Shake, function () {
    morseLetter.pop()
})

//RECEIVER
radio.onReceivedString(function (receivedString) {
        basic.showString(receivedString);

    //checking for matches
    //a
    if (receivedString==".-") {
        basic.showString("A")
    }
    //b
    else if (receivedString=="-...") {
        basic.showString("B")
    }
    //c
     else if (receivedString=="-.-.") {
        basic.showString("c")
    }
    //d
     else if (receivedString=="-..") {
        basic.showString("D")
    }
    //e
     else if (receivedString==".") {
        basic.showString("E")
    }
    //f
     else if (receivedString=="..-.") {
        basic.showString("F")
    }
    //g
     else if (receivedString=="--.") {
        basic.showString("G")
    }
    //h
     else if (receivedString=="....") {
        basic.showString("H")
    }
    //i
     else if (receivedString=="..") {
        basic.showString("I")
    }
    //j
     else if (receivedString==".---") {
        basic.showString("J")
    }
    //k
     else if (receivedString=="-.-") {
        basic.showString("K")
    }
    //l
     else if (receivedString==".-..") {
        basic.showString("L")
    }
    //m
     else if (receivedString=="--") {
        basic.showString("M")
    }
    //n
     else if (receivedString=="-.") {
        basic.showString("N")
    }
    //o
     else if (receivedString=="---") {
        basic.showString("O")
    }
    //p
     else if (receivedString==".--.") {
        basic.showString("P")
    }
    //q
     else if (receivedString=="--.-") {
        basic.showString("Q")
    }
    //r
     else if (receivedString==".-.") {
        basic.showString("R")
    }
    //s
     else if (receivedString=="...") {
        basic.showString("S")
    }
    //t
     else if (receivedString=="-") {
        basic.showString("T")
    }
    //u
     else if (receivedString=="..-") {
        basic.showString("U")
    }
    //v
     else if (receivedString=="...-") {
        basic.showString("V")
    }
    //w
     else if (receivedString==".--") {
        basic.showString("W")
    }
    //x
     else if (receivedString=="-..-") {
        basic.showString("X")
    }
    //y
     else if (receivedString=="-.--") {
        basic.showString("Y")
    }
    //z
     else if (receivedString=="--..") {
        basic.showString("Z")
    }
    //1
     else if (receivedString==".----") {
        basic.showString("1")
    }
    //2
     else if (receivedString=="..---") {
        basic.showString("2")
    }
    //3
     else if (receivedString=="...--") {
        basic.showString("3")
    }
    //4
     else if (receivedString=="....-") {
        basic.showString("4")
    }
    //5
     else if (receivedString==".....") {
        basic.showString("5")
    }
    //6
     else if (receivedString=="-....") {
        basic.showString("6")
    }
    //7
     else if (receivedString=="--...") {
        basic.showString("7")
    }
    //8
     else if (receivedString=="---..") {
        basic.showString("8")
    }
    //9
     else if (receivedString=="----.") {
        basic.showString("9")
    }
    //0
    else if (receivedString=="-----") {
        basic.showString("0")
    }
    //anything else
    else {
        basic.showString("Invalid")
    }
})
