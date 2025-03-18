console.log('=-=-=-=-=-=-=-=-= TASK 1 =-=-=-=-=-=-=-=-=')
/* Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed. */
const noSpace = str => {
    let newStr = ""
    for (let char of str) {
        if (char !== ' ') {
            newStr += char
        }
    }
    return newStr
}
console.log(noSpace("")); // → ""
console.log(noSpace("Javascript")); // → "Javascript"
console.log(noSpace("    Hello   ")); // → "Hello"
console.log(noSpace(" Hello World   ")); // → "HelloWorld"
console.log(noSpace("Tech Global")); // → "TechGlobal"






console.log('=-=-=-=-=-=-=-=-= TASK 2 =-=-=-=-=-=-=-=-=')
/* Write a function named replaceFirstLast() which takes a string argument and returns a 
new string with the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/
const replaceFirstLast = str => {
    if (str.trim().length < 2) {
        return ""
    } else {
        let newStr = str.at(-1) + str.slice(1, -1) + str[0]
        return newStr
    }
}
console.log(replaceFirstLast("")); // → ""
console.log(replaceFirstLast("Hello")); // → "oellH"
console.log(replaceFirstLast("Tech Global")); // → "lech GlobaT"
console.log(replaceFirstLast("A")); // → ""
console.log(replaceFirstLast("    A      ")); // → ""





console.log('=-=-=-=-=-=-=-=-= TASK 3 =-=-=-=-=-=-=-=-=')
/* Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, 
returns false if the string doesn’t contain any vowel letter. 
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
*/
const hasVowel = str => /[aeiou]/i.test(str)

console.log(hasVowel("")); // → false
console.log(hasVowel("Javascript")); // → true
console.log(hasVowel("Tech Global")); // → true
console.log(hasVowel("1234")); // → false
console.log(hasVowel("ABC")); // → true





console.log('=-=-=-=-=-=-=-=-= TASK 4 =-=-=-=-=-=-=-=-=')
/* Write a function named checkAge() which takes a number argument to be considered as the yearOfBirth 
and returns a message below based on the given year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
*/
const checkAge = num => {
    if ((2023 - num) > 120 || (num > 2023)) {
        return "AGE IS NOT VALID"
    } else if ((2023 - num) >= 16 && (2023 - num) <= 120) {
        return "AGE IS ALLOWED"
    } else {
        return "AGE IS NOT ALLOWED"
    }
}

console.log(checkAge(2015)); // → "AGE IS NOT ALLOWED"
console.log(checkAge(2007)); // → "AGE IS ALLOWED"
console.log(checkAge(2050)); // → "AGE IS NOT VALID"
console.log(checkAge(1920)); // → "AGE IS ALLOWED"
console.log(checkAge(1800)); // → "AGE IS NOT VALID"





console.log('=-=-=-=-=-=-=-=-= TASK 5 =-=-=-=-=-=-=-=-=')
/* Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers​. */
const averageOfEdges = (num1, num2, num3) => {
    let max = Math.max(num1, num2, num3)
    let min = Math.min(num1, num2, num3)
    return ((max + min) / 2)
}

console.log(averageOfEdges(0, 0, 6)); // → 3
console.log(averageOfEdges(-2, -2, 10)); // → 4
console.log(averageOfEdges(-3, 15, -3)); // → 6
console.log(averageOfEdges(10, 13, 20)); // → 15





console.log('=-=-=-=-=-=-=-=-= TASK 6 =-=-=-=-=-=-=-=-=')
/* Write a function named noA() which takes an array of strings as argument and will return a 
new array with all elements starting with "A" or "a" replaced with "###". */

const noA = arr => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0].toLowerCase() === 'a') {
            newArr.push('###')
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(noA(["javascript", "hello", "123", "xyz"])) //	->  ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])) // 	->  ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])) // 	-> ["###", "###", "###", "###", "###"]





console.log('=-=-=-=-=-=-=-=-= TASK 7 =-=-=-=-=-=-=-=-=')
/* Write a function named no3and5() which takes an array of integer numbers as argument and will return a new array with elements replaced by conditions below.
If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101 */
const no3and5 = arr => arr.map(num => {
    if (num % 5 === 0 && num % 3 === 0) return('101')
    else if (num % 5 === 0) return 99
    else if (num % 3 === 0) return 100
    else return num
})

console.log(no3and5([7, 4, 11, 23, 17])); // → [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6])); // → [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])); // → [99, 11, 100, 13, 14, 101]




console.log('=-=-=-=-=-=-=-=-= TASK 8 =-=-=-=-=-=-=-=-=')
/* Write a function named countPrimes() which takes an array of integer numbers as argument and 
will return the number of the prime numbers in the given array. 
NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.
*/
const isPrime = num => {
    if (num <= 1) return false //Less than 2 (NOT PRIME)

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}
const countPrimes = arr => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            count++
        }
    }
    return count
}


console.log(countPrimes([-10, -3, 0, 1])); // → 0
console.log(countPrimes([7, 4, 11, 23, 17])); // → 4
console.log(countPrimes([41, 53, 19, 47, 67])); // → 5






console.log('=-=-=-=-=-=-=-=-= TASK 9 =-=-=-=-=-=-=-=-=')
/* Write a function named removeDuplicates() which takes an array argument and returns a new array with all the duplicates removed. */

const removeDuplicates = arr => {
    let arrCounter = []
    for (let num of arr) {
        if (!arrCounter.includes(num)) {
            arrCounter.push(num)
        } else {
            continue
        }
    }
    return arrCounter
}

console.log(removeDuplicates([1, 2, 5, 2, 3])); // → [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // → [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // → ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // → ["1", "2", "3"]






console.log('=-=-=-=-=-=-=-=-= TASK 10 =-=-=-=-=-=-=-=-=')
/* Write a method named isDateFormatValid() that takes a string as an argument and returns true if 
the given date is valid or returns false otherwise. Expected Format: nn/nn/nnnn 
So, it must be presented as <2digits>/<2digits>/<4digits> */
const isDateFormatValid = str => {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(str.trim())) return false

    const [month, day, year] = str.trim().split('/')
        if (month < 0 || month > 12) return false
        if (day < 0 || day > 30) return false
        else return true
}


console.log(isDateFormatValid("")); // → false
console.log(isDateFormatValid("15/30/2020")); // → false
console.log(isDateFormatValid("10-30-2020 ")); // → false
console.log(isDateFormatValid("10.30.2020")); // → false
console.log(isDateFormatValid("5/30/2020")); // → false
console.log(isDateFormatValid("05/30/2020 ")); // → true
console.log(isDateFormatValid("10/2/2020")); // → false
console.log(isDateFormatValid("10/02/2020 ")); // → true





console.log('=-=-=-=-=-=-=-=-= TASK 11 =-=-=-=-=-=-=-=-=')
/* Write a method named secondMax() takes an array argument and returns the second max number from the array. */
const secondMax = arr => {
    const filtered = [...new Set(arr)]
    if (filtered.length === 1) return filtered[0]
    let firstMax = Math.max(...filtered)
    filtered.pop(firstMax)
    return Math.max(...filtered)
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); // → 7
console.log(secondMax([3, 4, 5, 6])); // → 5
console.log(secondMax([10])); // → 10






console.log('=-=-=-=-=-=-=-=-= TASK 12 =-=-=-=-=-=-=-=-=')
/* Write a method named secondMin() takes an array argument and returns the second min number from the array. */
const secondMin = arr => {
    const filtered = [...new Set(arr)]
    if (filtered.length === 1) return filtered[0]
    
    filtered.sort((a,b) => a - b)
    return filtered[1]
}

console.log(secondMin([7, 4, 4, 4, 23, 23, 23])); // → 7
console.log(secondMin([3, 4, 5, 6])); // → 4
console.log(secondMin([10])); // → 10




console.log('=-=-=-=-=-=-=-=-= TASK 13 =-=-=-=-=-=-=-=-=')
/* Write a method named mostRepeated() takes an array argument and returns the most counted element from the array. */
const mostRepeated = arr => {
    const countMap = {}
    let maxCount = 0
    let mostSeen = null
    for (let i = 0; i < arr.length; i++) {
        if (countMap[arr[i]]) {
            countMap[arr[i]] += 1
        } else {
            countMap[arr[i]] = 1
        }
    }
    for (let key of Object.keys(countMap)) {
        if (countMap[key] > maxCount) {
            maxCount = countMap[key]
            mostSeen = key
        }
    }
    return mostSeen
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])); // → 4
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])); // → "pen"
console.log(mostRepeated([10])); // → 10
console.log(mostRepeated(["TechGlobal"])); // → "TechGlobal"