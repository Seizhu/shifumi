let isProcessing = 0
function sfm (choice: number) {
    if (choice == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
        isProcessing = 0
    } else if (choice == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(100)
        basic.clearScreen()
        isProcessing = 0
    } else if (choice == 2) {
        basic.showLeds(`
            . . . . .
            # . # # #
            . # . . .
            # . # # #
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
        isProcessing = 0
    }
    isProcessing = 0
}
input.onGesture(Gesture.Shake, function () {
    if (isProcessing == 0) {
        basic.showString("3")
        basic.showString("2")
        basic.showString("1")
        isProcessing = 1
        sfm(randint(0, 2))
    }
})
