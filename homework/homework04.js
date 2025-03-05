console.log('=-=-=-=-=-=-=-=-= TASK 1 =-=-=-=-=-=-=-=-=')
for (let i = 1; i <= 100; i++) { // Returns all numbers div. by 7 (1-100 only)
    if (i % 7 === 0) {
        console.log(i)
    }
}

console.log('=-=-=-=-=-=-=-=-= TASK 2 =-=-=-=-=-=-=-=-=')
for (let i = 1; i <= 50; i++) { //Returns all numbers div by 2 & 3 (1-50 only)
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i)
    }
}

console.log('=-=-=-=-=-=-=-=-= TASK 3 =-=-=-=-=-=-=-=-=')
for (let i = 100; i >= 50; i--) { //Returns all numbers div. by 5 (100 down to 50)
    if (i % 5 === 0) {
        console.log(i)
    }
}

console.log('=-=-=-=-=-=-=-=-= TASK 4 =-=-=-=-=-=-=-=-=')
for (let i = 0; i <= 7; i++) { //Returns squares of all numbers from 1-7
    let answer = i ** 2
    console.log(`The square of ${i} is =  ${answer}`)
}

console.log('=-=-=-=-=-=-=-=-= TASK 5 =-=-=-=-=-=-=-=-=')
let sum = 0  //Returns the sum of 1-10 (1+2+3+...+10)
for (let i = 0; i <= 10; i++) {
    sum += i
}
console.log(sum)

console.log('=-=-=-=-=-=-=-=-= TASK 6 =-=-=-=-=-=-=-=-=')
let randNum = Math.floor(Math.random() * 10) + 1 
let factorialCount = 1;
for (let i = randNum; i > 0; i--) {
    factorialCount *= i
}
console.log(`${randNum} ${factorialCount}`)

console.log('=-=-=-=-=-=-=-=-= TASK 7 =-=-=-=-=-=-=-=-=')
let randomNum = Math.floor(Math.random() * 100) + 1 
let attempts = 1
while (randomNum % 5 !== 0) { // 10 % 5 = 0
    randomNum = Math.floor(Math.random() * 100) + 1 
    attempts++ 
    console.log(`Attempt Number ${attempts - 1}, the random Number is: ${randomNum}`)
}

let grammar = (attempts === 1) ? 'attempt' : 'attempts'
console.log(`The random number is ${randomNum} and it took ${attempts} ${grammar} to generate it.`)

console.log('=-=-=-=-=-=-=-=-= TASK 8 =-=-=-=-=-=-=-=-=')
const countryArr = ['Germany', 'Argentina', 'Ukraine', 'Romania' ] //sorts arr lexicographically
const sortedCountryArr = [...countryArr].sort()
console.log(countryArr)
console.log(sortedCountryArr)


console.log('=-=-=-=-=-=-=-=-= TASK 9 =-=-=-=-=-=-=-=-=')
const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky']
console.log(cartoonDogs.includes('Pluto'))


console.log('=-=-=-=-=-=-=-=-= TASK 10 =-=-=-=-=-=-=-=-=')
const cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael']
sortedCartoonCats = [...cartoonCats].sort()
console.log(sortedCartoonCats)
console.log(cartoonCats.includes('Garfield') && cartoonCats.includes('Felix'))


console.log('=-=-=-=-=-=-=-=-= TASK 11 =-=-=-=-=-=-=-=-=')
const nums = [ 10.5, 20.75, 70, 80, 15.75 ]
console.log(nums)
for (const num of nums) {
    console.log(num)
}

console.log('=-=-=-=-=-=-=-=-= TASK 12 =-=-=-=-=-=-=-=-=')
/*-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 
*/
const schoolSupplies = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
let BPCount = 0
let bookPenCount = 0
for (const i in schoolSupplies) {
    schoolSupplies[i] = schoolSupplies[i].toUpperCase()
}
for (let i = 0; i < schoolSupplies.length; i++) {
    if (schoolSupplies[i][0] === ('B') || schoolSupplies[i][0] === ('P')) {
        BPCount++;
    } 
}
for (const i in schoolSupplies) {
    if (schoolSupplies[i].indexOf('BOOK') !== -1 || (schoolSupplies[i].indexOf('PEN') !== -1)) {
        bookPenCount++
    }
}

console.log(schoolSupplies)
console.log(BPCount)
console.log(bookPenCount)




console.log('=-=-=-=-=-=-=-=-= TASK 13 =-=-=-=-=-=-=-=-=')
const arr = [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
let moreThan10Cnt = 0
let lessThan10Cnt = 0
let Count10 = 0
for (const num in arr) {
    if (arr[num] > 10) {
        moreThan10Cnt++
    } else if (arr[num] < 10) {
        lessThan10Cnt++
    } else if (arr[num] === 10) {
        Count10++
    }
}

console.log(arr)
console.log(moreThan10Cnt)
console.log(lessThan10Cnt)
console.log(Count10)

console.log('=-=-=-=-=-=-=-=-= TASK 14 =-=-=-=-=-=-=-=-=')
const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];
const newArray = []
for (let i = 0; i < arr1.length; i++) {
    (arr1[i] > arr2[i] ? newArray.push(arr1[i]) : newArray.push(arr2[i]))
}
console.log(newArray)

console.log('=-=-=-=-=-=-=-=-= TASK 15 =-=-=-=-=-=-=-=-=')
const firstDuplicate = arr => {                                        
    let seenSet = new Set()
    for (const num of arr) {
        if (seenSet.has(num)) {
            return (num)
        } 
        seenSet.add(num)
    }
    return -1
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])) // 3
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ])) // -> 5                     
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))	// -> -1
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))	// -> 'abc'
console.log(firstDuplicate([ 1, 2, 3]))	//	-> -1
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ])) // -> -1

console.log('=-=-=-=-=-=-=-=-= TASK 16 =-=-=-=-=-=-=-=-=')
const getDuplicates = arr => {                                         
    let seenSet = new Set()
    let duplicates = []
    for (const num of arr) {
        if (seenSet.has(num) && !duplicates.includes(num)) {
            duplicates.push(num)
        } else {
            seenSet.add(num)
        } 
    } 
    return duplicates
}
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])) // 		-> [ 0, -7 ]
console.log(getDuplicates([ 1, 2, 5, 0, 7 ])) //			-> [ ]
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo' ])) //	-> [ 'foo', 'a’ ]
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])) //		-> [ ]

console.log('=-=-=-=-=-=-=-=-= TASK 17 =-=-=-=-=-=-=-=-=')
const reverseStringWords = str => {
    const strToArr = str.split(" ")
    let newStr = ''
    if (str.trim() === '') {
        return ''
    } else {
        for (let i = 0; i < strToArr.length; i++) {
            newStr += strToArr[i].split('').reverse().join('') + ' '
        }
    }
    return newStr
}

console.log(reverseStringWords("Hello World")) // 		-> "olleH dlroW"
console.log(reverseStringWords("I like JavaScript")) //  	-> "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello")) // 		-> "olleH"
console.log(reverseStringWords("")) // 			-> ""
console.log(reverseStringWords("    ")) // 		-> ""


console.log('=-=-=-=-=-=-=-=-= TASK 18 =-=-=-=-=-=-=-=-=')
const getEvens = (num1, num2) => { 
    const evenArr = []
    let smallNum = Math.min(num1, num2)
    let bigNum = Math.max(num1, num2)
    for (let i = smallNum; i <= bigNum; i++) {
        if (i % 2 === 0) {
            evenArr.push(i)
        }
    }
    return evenArr
}

console.log(getEvens(2, 7)) // -> [ 2, 4, 6 ]
console.log(getEvens(17, 5)) //	-> [ 6, 8, 10, 12, 14, 16 ]
console.log(getEvens(4, 4)) //	-> [ 4 ]
console.log(getEvens(3, 3)) //	-> [ ]

console.log('=-=-=-=-=-=-=-=-= TASK 19 =-=-=-=-=-=-=-=-=')
const getMultipleOf5 = (num1, num2) => { // 3, 17
    let smallNum = Math.min(num1, num2)
    let bigNum = Math.max(num1, num2)
    let mulOf5Arr = []
    for (let i = smallNum; i <= bigNum; i++) {
        if (i % 5 === 0) mulOf5Arr.push(i)
    }
    return (num1 > num2) ? mulOf5Arr.reverse() : mulOf5Arr
}
console.log(getMultipleOf5(3, 17))	// -> [ 5, 10, 15]
console.log(getMultipleOf5(23, 5))	// -> [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5))	// -> [ 5 ]
console.log(getMultipleOf5(2, 4))	// -> [ ]

console.log('=-=-=-=-=-=-=-=-= TASK 20 =-=-=-=-=-=-=-=-=')
const fizzBuzz = (num1, num2) => {
    let answer = []
    let smallNum = Math.min(num1, num2)
    let bigNum = Math.max(num1, num2)
    for (let i = smallNum; i <= bigNum; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push('FizzBuzz')
        } else if (i % 3 === 0) {
            answer.push('Fizz')
        } else if (i % 5 === 0) {
            answer.push('Buzz')
        } else {
            answer.push(i)
        }
    }
    return answer.join(' | ')
}
console.log(fizzBuzz(13, 18))//	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
console.log(fizzBuzz(12, 5))//	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
console.log(fizzBuzz(5, 5))//	-> "Buzz"
console.log(fizzBuzz(9, 6))// 	-> "Fizz | 7 | 8 | Fizz"