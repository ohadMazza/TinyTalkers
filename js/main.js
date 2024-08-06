"use strict"

let gViewMode
let gLevel = 0
let isFirstLoad = true
let gIsSoundOn = false
let gCurrItems = null
let gQuests = []
let gQuestType
let gCurrQuestion = []
let gCurrQuestIdx = 0
let gIsChooseAnswer = false
let gCurrLang = 'en'

let gShakeInterval
let gWinBtnInterval


const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', updateModeIcon)
updateModeIcon()


function updateModeIcon() {
    gViewMode = mediaQuery.matches ? "_dark" : ""

    document.querySelector('.sound-btn img').src = `img/icons/music_off${gViewMode}.png`
}


function onInit() {
    console.log("this version 1")
    renderLangText()
    onClickHomePage()
}

function renderLangText() {
    if (window.innerWidth > 768) {
        document.querySelector('.lang-en').innerText = 'English'
        document.querySelector('.lang-he').innerText = 'עברית'
    }
}

function onClickHomePage() {
    gLevel = 0

    document.querySelector('.learn-english-container').classList.remove('animate__fadeOutLeft')
    document.querySelector('.container').classList.remove('animate__fadeOutDownBig')

    stopGameMusic()
    stopWinMusic()

    if (!isFirstLoad) playMenuMusic()

    document.querySelector(`.container`).style.display = "block"
    document.querySelector(`.learn-english-container`).style.display = "block"
    document.querySelector(`.table-container`).style.display = "none"
    document.querySelector(`.win-modal`).style.display = "none"

    document.querySelector('.learn-english-container').classList.add('animate__bounceInDown')
    document.querySelector('.container').classList.add('animate__bounceInRight')

    setTimeout(() => {
        document.querySelector('.learn-english-container').classList.remove('animate__bounceInDown')
        document.querySelector('.container').classList.remove('animate__bounceInRight')
    }, 2000)

    gShakeInterval = setInterval(shakeImg, 9000)
}

function onClickSound() {
    const elImg = document.querySelector(".sound-btn img")

    if (gIsSoundOn) {
        elImg.src = `img/icons/music_off${gViewMode}.png`
        gIsSoundOn = !gIsSoundOn
        muteSound()
    } else {
        if (isFirstLoad) {
            playMenuMusic()
            isFirstLoad = !isFirstLoad
        }
        elImg.src = `img/icons/music_on${gViewMode}.png`
        gIsSoundOn = !gIsSoundOn
        unMuteSound()
    }
}

function onClickQuestType(questType) {
    gQuestType = questType
    initGame()
}

function initGame() {
    if (isFirstLoad) isFirstLoad = !isFirstLoad
    gCurrItems = getItems(gQuestType)

    clearInterval(gShakeInterval)

    document.querySelector('.learn-english-container').classList.add('animate__fadeOutLeft')

    setTimeout(() => {
        document.querySelector('.container').classList.add('animate__fadeOutDownBig')
    }, 200)

    setTimeout(() => {
        document.querySelector('.learn-english-container').style.display = "none"
        document.querySelector('.container').style.display = "none"
    }, 800)

    setTimeout(() => {
        loadGame()
    }, 1100)
}

function onClickPlayAgain() {
    clearInterval(gWinBtnInterval)
    if (gLevel > gCurrItems.length) gLevel = 0

    document.querySelector('.win-modal').classList.add('animate__bounceOut')

    setTimeout(() => {
        document.querySelector(`.win-modal`).style.display = "none"
        document.querySelector('.win-modal').classList.remove('animate__bounceOut')
        stopGameMusic()
        stopWinMusic()
        loadGame()
    }, 1200)
}

function loadGame() {
    gQuests = []
    gCurrQuestIdx = 0

    document.querySelector(".table-container").style.display = "block"
    document.querySelector('.table-container').classList.add('animate__zoomIn')

    createQuests()
    creteQuestOptions()
    stopMenuMusic()
    playGameMusic()
    renderQuest()

    setTimeout(() => {
        document.querySelector('.table-container').classList.remove('animate__zoomIn')
    }, 2000)
}

function createQuests() {
    gLevel += 10

    const countQuestions = gLevel > gCurrItems.length ? gCurrItems.length : gLevel
    for (let i = 0; i < 10; i++) {
        const currIdx = getRandomIntInclusive(0, countQuestions - 1)
        const currItem = { ...gCurrItems[currIdx] }

        if (!gQuests.some(item => item.id === currItem.id)) {
            currItem.isCorrect = true
            gQuests.push(currItem)
        }
        else i--
    }
}

function creteQuestOptions() {
    gCurrQuestion = [gQuests[gCurrQuestIdx]]

    for (let i = 0; i < 3; i++) {
        const currIdx = getRandomIntInclusive(0, gCurrItems.length - 1)
        const currItem = { ...gCurrItems[currIdx] }

        if (!gCurrQuestion.some(item => item.id === currItem.id)) gCurrQuestion.push(currItem)
        else i--
    }
    shuffleArray(gCurrQuestion)
}

function renderQuest() {
    document.querySelector('.quest-number').innerText = ""

    const imagePromises = []
    document.querySelector('.animal-name').innerText = ""

    for (let i = 1; i <= 4; i++) {
        const elImg = document.querySelector(`.img${i}`)
        const imgSrc = gCurrQuestion[i - 1].imgUrl

        elImg.style.visibility = 'hidden'

        imagePromises.push(new Promise((resolve) => {
            elImg.onload = () => resolve(elImg)
            elImg.src = imgSrc
        }))
    }

    Promise.all(imagePromises)
        .then((loadedImages) => {
            loadedImages.forEach((el) => {
                el.style.visibility = 'visible'
            })

            document.querySelector('.animal-name').innerText = gQuests[gCurrQuestIdx].text[gCurrLang]

            setTimeout(() => {
                document.querySelector('.quest-number').innerText = gCurrQuestIdx + 1
                document.querySelector('.quest-number').classList.add('animate__flipInY')
            }, 180)

            if (gQuestType === 'colors') {
                loadedImages.forEach((el) => {
                    el.classList.add('colors')
                })
            } else {
                loadedImages.forEach((el) => {
                    el.classList.remove('colors')
                })
            }
            return playItemName()
        })
        .catch((error) => {
            console.error("Error loading images:", error)
        })

    setTimeout(() => {
        document.querySelector('.quest-number').classList.remove('animate__flipInY')
    }, 800)
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
    }
}

function onOptClicked(optIdx) {
    if (gIsChooseAnswer) return
    gIsChooseAnswer = true
    checkAnswer(optIdx)

    setTimeout(() => {
        gIsChooseAnswer = false
    }, 730)
}

function checkAnswer(optIdx) {
    const elTd = document.querySelector(`.td${optIdx + 1}`)
    if (gCurrQuestion[optIdx].isCorrect) {
        gCurrQuestIdx++
        playCorrect()
        elTd.classList.add('td-correct')

        setTimeout(() => {
            elTd.classList.remove('td-correct')
        }, 700)

        setTimeout(loadNextQuest, 1000)
    } else {
        playWrong()
        elTd.classList.add('td-wrong')
        setTimeout(() => {
            elTd.classList.remove('td-wrong')
        }, 700)
    }

}

function loadNextQuest() {
    if (gCurrQuestIdx < 10) {
        creteQuestOptions()
        renderQuest()
    }
    else {
        showWinModal()
    }
}

function shakeImg() {
    const animations = ['bounce', 'rubberBand', 'shakeX', 'swing', 'tada', 'jello']
    const currAnimationIdx = getRandomIntInclusive(0, 5)

    document.querySelector('.learn-english-container').classList.add(`animate__${animations[currAnimationIdx]}`)

    setTimeout(() => {
        document.querySelector('.learn-english-container').classList.remove(`animate__${animations[currAnimationIdx]}`)
    }, 4000)
}

function getItemAudioUrl() {
    return gQuests[gCurrQuestIdx].audioUrl[gCurrLang]
}

function onChangeLange(ev) {
    gCurrLang = ev.target.value
    onClickHomePage()
}

function onVolClicked() {
    document.querySelector('.vol-icon').classList.add('vol-icon-big')
    setTimeout(() => {
        document.querySelector('.vol-icon').classList.remove('vol-icon-big')
    }, 700)
    playItemName()
}

function showWinModal() {
    stopGameMusic()
    document.querySelector(`.table-container`).style.display = "none"
    document.querySelector(`.win-modal`).style.display = "flex"
    playWinMusic()

    const elBtn = document.querySelector('.play-again-btn')
    elBtn.innerText = gLevel > gCurrItems.length ? "Play Again!" : "Next Level!"

    gWinBtnInterval = setInterval(() => {
        document.querySelector('.play-again-btn').classList.add('animate__heartBeat')
        setTimeout(() => {
            document.querySelector('.play-again-btn').classList.remove('animate__heartBeat')
        }, 2000)
    }, 3000)
}

function getSoundValue() {
    return gIsSoundOn
}






