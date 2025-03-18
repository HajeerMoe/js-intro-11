const Person = require('./Person') //IMPORTS PERSON FROM Person.js

class Programmer extends Person{ //extends Person grabs everything from Person and adds it onto Programmer (EX: eat, sleep, walk)
    constructor(fullname, age, companyName) {
        super(fullname, age) //Parent Class Constructor (Grabs fullname and age from Person.js (ELSE it'll give Reference Error)) - Must be on top before this.companyName
        this.companyName //Company is specific to programmer so it can have this keyword
    }
    code(language) {
        console.log(`${this.fullname} codes in ${language}`)
    }
}

module.exports = Programmer
