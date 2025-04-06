if (typeof window !== undefined) {
    console.log("WINDOW:::", window)
} else {
    console.log("GLOBAL", global)
}


const promptAns = prompt('What\'s your username?')
if (promptAns) {
    console.log(`Welcome, ${promptAns}!`)
} else {
    throw new Error ('No username was given. Sorry!')
}

const confirmAns = confirm('Would you like to continue?')
if (confirmAns) {
    const confirmedAns = alert('Good choice on choosing to continuing!')
} else {
    const rejectedAns = alert('Awh! You chose not to continue. Maybe next time!')
}

console.log(innerWidth)
console.log(innerHeight)

console.log(`The page will reload soon.`)

setTimeout(() => {
    window.location.reload()
}, 10000);
