console.log('=-=-=-=-=-=-=-=-= TASK 1 =-=-=-=-=-=-=-=-=')
/*
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0
*/

const countPos = arr => arr.reduce((acc, curr) => curr > 0 ? acc + 1 : acc, 0)

console.log(countPos([-45, 0, 0, 34, 5, 67])) //  -> 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])) //  -> 4
console.log(countPos([0, -1, -2, -3])) //  -> 0

console.log('=-=-=-=-=-=-=-=-= TASK 2 =-=-=-=-=-=-=-=-=')
/*
Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.
NOTE: Ignore case sensitivity. 
Examples:
countA("TechGlobal is a QA bootcamp")  -> 4
countA("QA stands for Quality Assurance")  -> 5
countA("Cypress")  -> 0
*/
const countA = str => {
    let aCount = 0;
    for (const i in str) {
        if (str[i].toLowerCase() === 'a') {
            aCount++
        }
    }
    return aCount
}
console.log(countA("TechGlobal is a QA bootcamp")) //  -> 4
console.log(countA("QA stands for Quality Assurance")) //  -> 5
console.log(countA("Cypress")) //  -> 0

console.log('=-=-=-=-=-=-=-=-= TASK 3 =-=-=-=-=-=-=-=-=')
/* 
Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")  -> 0
*/

const countVowels = str => {
    let vowelCount = 0;
    for (const i of str) {
        if ('aeiou'.includes(i.toLowerCase())) {
            vowelCount++
        }
    }
    return vowelCount
}
console.log(countVowels("Hello")) //  -> 2
console.log(countVowels("Hello World")) //  -> 3
console.log(countVowels("JavaScript is fun")) //  -> 5
console.log(countVowels("")) //  -> 0

console.log('=-=-=-=-=-=-=-=-= TASK 4 =-=-=-=-=-=-=-=-=')
/* 
Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant 
letter.
Examples:
countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")  -> 0
*/
const countConsonants = str => {
    let consonantCount = 0;
    for (const i of str) {
        if ('aeiou'.includes(i)) {
            consonantCount++
        } 
    }
    return (str.length - consonantCount)
}
console.log(countConsonants("Hello")) // -> 3
console.log(countConsonants("Hello World")) //  -> 8
console.log(countConsonants("JavaScript is fun")) //  -> 12
console.log(countConsonants("")) // -> 0

console.log('=-=-=-=-=-=-=-=-= TASK 5 =-=-=-=-=-=-=-=-=')
/*
Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.
NOTE: Be careful about the extra whitespaces before 
and after the string.
Examples:
countWords("     Javascript is fun       ")  -> 3
countWords("Cypress is an UI automation tool.    ") -> 6 
countWords("1 2 3 4") -> 4
*/
const countWords = str => str.trim().split(' ').length

console.log(countWords("     Javascript is fun       ")) // -> 3
console.log(countWords("Cypress is an UI automation tool.    ")) // -> 6 
console.log(countWords("1 2 3 4")) // -> 4

console.log('=-=-=-=-=-=-=-=-= TASK 6 =-=-=-=-=-=-=-=-=')
/*Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.
NOTE: Mathematically, the factorial of a non-negative 
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/
const factorial = num => {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        factorial *= i 
    }
    return factorial 
}

console.log(factorial(5)) // 120 
console.log(factorial(4)) // 24
console.log(factorial(0)) // 1
console.log(factorial(1)) // 1 
console.log('=-=-=-=-=-=-=-=-= TASK 7 =-=-=-=-=-=-=-=-=')
/*Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true */

const isPalindrome = str => {
    let reversed = str.toLowerCase().split('').reverse().join('')
    return str.toLowerCase() === reversed
}
console.log(isPalindrome("Hello")) //  -> false
console.log(isPalindrome("Kayak")) //  -> true 
console.log(isPalindrome("civic")) //  -> true
console.log(isPalindrome("abba")) //  -> true
console.log(isPalindrome("ab  a")) //  -> false
console.log(isPalindrome("123454321")) //  -> true
console.log(isPalindrome("A")) //  -> true
console.log(isPalindrome("")) //  -> true

console.log('=-=-=-=-=-=-=-=-= TASK 8 =-=-=-=-=-=-=-=-=')
/*Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after 
the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) -> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) -> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) -> 4
countMultipleWords([ ]) -> 0 */

const countMultipleWords = arr => {
    let count = 0
    for (let word of arr) {
        let trimmed = word.trim().split(/\s+/)
        if (trimmed.length >= 2) {
            count++
        }
    }
    return count
}
console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])) // -> 1
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])) // -> 0
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])) // -> 4
console.log(countMultipleWords([ ])) // -> 0 
console.log('=-=-=-=-=-=-=-=-= TASK 9 =-=-=-=-=-=-=-=-=')
/*Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 2
count3OrLess("My name is John Doe")  -> 3
count3OrLess("")  -> 0 */
const count3OrLess = str => {
    let count = 0
    const strArr = str.split(' ')
    for (let i of strArr) {
        if (i.length <= 3 && i.length >= 1) {
            count++
    }
}
    return count
}

console.log(count3OrLess("Hello")) //  -> 0
console.log(count3OrLess("Hi John")) //  -> 1
console.log(count3OrLess("JavaScript is fun")) //  -> 2
console.log(count3OrLess("My name is John Doe")) //  -> 3
console.log(count3OrLess("")) //  -> 0 

console.log('=-=-=-=-=-=-=-=-= TASK 10 =-=-=-=-=-=-=-=-=')
/*Write a function named as isPrime() which takes a 
number as an argument and returns true if the 
number is prime or returns false otherwise when 
invoked.
NOTE: Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no 
negative prime numbers.
Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false */
const isPrime = num => {
    if (num <= 1) return false //Less than 2 (NOT PRIME)

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(5)) //  -> true
console.log(isPrime(2)) //  -> true
console.log(isPrime(29)) //  -> true
console.log(isPrime(-5)) // -> false
console.log(isPrime(0)) // -> false
console.log(isPrime(1)) // -> false 

console.log('=-=-=-=-=-=-=-=-= TASK 11 =-=-=-=-=-=-=-=-=')
/*Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements.
NOTE: Be careful about the array sizes as they could be 
different.
Examples:
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2] ))  // -> [9, 3, 2, 7, 
5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))  // -> [16, 11, 9,  
3, 2, 7, 5, 10, 34] 
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))  // -> [0, 0, 0, 0] */

const add = (arr1, arr2) => {
    smallerArr = arr1.length > arr2.length ? arr2 : arr1
    biggerArr = arr1.length > arr2.length ? arr1 : arr2
    combinedArr = []
    for (let i = 0; i < smallerArr.length; i++) {
        combinedArr.push(smallerArr[i] + biggerArr[i])
    }
    return combinedArr.concat(biggerArr.slice(smallerArr.length))
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2] ))  // -> [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))  // -> [16, 11, 9, 3, 2, 7, 5, 10, 34] 
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))  // -> [0, 0, 0, 0] 

console.log('=-=-=-=-=-=-=-=-= TASK 12 =-=-=-=-=-=-=-=-=')
/*Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello")  -> "Hello" 
removeExtraSpaces("      Hello    World     ")  -> "Hello 
World" 
removeExtraSpaces("     JavaScript is          fun")  -> 
"JavaScript is fun”
removeExtraSpaces("")  -> ""  */

const removeExtraSpaces = str => {
    let arrStr = str.split(' ')
    let newArr = []
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === '') {
            continue
        } else {
            newArr.push(arrStr[i])
        }
    }
    return newArr.join(' ')
}

console.log(removeExtraSpaces("Hello"))  // -> "Hello" 
console.log(removeExtraSpaces("      Hello    World     ")) //  -> "Hello World" 
console.log(removeExtraSpaces("     JavaScript is          fun")) //  -> "JavaScript is fun”
console.log(removeExtraSpaces(""))  // -> ""


console.log('=-=-=-=-=-=-=-=-= TASK 13 =-=-=-=-=-=-=-=-=')
/*Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.
NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, 
return the smaller number.
Examples:  10 - -13 = 23    10 - 8 = 2  10 - 12 = -2 
findClosestTo10([10, -13, 5, 70, 15, 57] )  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20])  -> 8
findClosestTo10([0, -1, -2])  -> 0 */
const findClosestTo10 = arr => {
    let smallest = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 10) continue
        else if (Math.abs(10 - arr[i]) < Math.abs(10 - smallest))  {
            smallest = arr[i]
        }
    }
    return smallest
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57] )) //  -> 5
console.log(findClosestTo10([10, -13, 8, 12, 15, -20])) //  -> 8
console.log(findClosestTo10([0, -1, -2])) //  -> 0 
console.log('=-=-=-=-=-=-=-=-= TASK 14 =-=-=-=-=-=-=-=-=')
/*Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.
Examples:
isEmailValid("")  -> false
isEmailValid("@gmail.com")  -> false
isEmailValid("johndoe@yahoo")  -> false
isEmailValid("johndoe@.com")  -> false
isEmailValid("a@outlook.com")  -> false
isEmailValid("johndoe@a.com")  -> false
isEmailValid("johndoe@@gmail.com")  -> false
isEmailValid("johndoe@gmail.com")  -> true */
const isEmailValid = str => /^[a-z\d]{2,}@[a-z\d]{2,}\.[a-z\d]{2,}$/i.test(str)

console.log(isEmailValid("")) //  -> false
console.log(isEmailValid("@gmail.com")) //  -> false
console.log(isEmailValid("johndoe@yahoo")) //  -> false
console.log(isEmailValid("johndoe@.com")) //  -> false
console.log(isEmailValid("a@outlook.com")) //  -> false
console.log(isEmailValid("johndoe@a.com")) //  -> false
console.log(isEmailValid("johndoe@@gmail.com")) //  -> false
console.log(isEmailValid("johndoe@gmail.com")) //  -> true 
console.log('=-=-=-=-=-=-=-=-= TASK 15 =-=-=-=-=-=-=-=-=')
/*Write a function named as isPasswordValid() which takes a 
string email as an argument and returns true if the password 
is valid or returns false otherwise when invoked.
NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
special char.
•should NOT have any space.
Examples:
isPasswordValid("")  -> false
isPasswordValid("abcd")  -> false
isPasswordValid("abcd1234")  -> false
isPasswordValid("Abcd1234")  -> false
isPasswordValid("Chicago12345US!#$%")  -> false
isPasswordValid("Abcd1234$")  -> true
isPasswordValid("Chicago123$")  -> true
isPasswordValid("Test1234#")  -> true */
const isPasswordValid = str => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,16}$/.test(str)

console.log(isPasswordValid("")) //  -> false
console.log(isPasswordValid("abcd")) //  -> false
console.log(isPasswordValid("abcd1234")) //  -> false
console.log(isPasswordValid("Abcd1234")) //  -> false
console.log(isPasswordValid("Chicago12345US!#$%")) //  -> false
console.log(isPasswordValid("Abcd1234$")) //  -> true
console.log(isPasswordValid("Chicago123$")) //  -> true
console.log(isPasswordValid("Test1234#")) //  -> true

