

function gotoCarvana() {
    setTimeout(() => {
        console.log('Carvana website is loaded...')
    }, 500)
}

function clickOnFinancing() {
    setTimeout(() => {
        console.log('Carvana financing page is loaded...')
    }, 1000)
}

function validateHeading(expected) {
    setTimeout(() => {
        console.log(`${expected} heading is loaded...`)
    }, 750)
}

function test1() {
    gotoCarvana()
    clickOnFinancing()
    validateHeading('FINANCING MADE EASY')
}