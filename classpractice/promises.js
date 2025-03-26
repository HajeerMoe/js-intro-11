function gotoCarvana() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Carvana website is loaded...');
        resolve()
      }, 500);
    });
  }

  function clickOnFinancing() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Carvana financing page is loaded...');
        resolve()
      }, 1000);
    });
  }

  function validateHeading(expected) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${expected} heading is loaded...`);
        resolve()
      }, 750);
    });
  }


  function test1() { //FIRST WAY OF DOING IT 
    gotoCarvana().then(() => {
        clickOnFinancing().then(() => {
            validateHeading('FINANCING MADE EASY')
        })
    })
  }

test1()


function test2() {
    gotoCarvana()
    .then(() => clickOnFinancing())
    .then(() => validateHeading('FINANCING MADE EASY'))
}

fetch('https://api.techglobal-training.com/instructors') //fetch returns promise, if it returns a promise you should use then 
.then((res) => { //used then to return a response
    const data = res.json() //res.json is a promise aswell so we use another .then
    return data
})
.then((data) => { //this is the other .then we used
    console.log(data)
})

.catch(err => console.log(err))



