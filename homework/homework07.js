console.log('=-=-=-=-=-=-=-=-= TASK 1 =-=-=-=-=-=-=-=-=')
/* Write a function named hasUpperCase() which takes a string argument and 
 return true if there is an uppercase letter and false otherwise. */
const hasUpperCase = str => /[A-Z]/.test(str)

console.log(hasUpperCase("javascript")) // -> false
console.log(hasUpperCase("John")); // → true
console.log(hasUpperCase("$125.0")); // → false
console.log(hasUpperCase("")); // → false


console.log('=-=-=-=-=-=-=-=-= TASK 2 =-=-=-=-=-=-=-=-=')
/* Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string */
const noDigit = str => {
    newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (!(/[\d]/.test(str[i]))) {
            newStr += str[i]
        }
    }
    return newStr
}
console.log(noDigit("")) //  -> ""
console.log(noDigit("Javascript")) //  -> "Javascript"
console.log(noDigit("123Hello")) //  -> "Hello"
console.log(noDigit("123Hello World149")) //  -> "Hello World”
console.log(noDigit("123Tech456Global149")) //  -> "TechGlobal"


console.log('=-=-=-=-=-=-=-=-= TASK 3 =-=-=-=-=-=-=-=-=')
/* Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string */
const noVowel = str => {
    newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (!(/[aeiou]/i.test(str[i]))) {
            newStr += str[i]
        }
    }
    return newStr
}

console.log(noVowel("TechGlobal")) //  -> "TchGlbl"
console.log(noVowel("AEOxyz")) //  -> "xyz"
console.log(noVowel("Javascript")) //  -> "Jvscrpt"
console.log(noVowel("")) //  -> ""
console.log(noVowel("125$")) //  -> "125$"


console.log('=-=-=-=-=-=-=-=-= TASK 4 =-=-=-=-=-=-=-=-=')
/* Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s. */
const no13 = arr => {
    newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 13)
            newArr.push(arr[i])
        if(arr[i] === 13) {
            newArr.push(0)
        }
    }
    return newArr
}


console.log(no13([1, 2, 3 ,4])) //  -> [1, 2, 3 ,4] 
console.log(no13([13, 2, 3])) //  -> [0, 2, 3]
console.log(no13([13, 13, 13 , 13, 13])) //  -> [0, 0, 0, 0, 0]
console.log(no13([])) //  -> []


console.log('=-=-=-=-=-=-=-=-= TASK 5 =-=-=-=-=-=-=-=-=')
// Write a function named middleInt() which takes three number arguments and return the middle number.  
const middleInt = (num1, num2, num3) => {
    const nums = []
    nums.push(num1), nums.push(num2), nums.push(num3)
    nums.sort((a,b) => a - b)
    return nums[1]
}
console.log(middleInt(1, 2, 2)) //  -> 2
console.log(middleInt(5, 5, 8)) //  -> 5
console.log(middleInt(5, 3, 5)) //  -> 5
console.log(middleInt(1, 1, 1)) //  -> 1
console.log(middleInt(-1, 25, 10)) //  -> 10


console.log('=-=-=-=-=-=-=-=-= TASK 6 =-=-=-=-=-=-=-=-=')
// Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. 
const sumOfDigits = str => {
    digits = 0;
    for (let i = 0; i < str.length; i++) {
        if (/[\d]/.test(str[i])) {
            digits += Number(str[i])
        }
    }
    return digits
} 
console.log(sumOfDigits("Javascript")) //  -> 0
console.log(sumOfDigits("John’s age is 29")) //  -> 11
console.log(sumOfDigits("$125.0")) //  -> 8
console.log(sumOfDigits("")) //  -> 0
console.log('=-=-=-=-=-=-=-=-= TASK 7 =-=-=-=-=-=-=-=-=')
/* Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials */
const arrFactorial = arr => {
    const factored = arr.map(num => {
        let factorial = 1
        for (let i = num; i > 0; i--) {
            factorial *= i 
        }
        return factorial
    })
    return factored
}
console.log(arrFactorial([1, 2, 3 ,4])) //  ->  [1, 2, 6, 24]
console.log(arrFactorial([0, 5])) //  -> [1,120]
console.log(arrFactorial([5 , 0, 6])) //  -> [120, 1, 720]
console.log(arrFactorial([])) //  -> []


console.log('=-=-=-=-=-=-=-=-= TASK 8 =-=-=-=-=-=-=-=-=')
/* Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. */
const categorizeCharacters = str => {
    const [letters, numbers, special] = [[], [], []]
    for (let i = 0; i < str.length; i++) {
        if (/[a-z]/i.test(str[i])) {
            letters.push(str[i])
        }
        else if (/[\d]/i.test(str[i])) {
            numbers.push(str[i])
        }
        else {
            special.push(str[i])
        }
    }
    return [letters.join(''), numbers.join(''), special.join('')]
}

console.log(categorizeCharacters("1234")) //  -> [ '' , '1234', '' ] 
console.log(categorizeCharacters("abc123$#%")) //  -> [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%")) //  -> [ 'abc', '123', '$%%' ]