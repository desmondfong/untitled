input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    Status = 1
    while (Status == 1) {
        music.playTone(pins.map(
        Math.abs(input.acceleration(Dimension.X)),
        0,
        1023,
        180,
        786
        ), music.beat(BeatFraction.Sixteenth))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    Status = 0
    music.stopMelody(MelodyStopOptions.All)
})
let Status = 0
basic.showIcon(IconNames.Fabulous)
music.setTempo(120)
music.setVolume(128)
