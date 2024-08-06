'use strict'

let gIsItemPlay = false
let gWinMusicInterval

let gSoundItems = {
    menuMusic: null,
    gameMusic: null,
    winMusic: null,
    cheering: null,
    itemName: null
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (gSoundItems.menuMusic) {
            gSoundItems.menuMusic.pause()
        }
        if (gSoundItems.gameMusic) {
            gSoundItems.gameMusic.pause()
        }
    } else {
        if (gSoundItems.menuMusic) {
            gSoundItems.menuMusic.play()
        }
        if (gSoundItems.gameMusic) {
            gSoundItems.gameMusic.play()
        }
    }
})

function playMenuMusic() {
    if (!gSoundItems.menuMusic) {
        gSoundItems.menuMusic = new Audio("sounds/background_music/background_menu.mp3")
        gSoundItems.menuMusic.volume = getSoundValue() ? 0.4 : 0
        gSoundItems.menuMusic.loop = true
        gSoundItems.menuMusic.play()
    }
}

function playGameMusic() {
    if (!gSoundItems.gameMusic) {
        gSoundItems.gameMusic = new Audio("sounds/background_music/background_game.mp3")
        gSoundItems.gameMusic.volume = getSoundValue() ? 0.5 : 0
        gSoundItems.gameMusic.loop = true
        gSoundItems.gameMusic.play()
    }
}

function stopMenuMusic() {
    if (gSoundItems.menuMusic) {
        gSoundItems.menuMusic.pause()
        gSoundItems.menuMusic.currentTime = 0
        gSoundItems.menuMusic = null
    }
}

function stopGameMusic() {
    if (gSoundItems.gameMusic) {
        gSoundItems.gameMusic.pause()
        gSoundItems.gameMusic.currentTime = 0
        gSoundItems.gameMusic = null
    }
}

function playCorrect() {
    const correctSound = new Audio("sounds/fx/correct.mp3")
    correctSound.volume = getSoundValue() ? 0.4 : 0
    correctSound.play()
}

function playWrong() {
    const wrongSound = new Audio("sounds/fx/wrong.mp3")
    wrongSound.volume = getSoundValue() ? 0.35 : 0
    wrongSound.play()
}

function playItemName() {
    if (gIsItemPlay) return
    gIsItemPlay = true

    return new Promise((resolve, reject) => {
        const itemAudioUrl = getItemAudioUrl()
        gSoundItems.itemName = new Audio(itemAudioUrl)

        gSoundItems.itemName.volume = getSoundValue() ? 0.8 : 0

        gSoundItems.itemName.play()

        gSoundItems.itemName.onended = () => {
            gIsItemPlay = false
            resolve()
        }
        gSoundItems.itemName.onerror = (error) => {
            console.error('Error playing audio:', error)
            gIsItemPlay = false
            reject(error)
        }
    })
}

function playWinMusic() {
    gSoundItems.cheering = new Audio("sounds/fx/cheering.mp3")
    gSoundItems.cheering.volume = getSoundValue() ? 0.3 : 0
    gSoundItems.cheering.play()

    gSoundItems.winMusic = new Audio("sounds/background_music/win_music.mp3")
    gSoundItems.winMusic.loop = true
    gSoundItems.winMusic.volume = 0.1
    gSoundItems.winMusic.play()

    let targetVolume = 0.4
    let fadeInInterval = 300
    let fadeInStep = targetVolume / (3000 / fadeInInterval)

    gWinMusicInterval = setInterval(() => {
        if (getSoundValue()) {
            gSoundItems.winMusic.volume = Math.min(gSoundItems.winMusic.volume + fadeInStep, targetVolume)
        }
        if (gSoundItems.winMusic.volume >= targetVolume) {
            clearInterval(gWinMusicInterval)
        }
    }, fadeInInterval)
}

function stopWinMusic() {
    if (gSoundItems.winMusic) {
        clearInterval(gWinMusicInterval)
        gSoundItems.winMusic.pause()
        gSoundItems.winMusic.currentTime = 0
        gSoundItems.winMusic = null
    }

    if (gSoundItems.cheering) {
        gSoundItems.cheering.pause()
        gSoundItems.cheering.currentTime = 0
        gSoundItems.cheering = null
    }
}

function muteSound() {
    for (let key in gSoundItems) {
        if (gSoundItems[key]) {
            gSoundItems[key].volume = 0
        }
    }
}

function unMuteSound() {
    if (gSoundItems.menuMusic) {
        gSoundItems.menuMusic.volume = 0.4
    }
    if (gSoundItems.gameMusic) {
        gSoundItems.gameMusic.volume = 0.5
    }
    if (gSoundItems.winMusic) {
        gSoundItems.winMusic.volume = 0.3
    }
    if (gSoundItems.cheering) {
        gSoundItems.cheering.volume = 0.3
    }
    if (gSoundItems.itemName) {
        gSoundItems.itemName.volume = 0.8
    }
}







