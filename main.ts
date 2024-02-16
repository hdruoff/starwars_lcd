input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    Zufall = randint(1, 6)
    if (Zufall == 1) {
        basic.showIcon(IconNames.Chessboard)
        modules.groveLCD.setLine(0, "Waffe:" + Waffe[0])
    } else if (Zufall == 2) {
        basic.showIcon(IconNames.Skull)
        modules.groveLCD.setLine(0, "Waffe:" + Waffe[1])
    } else {
        basic.showIcon(IconNames.Heart)
        modules.groveLCD.setLine(0, "Wsffe:" + Waffe[5])
    }
    music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
    basic.pause(5000)
    modules.groveLCD.clear()
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Zufall = randint(1, 6)
    if (Zufall == 1) {
        basic.showIcon(IconNames.ArrowSouth)
        modules.groveLCD.setLine(0, "Rolle:" + rolle[0])
    } else if (Zufall == 2) {
        basic.showIcon(IconNames.Silly)
        modules.groveLCD.setLine(0, "Rolle:" + rolle[1])
    } else {
        basic.showIcon(IconNames.SmallHeart)
        modules.groveLCD.setLine(0, "Rolle:" + rolle[5])
        music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
        basic.pause(5000)
        modules.groveLCD.clear()
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Zufall = randint(1, 6)
    if (Zufall == 1) {
        basic.showIcon(IconNames.Chessboard)
        modules.groveLCD.setLine(1, "Ort:" + Ort[0])
    } else if (Zufall == 2) {
        basic.showIcon(IconNames.Skull)
        modules.groveLCD.setLine(1, "Ort:" + Ort[1])
    } else {
        basic.showIcon(IconNames.Heart)
        modules.groveLCD.setLine(1, "Ort:" + Ort[5])
    }
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    basic.pause(5000)
    modules.groveLCD.clear()
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    Zufall = randint(1, 6)
    if (Zufall == 1) {
        basic.showIcon(IconNames.Chessboard)
        modules.groveLCD.setLine(1, "Aktion:" + Aktion[0])
    } else if (Zufall == 2) {
        basic.showIcon(IconNames.Skull)
        modules.groveLCD.setLine(1, "Aktion:" + Aktion[1])
    } else {
        basic.showIcon(IconNames.Heart)
        modules.groveLCD.setLine(1, "Aktion:" + Aktion[5])
    }
    music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
    basic.pause(5000)
    modules.groveLCD.clear()
})
let Aktion: string[] = []
let Waffe: string[] = []
let Ort: string[] = []
let rolle: string[] = []
let Zufall = 0
modules.groveLCD.setBrightness(100)
modules.groveLCD.clear()
Zufall = 0
rolle = [
"ObiWan",
"Chewbacca",
"Snap Wexley",
"Mandaloianer",
"Commander Connix",
"Zam Wesel"
]
Ort = [
"Weltraum",
"Raumschiff",
"Naboo",
"Utapau",
"Kaschyyyyk",
"Jakku"
]
Waffe = [
"Lichtschwert",
"Pistole",
"Gewehr",
"Kanone",
"Blaster",
"Feuer"
]
Aktion = [
"kämpfen",
"schießen",
"Frieden",
"gefangen",
"Laser",
"laufen"
]
