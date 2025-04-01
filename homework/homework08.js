console.log('=-=-=-=-=-=-=-=-= TASK 1 =-=-=-=-=-=-=-=-=')
/*Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t.  */
const hasLowerCase = str => /[a-z]/.test(str)

console.log(hasLowerCase("")) //  -> false
console.log(hasLowerCase("JAVASCRIPT")) //  -> false
console.log(hasLowerCase("hello")) //  -> true
console.log(hasLowerCase("125$")) //  -> false
console.log(hasLowerCase("   a   ")) //  -> true
console.log('=-=-=-=-=-=-=-=-= TASK 2 =-=-=-=-=-=-=-=-=')
/*Write a function named noZero() which takes an array of numbers as argument 
and returns the array back with all zeros removed.*/
const noZero = arr => arr.filter((num) => num !== 0)

console.log(noZero([1])) //  -> [1]
console.log(noZero( [1, 1, 10] )) //  -> [1, 1, 10] 
console.log(noZero([0, 1, 10])) //  -> [1, 10]
console.log(noZero([0, 0, 0])) //  -> []
console.log(noZero([10, 100, 0])) // -> [10, 100]

console.log('=-=-=-=-=-=-=-=-= TASK 3 =-=-=-=-=-=-=-=-=')
/*Write a function named numberAndSquare() which takes an array of numbers 
as argument and returns a multidimensional array with all numbers squared. */
const numberAndSquare = arr => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        squared = arr[i] ** 2
        newArr.push([arr[i], squared])
    }
    return newArr
}
console.log(numberAndSquare([1, 2, 3])) //  -> [[1, 1], [2, 4], [3, 9]]
console.log(numberAndSquare([0, 3, -6])) //  -> [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4])) //  -> [[1,1], [4, 16]]
console.log(numberAndSquare([0, 0, 0])) //  -> [[0, 0], [0, 0], [0, 0]]
console.log(numberAndSquare([0, 1, -10])) // -> [[0, 0], [1, 1], [-10, 100]]
console.log('=-=-=-=-=-=-=-=-= TASK 4 =-=-=-=-=-=-=-=-=')
/*Write a function named containsValue() which takes a string array and a 
string as arguments and returns a boolean value. Search the string variable 
inside of the array and return true if it exists in the array. If it doesn’t exist, 
return false.  
NOTE: Assume that array size is at least 1. 
NOTE: The method is case-sensitive. */
const containsValue = (arr, str) => {
    for (const word of arr) {
        if (word === str)
            return true
    }
    return false
}

console.log(containsValue(["abc", "foo", "javascript"], "hello")) //  -> false
console.log(containsValue(["abc", "def", "123"], "Abc")) //  -> false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")) //  -> true

console.log('=-=-=-=-=-=-=-=-= TASK 5 =-=-=-=-=-=-=-=-=')
/*Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.  If there is no enough words reverse, 
return "There is not enough words!". */
const reverseSentence = str => {
    let newStr = ""
    let splitted = str.split(' ')
    if (splitted.length < 2) {
        return ("There is not enough words!")
    } else {
        for (let i = splitted.length - 1; i >= 0; i--) {
            newStr += splitted[i] + ' '
        }
        newStr = newStr.toLowerCase()
        newStr = newStr[0].toUpperCase() + newStr.slice(1)
        return newStr.trim(' ')
    }
}

console.log(reverseSentence("Hello")) //  -> "There is not enough words!"
console.log(reverseSentence("Javascript is fun")) //  -> "Fun is javascript"
console.log(reverseSentence("This is a sentence")) //  -> "Sentence a is this"

console.log('=-=-=-=-=-=-=-=-= TASK 6 =-=-=-=-=-=-=-=-=')
/*Write a function named removeStringSpecialsDigits() which takes a string 
as argument and return a string without the special characters or digits. */
const removeStringSpecialsDigits = str => {
    let newStr = ""
    for (let char of str) {
        if (/[a-z ]/i.test(char))
            newStr += char
    }
    return newStr
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun")) //  -> "Javascript is fun" 
console.log(removeStringSpecialsDigits("Cypress")) //  -> "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%")) //  -> "Automation"

console.log('=-=-=-=-=-=-=-=-= TASK 7 =-=-=-=-=-=-=-=-=')
/*Write a function named removeArraySpecialsDigits() which takes a string 
array as argument and return back without the special characters or digits.*/
const removeArraySpecialsDigits = arr => {
    let newArr = []
    for (let word of arr) {
        let cleanWord = ''
        for (let char of word) {
            if (/[a-z ]/i.test(char)) {
                cleanWord += char
            }
        }
        newArr.push(cleanWord)
    }
    return newArr
}

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])) //  -> ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"])) //  -> ["Cypress", "", ""]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"])) //  -> ["Automation", "tool"]

console.log('=-=-=-=-=-=-=-=-= TASK 8 =-=-=-=-=-=-=-=-=')
/*Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words. */
const getCommons = (arr1, arr2) => {
    const matched = []
    for (const word of arr1) {
        if (arr2.includes(word) && !matched.includes(word)) {
            matched.push(word)
            }
        }
        return matched
    }


console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] )) // -> []
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])) // -> ["Javascript"]
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )) //  -> ["C#"]
console.log('=-=-=-=-=-=-=-=-= TASK 9 =-=-=-=-=-=-=-=-=')
/*Write a function named noXInVariables() which takes an array as argument 
and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove 
the element. */
const noXInVariables = arr => {
    newArr = []
    for (let i = 0; i < arr.length; i++) {
        let cleanedWord = ''
        if (typeof(arr[i]) === "string") {
            cleanedWord += arr[i].replace(/x/ig, '')
        } else {
            cleanedWord = arr[i]
        }
        if (cleanedWord !== '') {
        newArr.push(cleanedWord)
        }
    }
    return newArr
}

console.log(noXInVariables(["abc", 123, "#$%"])) //  -> ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])) //  -> ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"])) //  -> [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"])) //  -> ["yyy", "ABC"]