console.log('=-=-=-=-=-=-=-=-= TASK 1 =-=-=-=-=-=-=-=-=')
/* Write a function named countPalindrome() which takes a string and returns 
the number of palindrome words.
Note: A palindrome word is a word that reads the same forwards and backwards. */
const countPalindrome = str => {
    let splitted = str.split(' ')
    let count = 0
    for (let i = 0; i < splitted.length; i++) {
        if (str === '') {
            return 0
        }
        else { 
            if (splitted[i].toLowerCase() === splitted[i].toLowerCase().split('').reverse().join('')) {
            count++
            }
        }
    }
    return count
}
console.log(countPalindrome("Mom and Dad")) // -> 2
console.log(countPalindrome("See you at noon")) // -> 1
console.log(countPalindrome("Kayak races attracts racecar drivers")) // -> 2
console.log(countPalindrome("")) // -> 0
console.log(countPalindrome("No palindrome here")) // -> 0
console.log('=-=-=-=-=-=-=-=-= TASK 2 =-=-=-=-=-=-=-=-=')
/* Write a function named sum() which takes an array of numbers and a boolean value as arguments.
It will return the sum of the numbers at even indexes if true, otherwise the sum at odd indexes. */
const sum = (arr, bool) => {
    let count = 0
    if (bool === true) {
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                count += arr[i]
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 !== 0) {
                count += arr[i]
        }
    }
}
    return count
}
console.log(sum([1, 5, 10], true)) // -> 11
console.log(sum([3, 7, 2, 5, 10], false)) // -> 12
console.log(sum([-1, 1, -2, 2], true)) // -> -3
console.log(sum([0, -1, 15, 1], false)) // -> 0
console.log(sum([1, 2, 3, 4, -4], true)) // -> 0
console.log('=-=-=-=-=-=-=-=-= TASK 3 =-=-=-=-=-=-=-=-=')
/* Write a function named nthChars() which takes a string and a number as arguments
and returns the string back with every nth character. */
const nthChars = (str, num) => {
    let newStr = ''
    for (let i = num - 1; i < str.length; i += num) {
        newStr += str[i]
    }
    return newStr
}
console.log(nthChars("Java", 2)) // -> "aa"
console.log(nthChars("JavaScript", 5)) // -> "St"
console.log(nthChars("Java", 3)) // -> "v"
console.log(nthChars("Hi", 4)) // -> ""
console.log(nthChars("0123456789", 2)) // -> "13579"
console.log('=-=-=-=-=-=-=-=-= TASK 4 =-=-=-=-=-=-=-=-=')
/* Write a function named canFormString() which takes two string arguments
and returns true if the second string can be formed by rearranging characters of the first.
Note: Case-insensitive and ignores white spaces. */
const canFormString = (str1, str2) => {
    const letterCount = {}
        for (let char of str1.toLowerCase()) {
            letterCount[char] = (letterCount[char] || 0) + 1
        }
    const cleanStr2 = str2.toLowerCase().replace(/\s+/g, '')
        for (let i = 0; i < cleanStr2.length; i++) {
            const letter = cleanStr2[i]
            if (!(letter in letterCount)) {
                return false
            } else if (letterCount[letter] === 0) {
                return false
            } else {
                letterCount[letter] -= 1
            }
        }
        return true
     
}
console.log(canFormString("Hello", "Hi")) // -> false
console.log(canFormString("programming", "gaming")) // -> true
console.log(canFormString("halogen", "hello")) // -> false
console.log(canFormString("CONVERSATION", "voices rant on")) // -> true
console.log(canFormString("12", "123")) // -> false
console.log('=-=-=-=-=-=-=-=-= TASK 5 =-=-=-=-=-=-=-=-=')
/* Write a function named isAnagram() which takes two string arguments
and returns true if they are anagrams. 
Note: Case-insensitive and ignores white spaces. */
const isAnagram = (str1, str2) => {
    const obj1 = {}, obj2 = {}
    const cleanStr1 = str1.toLowerCase().replace(/\s+/g, '')
    const cleanStr2 = str2.toLowerCase().replace(/\s+/g, '')
    for (let char of cleanStr1) {
        obj1[char] = (obj1[char] || 0) + 1
    }
    for (let char of cleanStr2) {
        obj2[char] = (obj2[char] || 0) + 1
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}
console.log(isAnagram("Apple", "Peach")) // -> false
console.log(isAnagram("listen", "silent")) // -> true
console.log(isAnagram("astronomer", "moon starer")) // -> true
console.log(isAnagram("CINEMA", "iceman")) // -> true
console.log(isAnagram("123", "1234")) // -> false
console.log('=-=-=-=-=-=-=-=-= TASK 6 =-=-=-=-=-=-=-=-=')
/* Write a function named count() which takes an array of numbers and a boolean value.
Returns the total count of even numbers if true, or odd numbers if false. */
const count = (arr, bool) => {
    let count = 0
    if (bool === true) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                count++
            }
        }
    }
    if (bool === false) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                count++
            }
        }
    }
    return count
}
console.log(count([1, 5, 10], true)) // -> 1
console.log(count([3, 7, 2, 5, 10], false)) // -> 3
console.log(count([-1, 1, -2, 2], true)) // -> 2
console.log(count([0, -1, 15, 1], false)) // -> 3
console.log(count([1, 2, 3, 4, -4], true)) // -> 3
console.log('=-=-=-=-=-=-=-=-= TASK 7 =-=-=-=-=-=-=-=-=')
/* Write a function named sumDigitsDouble() which takes a string 
and returns the sum of all digits in the string multiplied by 2.
Return -1 if no digits are found. Ignore negative numbers. */
const sumDigitsDouble = str => {
    let count = 0
    if (!(/\d/.test(str))) return -1
    for (let i = 0; i < str.length; i++) {
        if (/\d/.test(str[i])) {
            count += Number(str[i]) 
        }
    }
    return count * 2
}
console.log(sumDigitsDouble(" Javascript ")) // -> -1
console.log(sumDigitsDouble("23abc45")) // -> 28
console.log(sumDigitsDouble("Hi-23")) // -> 10
console.log(sumDigitsDouble("ab12")) // -> 6
console.log(sumDigitsDouble("n0numh3r3")) // -> 12
console.log('=-=-=-=-=-=-=-=-= TASK 8 =-=-=-=-=-=-=-=-=')
/* Write a function named countOccurrence() which takes two string arguments
and returns how many times the first string can form the second. */
const countOccurrence = (str1, str2) => {
    let count = Infinity
    const obj1 = {}, obj2 = {}
    const cleanStr1 = str1.toLowerCase().replace(/\s+/g, '')
    const cleanStr2 = str2.toLowerCase().replace(/\s+/g, '')
    for (let char of cleanStr1) {
        obj1[char] = (obj1[char] || 0) + 1
    }
    for (let char of cleanStr2) {
        obj2[char] = (obj2[char] || 0) + 1
    }
    for (let char in obj2) {
        if (!obj1[char]) {
            return 0
        } else {
            count = Math.min(count, Math.floor(obj1[char] / obj2[char]))
        }
    }
    return count
}
console.log(countOccurrence(" Javascript ", "Java")) // -> 1
console.log(countOccurrence("Hello", "World")) // -> 0
console.log(countOccurrence("Can I can a can", " anc ")) // -> 3
console.log(countOccurrence("Hello", "l")) // -> 2
console.log(countOccurrence("IT conversations", "IT")) // -> 2