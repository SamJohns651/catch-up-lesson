let num1 = 0
let num2 = 0
let answer = 0
let myAge = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Boris")
})
input.onButtonPressed(Button.AB, function () {
    num1 = 5
    num2 = 10
    answer = num1 + num2
    basic.showNumber(answer)
})
input.onButtonPressed(Button.B, function () {
    myAge = 100
    basic.showNumber(myAge)
})
input.onGesture(Gesture.Shake, function () {
    num1 = 5
    num2 = 5
    answer = num1 + num2
    if (answer == 15) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    num1 = 5
    num2 = 5
    answer = num1 + num2
    if (answer == 15) {
        basic.showIcon(IconNames.Yes)
    }
})
