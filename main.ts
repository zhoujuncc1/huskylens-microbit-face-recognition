huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else {
        if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . . # # .
                . # # . .
                . # # # .
                `)
        } else {
            if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
                basic.showLeds(`
                    . # # # .
                    . . . # .
                    . # # # .
                    . . . # .
                    . # # # .
                    `)
            } else {
                basic.showIcon(IconNames.Sad)
            }
        }
    }
})
