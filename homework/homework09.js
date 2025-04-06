console.log("=-=-=-=-=-=-=-=-= TASK 1 =-=-=-=-=-=-=-=-=");
/* Write a function named fizzBuzz1() which takes a number argument and returns "Fizz" if the given number is
 divisible by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" if the number is divisible by both 3 
 and 5. Otherwise, it will return the number itself.​ */
const fizzBuzz1 = num => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}
console.log(fizzBuzz1(0)); // 	-> "FizzBuzz"
console.log(fizzBuzz1(1)); // 	-> 1
console.log(fizzBuzz1(3)); // 	-> "Fizz"
console.log(fizzBuzz1(5)); // 	-> "Buzz"
console.log(fizzBuzz1(30)); // 	-> "FizzBuzz"
console.log(fizzBuzz1(10)); // 	-> "Buzz"
console.log(fizzBuzz1(15)); // 	-> "FizzBuzz"
console.log(fizzBuzz1(-15)); // 	-> "FizzBuzz"

console.log("=-=-=-=-=-=-=-=-= TASK 2 =-=-=-=-=-=-=-=-=");
/* Write a function named fizzBuzz2() which takes a number argument and returns and array consist of numbers 
starting from 1 to given number. However, it will return "Fizz" for the numbers divided by 3, "Buzz" for the 
numbers divided by 5, and "FizzBuzz" for the numbers divided both by 3 and 5. */
const fizzBuzz2 = num => {
  const arrOfNum = [];
  for (let i = 1; i <= num; i++) {
    arrOfNum.push(i);
  }
  for (let i = 0; i < arrOfNum.length; i++) {
    if (arrOfNum[i] % 3 === 0 && arrOfNum[i] % 5 === 0) {
      arrOfNum[i] = "FizzBuzz";
    } else if (arrOfNum[i] % 3 === 0) {
        arrOfNum[i] = "Fizz";
    } else if (arrOfNum[i] % 5 === 0) {
        arrOfNum[i] = "Buzz";
    } else {
        continue;
    }
  }
  return arrOfNum
}
console.log(JSON.stringify(fizzBuzz2(3))); // -> [ 1, 2, 'Fizz' ]
console.log(JSON.stringify(fizzBuzz2(5))); // -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(JSON.stringify(fizzBuzz2(10))); // -> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
console.log(JSON.stringify(fizzBuzz2(15))); // -> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
console.log(JSON.stringify(fizzBuzz2(2))); // -> [ 1, 2 ]

console.log("=-=-=-=-=-=-=-=-= TASK 3 =-=-=-=-=-=-=-=-=");
//Write a function named findSumNumbers() which takes a string argument and returns sum of the all numbers appears in the string.
const findSumNumbers = str => {
    let sum = 0
    let nums = ""
    for (let i = 0; i < str.length; i++) {
        if (/\d/.test(str[i])) {
            nums += str[i]
        } else {
            if (nums.length > 0) {
            sum += Number(nums)
            nums = ""
        }
    }
}
    if (nums.length > 0) {
        sum += Number(nums)
    }
    return sum
}

console.log(findSumNumbers("abc$")); // -> 0
console.log(findSumNumbers("a1b4c  6#")); /// -> 11
console.log(findSumNumbers("ab110c045d")); // -> 155
console.log(findSumNumbers("525")); // -> 525
console.log(findSumNumbers("3 for 10 dollars")); // -> 13

console.log("=-=-=-=-=-=-=-=-= TASK 4 =-=-=-=-=-=-=-=-=");
// Write a function named findBiggestNumber() which takes a string argument and returns the biggest number appears in the string.
const findBiggestNumber = str => {
    let numArr = []
    let nums = ""
    for (let i = 0; i < str.length; i++) {
        if (/\d/.test(str[i])) {
            nums += str[i]
        } else {
            if (nums.length > 0) {
            numArr.push(Number(nums))
            nums = ""
        }
    }
}
    if (nums.length > 0) {
        numArr.push(Number(nums))
    }
    if (numArr.length === 0) {
        return 0
    } else {
        return Math.max(...numArr)
    }
}
console.log(findBiggestNumber("abc$")); // -> 0
console.log(findBiggestNumber("a1b4c  6#")); // -> 6
console.log(findBiggestNumber("ab110c045d")); // -> 110
console.log(findBiggestNumber("525")); // -> 525
console.log(findBiggestNumber("3 for 10 dollars")); // -> 10

console.log("=-=-=-=-=-=-=-=-= TASK 5 =-=-=-=-=-=-=-=-=");
/* Write a function named countOccurrencesOfCharacters() which takes a string argument and returns the count of repeated characters in the String.​
NOTE: If given String is empty, then return empty String.​ NOTE: It is case sensitive. */
const countOccurrencesOfCharacters = str => {
    let result = ""
    let count = 1
    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++
        } else {
            result += count + str[i - 1]
            count = 1
        }
    }
    return result
}
console.log(countOccurrencesOfCharacters("")); // -> ""
console.log(countOccurrencesOfCharacters("abc")); // -> "1a1b1c"
console.log(countOccurrencesOfCharacters("abbcca")); // -> "1a2b2c1a"
console.log(countOccurrencesOfCharacters("aaAAa")); // -> "2a2A1a”
console.log(countOccurrencesOfCharacters("www")); // -> "3w"

console.log("=-=-=-=-=-=-=-=-= TASK 6 =-=-=-=-=-=-=-=-=");
// Write a function named fibonacciSeries1() which takes a number n argument and returns the n series of Fibonacci numbers as an array. ​
// REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
const fibonacciSeries1 = num => {
    let fibArr = []
    let curr = 0
    let next = 1
    for (let i = 0; i < num; i++) {
        fibArr.push(curr)
        let temporary = curr + next
        curr = next
        next = temporary
    }
    return fibArr
}
console.log(fibonacciSeries1(3)); // -> [0, 1, 1]
console.log(fibonacciSeries1(5)); // -> [0, 1, 1, 2, 3]
console.log(fibonacciSeries1(7)); // -> [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)); // -> [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)); // -> [0]
console.log(fibonacciSeries1(2)); // -> [0, 1]

console.log("=-=-=-=-=-=-=-=-= TASK 7 =-=-=-=-=-=-=-=-=");
/* Write a function named fibonacciSeries2() which takes a number n argument and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21 */
const fibonacciSeries2 = num => {
    let curr = 0
    let next = 1
    for (let i = 0; i < num - 1; i++) {
        let temporary = curr + next
        curr = next
        next = temporary
    }
    return curr
}

console.log(fibonacciSeries2(2)); // -> 1
console.log(fibonacciSeries2(4)); // -> 2
console.log(fibonacciSeries2(8)); // -> 13
console.log(fibonacciSeries2(9)); // -> 21
console.log(fibonacciSeries2(1)); // -> 0

console.log("=-=-=-=-=-=-=-=-= TASK 8 =-=-=-=-=-=-=-=-=");
/* Write a function named findUniques() which takes two array of number arguments and returns the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.​
NOTE: If one of the array is empty, then return unique values from the other array. */
const findUniques = (arr1, arr2) => {
    unique = []
    for (let i = 0; i < arr1.length; i++) {
        let value = arr1[i]
        if (!arr2.includes(value) && !unique.includes(value)) {
            unique.push(value)
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        let value = arr2[i]
        if (!arr1.includes(value) && !unique.includes(value)) {
            unique.push(value)
        }
    }
    return unique
}
console.log(findUniques([], [])); // -> []
console.log(findUniques([], [1, 2, 3, 2])); // -> [1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); // -> [1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9])); // -> []
console.log(findUniques([-1, -2], [1, 2])); // -> [-1, -2, 1, 2]

console.log("=-=-=-=-=-=-=-=-= TASK 9 =-=-=-=-=-=-=-=-=");
/* Write a function named isPowerOf3() which takes a number argument and returns true if given number is equal to 3 power of the X. Otherwise, return false.​
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios. */
const isPowerOf3 = num => {
    for (let i = 0; ; i++) {
        let power3 = 3 ** i
        if (num === power3) {
            return true 
        }
        if (num < power3) {
            return false
        }
    }
}
console.log(isPowerOf3(1)); // -> true
console.log(isPowerOf3(2)); // 	-> false
console.log(isPowerOf3(3)); // 	-> true
console.log(isPowerOf3(27)); // 	-> true
console.log(isPowerOf3(100)); // -> false
console.log(isPowerOf3(81)); // 	-> true
console.log(isPowerOf3(9)); // 	-> true
