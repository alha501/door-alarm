input.onButtonPressed(Button.A, function () {
    number += 1
})
function alarm () {
    if (noise >= 1) {
        radio.sendString("ROBBER")
    }
}
input.onButtonPressed(Button.AB, function () {
    if (number == 0) {
        music.stopAllSounds()
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    number += -1
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(door_opened_times)
})
input.onGesture(Gesture.ThreeG, function () {
    noise += 1
    door_opened_times += 1
    if (input.acceleration(Dimension.X) == 50) {
        alarm()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 3651, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
let number = 0
let door_opened_times = 0
let noise = 0
basic.showIcon(IconNames.Yes)
noise = 0
door_opened_times = 0
number = -17
radio.setGroup(1)
