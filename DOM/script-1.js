// console.log("Hello, My name is Mohamad Hishmeh, but call me Goofy for short.")

if (typeof window !== undefined) {
    console.log("WINDOW:::", window)
} else {
    console.log("GLOBAL", global)
}

/**
 * ALERT
 */

// const alertAns = window.alert('THE GUY BEHIND ME TO THE RIGHT IS RETARDEDDDD!!!')
// console.log("alertAns", alertAns) // undefined


/**
 * PROMPT
 */
// const promptAns = prompt('What are the chances Moe\'s paying attention and not on Twitter/Reddit/AOTA - GUESS - 0 THROUGH 10, 10 being ofc hes locked in')
// console.log("promptAns", promptAns)

/**
 * CONFIRM
 */
// const confirmAns = confirm('Are you Retarded?')
// console.log('confirmAns', confirmAns)


/**
 * localStorage()
 */

const storageLen = localStorage.length;
console.log('storageLen', storageLen);

localStorage.setItem('username', 'abc123');
console.log('storageLen', storageLen)

const userName = localStorage.getItem('username')
console.log('username', userName)

localStorage.removeItem('username')
console.log('storageLen', storageLen)

localStorage.setItem('username', 'joe')
localStorage.setItem('password', 'abc123')

localStorage.clear

localStorage.setItem('userInfo', {name: 'Alex', email: 'alex@gmail.com'})
localStorage.setItem('userInfo', JSON.stringify({name: 'Alex', email:'alex@gmail.com'}))
const userInfo = localStorage.getItem('userInfo')
const userInfoObj = JSON.parse(localStorage.getItem('userInfo'))
console.log('userInfo', userInfo)
console.log('userInfoObj', userInfoObj)