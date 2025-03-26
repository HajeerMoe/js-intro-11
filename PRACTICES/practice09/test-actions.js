import { Actions } from "./actions.js"
/*
Create a test method called as test1()
- Invoke visitUrl(), login() and validateTitle() synchronously in this method (use then() and catch() methods)
- Validate the output is as below

    OUTPUT:
    URL visited successfully
    Logged in successfully
    Title validated successfully
*/
/*
function test1() {
    Actions.visitURL('www.facebook.com')
    .then(res1 => {
        console.log(res1)
        return Actions.login('TechGlobal', 'Test1234')
    })
    .then(res2 => {
        console.log(res2)
        return Actions.validateTitle('Owner')
    })
    .then(res3 => {
        console.log(res3)
    })
    .catch(err => {
        console.log(err)
    })
}
test1()
*/

async function test2() {
    try {
        const res1 = await Actions.visitURL('www.facebook.com')
        console.log(res1)
        const res2 = await Actions.login('TechGlobal', 'Test1234')
        console.log(res2)
        const res3 = await Actions.validateTitle('Owner')
        console.log(res3)
    } catch (err) {
        console.log(err)
    }
}
test2()