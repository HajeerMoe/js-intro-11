class Person {
    constructor(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    }
    eat(str = 'food') {
        console.log(`Person eats ${str}`)
    }
    sleep(num = 8) {
        console.log(`Person sleeps ${num} hours.`)
    }
    walk() {
        return true
    }
}

module.exports = Person //EXPORTS PERSON TO BE USED ELSEWHERE