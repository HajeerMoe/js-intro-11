console.log('=-=-=-=-=-=-=-=-= TASK 1 =-=-=-=-=-=-=-=-=')
/*
Write a function named makeNegative() that takes a number and returns its negative value.
NOTE: The number can be negative already, in which case no change is required.
NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. So, zero will stay as zero.
*/
const makeNegative = num => num <= 0 ? num : num - (num * 2)

console.log(makeNegative(10))   //      -> -10
console.log(makeNegative( -7))  //     	-> -7
console.log(makeNegative( 0))   //      -> 0
console.log(makeNegative(0.45)) //  	-> -0.45

console.log('=-=-=-=-=-=-=-=-= TASK 2 =-=-=-=-=-=-=-=-=')
/* Write a function isSumEvenOrOdd() which takes three numbers as arguments and 
determines if the sum of these numbers is odd or even. */
const isSumEvenOrOdd = (num1, num2, num3) => {
    if ((num1 + num2 + num3) % 2 === 0) {
        return 'even'
    }  
    return 'odd'
}
console.log(isSumEvenOrOdd(0, 1, 4)) // 	-> "odd"
console.log(isSumEvenOrOdd(0, -1, -5)) //     	-> "even"
console.log(isSumEvenOrOdd(0, 0, 0)) // 	-> "even"
console.log(isSumEvenOrOdd(7, 1, 9)) //       	-> "odd"
console.log(isSumEvenOrOdd(1, 1, 1)) //       	-> "odd"

console.log('=-=-=-=-=-=-=-=-= TASK 3 =-=-=-=-=-=-=-=-=')
/* Write a function named decimal2() which takes an array of numbers as an argument and 
returns the array with the same numbers rounded up or down and represented with only two decimals. */ 
const decimal2 = arr => {
    const twoFixedArr = []
    for (let i = 0; i < arr.length; i++) {
        twoFixedArr.push(arr[i].toFixed(2))
    }
    return twoFixedArr
}
console.log(decimal2( [94.356, 8.9752] )) // 		-> [ 94.36, 8.98 ]
console.log(decimal2( [76.62, 128.4, 84] )) // 		-> [ 76.62, 128.4, 84 ]
console.log(decimal2( [20987, 3.53245, 12.345, 32.9] )) // 	-> [ 20987, 3.53, 12.35, 32.90 ]
console.log(decimal2( [ ] )) // 			-> [  ]
console.log(decimal2( [4.35623, 8.9742] )) //		-> [ 4.36, 8.97 ]

console.log('=-=-=-=-=-=-=-=-= TASK 4 =-=-=-=-=-=-=-=-=')
/* Write a function named myPow() which takes two numbers, x and n, as its arguments and returns x to the power 
of n without using Math.pow(). 3 to the power of 3 is 3*3*3 = 27. 
NOTE: Any number to the power of 0 equals 1. Any number to the power of 1 equals the number itself. */
const myPow = (x, n) => { //x to the power of n
    let res = 1
    for (let i = 0; i < n; i++) { 
        res *= x 
    }
    return res
}

console.log(myPow(3, 3)) // 	-> 27
console.log(myPow(10, 1)) // 	-> 10
console.log(myPow(100, 0)) // 	-> 1
console.log(myPow(1, 1)) // 	-> 1
console.log(myPow(4, 2)) //  ​	-> 16
console.log(myPow(0, 0)) //  	​-> 1
console.log(myPow(5, 3)) //  ​	-> 125

console.log('=-=-=-=-=-=-=-=-= TASK 5 =-=-=-=-=-=-=-=-=')
/* Write a function named findLongestWord() which takes a string as input and returns the longest word in the string.
NOTE: If the string is empty or consists of spaces only, then return empty string.
NOTE: If the string consists of multiple words having the longest word, then return the first occurrence. */
const findLongestWord = str => {
    if (!str.trim()) return ''
    const lenObj = {}
    longestWord = ''
    let maxLen = 0
    str.split(' ').forEach(word => {
        lenObj[word] = word.length
    })
    for (const word in lenObj) {
        if (lenObj[word] > maxLen) {
            maxLen = lenObj[word]
            longestWord = word
        }
    }
    return longestWord
    
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // -> "jumped"
console.log(findLongestWord("This is a sample string for testing")) // 	-> "testing" 
console.log(findLongestWord("One two ten"))     // 	-> "One"
console.log(findLongestWord(""))                // 	-> ""
console.log(findLongestWord("      "))          //  -> ""