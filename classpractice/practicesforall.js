//Practicing Asynchronous Operations / Code - All 3 ways - Callbacks, promises, and async-await


//CALLBACKS (BEFORE ES6)
function gotoAmazon1(callback, err) {
    const bool = true
    setTimeout(() => {
        if (bool) {
            console.log(`Amazon has loaded...`)
            callback()
        }
        else err()
    }, 500)
}

function clickOnLocationHeaderItem1(callback, err) {
    const bool = true
    setTimeout(() => {
        if (bool) {
            console.log(`Location header item is clicked...`)
            callback()
        }
        else err()
    }, 200)
}

function validateDialogIsVisible1(callback, err) {
    const bool = true
    setTimeout(() => {
        if (bool) {
            console.log(`Dialog is visible...`)
            callback()
        }
        else err()
    }, 300);
}

function test1() {
    gotoAmazon1(() => {
        clickOnLocationHeaderItem1(() => {
            validateDialogIsVisible1(() => {
                console.log(`Location Dialog Visibility Test Case has passed`)
            },
            () => {
                console.log(`Location Dialog Visibility Test Case has failed`)
            })
        },
    () => {
        console.log(`Header location item FAILED`)
    })
    },
    () => {
        console.log(`Going to amazon FAILED`)
    })

}
//test1()



// AFTER ES6 - using promises with then-catch methods
function gotoAmazon2() {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            let bool = true
            if(bool) {
                console.log(`Amazon has loaded...`)
                resolve()
            }
            else {
                reject(`ERROR: Going to amazon FAILED`)
            }
        }, 500)
    })
}

function clickOnLocationHeaderItem2() {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            let bool = true
            if(bool) {
                console.log(`Location header item is clicked...`)
                resolve()
            }
            else {
                reject(`Location header item failed`)
            }
        }, 200)
    }) 
}

function validateDialogIsVisible2() {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            let bool = true
            if(bool) {
                console.log(`Location dialog is visible...`)
                resolve()
            }
            else {
                reject(`ERROR: Location dialog has failed!`)
            }
        }, 300)
    })
}

function test2() {
    gotoAmazon2()
        .then(() => clickOnLocationHeaderItem2())
        .then(() => validateDialogIsVisible2())
        .catch((err) => console.log(err))
}

test2()


// AFTER ES6 - using promises with async-await keywords
async function test3() {
    try {
      await gotoAmazon2();
      await clickOnLocationHeaderItem2();
      await validateDialogIsVisible2();
    }
    catch(err) {
      console.log(err);
    }
  }
  
  test3();


// 3/23/25
  // JS MODULES
  // CommonJS Modules - (Mostly used rn: CommonJS (module.exports, require))
  // ES6 Modules - (export, import)


  /*
  NodeJS
  NPM - Node Package Manager

  We can install, update, or uninstall some external packages/libraries using NPM
  */
