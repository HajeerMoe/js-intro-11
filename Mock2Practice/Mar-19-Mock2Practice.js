/*
Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument and
returns the given word back tripled if the string length is even or doubled if the string length is odd when
invoked.
Examples:
doubleOrTripleWord("Tech") -> "TechTechTech"
doubleOrTripleWord("Apple") -> "AppleApple”
doubleOrTripleWord("") -> ""
doubleOrTripleWord(" ") -> " "
doubleOrTripleWord("1") -> "11"
doubleOrTripleWord("22") -> "222222"
*/

const doubleOrTripleWord = str => (str.length % 2 === 0) ? str.repeat(3) : str.repeat(2)

console.log(doubleOrTripleWord("Tech")) // -> "TechTechTech"
console.log(doubleOrTripleWord("Apple")); // → "AppleApple”
console.log(doubleOrTripleWord("")); // → ""
console.log(doubleOrTripleWord(" ")); // → " "
console.log(doubleOrTripleWord("1")); // → "11"
console.log(doubleOrTripleWord("22")); // → "222222"

/*
Write a function named as firstlastWord() which takes a string word as an argument and returns the
first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
firstLastWord("Hello World") -> "HelloWorld"
firstLastWord("I like JavaScript") -> "IJavaScript”
firstLastWord("Hello") -> "HelloHello"
firstLastWord("") -> ""
firstLastWord(" ") -> ""
*/
const firstLastWord = str => {
    let splitted = str.split(' ')
    let firstLast = splitted[0] + splitted.at(-1)
    return firstLast
}

console.log(firstLastWord("I like JavaScript")); // → "IJavaScript”
console.log(firstLastWord("Hello")); // → "HelloHello"
console.log(firstLastWord("")); // → ""
console.log(firstLastWord(" ")); // → ""

/*
Write a function named hasVowel() which takes a string argument and returns true if the string has a
vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("") -> false
hasVowel("Javascript") -> true
hasVowel("Tech Global") -> true
hasVowel("1234") -> false
hasVowel("ABC") -> true
*/
const hasVowel = str => /[aeiou]/i.test(str)
console.log(hasVowel("Javascript")); // → true
console.log(hasVowel("Tech Global")); // → true
console.log(hasVowel("1234")); // → false
console.log(hasVowel("ABC")); // → true

/*
Write a function named as startVowel() which takes a string word as an argument and returns true if
given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
17
www.techglobalschool.com
Examples:
startVowel("Hello") -> false
startVowel("Apple") -> true
startVowel("orange") -> true
startVowel("") -> false
startVowel(" ") -> false
startVowel("123") -> false
*/



/*
Write a function named averageOfEdges() which takes three number arguments and will return
average of min and max numbers.
Examples:
averageOfEdges(0, 0, 0) -> 0
averageOfEdges(0, 0, 6) -> 3
averageOfEdges(-2, -2, 10) -> 4
averageOfEdges(-3, 15, -3) -> 6
averageOfEdges(10, 13, 20) -> 15
*/


/*
Write a function named replaceFirstLast() which takes a string argument and returns a new string with
the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") -> ""
replaceFirstLast("Hello") -> "oellH"
replaceFirstLast("Tech Global") -> "lech GlobaT"
replaceFirstLast("A") -> ""
replaceFirstLast(" A ") -> ""
*/


/*
Write a function named as swap4() which takes a string word as an argument and returns the string
back with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.
18
www.techglobalschool.com
Examples:
swap4("abc") -> ""
swap4("JavaScript") -> "riptScJava"
swap4("TechGlobal") -> "obalGlTech"
swap4("") -> ""
swap4(" ") -> ""
*/




/*
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns
the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
Examples:
swapFirstLastWord("Hello World") -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") -> "bar bar foo foo"
swapFirstLastWord("") -> ""
swapFirstLastWord(" ") -> ""
swapFirstLastWord("Hello") -> ""
swapFirstLastWord("Hello ") -> ""
*/


/*
Write a function named countPos() which takes an array of numbers as an argument and returns how
many elements are positive when invoked.
Examples:
countPos([-45, 0, 0, 34, 5, 67]) countPos([-23, -4, 0, 2, 5, 90, 123]) countPos([0, -1, -2, -3]) -> 3
-> 4
-> 0
*/



/*
Write a function named as getEvens() which takes 2 number arguments and returns all the even
numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even
numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
19
www.techglobalschool.com
getEvens(2, 7) getEvens(17, 5) getEvens(4, 4) getEvens(3, 3) -> [ ]
-> [ 2, 4, 6 ]
-> [ 6, 8, 10, 12, 14, 16 ]
-> [ 4 ]
*/




/*
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers
divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no
numbers divisible by 5 in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getMultipleOf5(3, 17) getMultipleOf5(23, 5) getMultipleOf5(5, 5) -> [ 5, 10, 15]
-> [ 20, 15, 10, 5 ]
-> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
*/




/*
Write a function named countNeg() which takes an array of numbers as an argument and returns how
many elements are negative when invoked.
Examples:
countNeg([-45, 0, 0, 34, 5, 67]) countNeg([-23, -4, 0, 2, 5, 90, 123]) countNeg([0, -1, -2, -3]) -> 1
-> 2
-> 3
*/


/*
Write a function named countA() which takes a string argument and returns how many A or a there are
in the given string when invoked.
NOTE: Ignore case sensitivity.
Examples:
countA("TechGlobal is a QA bootcamp") countA("QA stands for Quality Assurance") -> 4
-> 5
countA("Cypress") -> 0
*/



/*
Write a function named countWords() which takes a string argument and returns the total count of
words in the given string when invoked.
20
www.techglobalschool.com
NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords(" Javascript is fun ") countWords("Cypress is an UI automation tool. ") -> 6
countWords("1 2 3 4") -> 3
-> 4
*/


/*
Write a function named as factorial() which takes a number as an argument and returns the factorial of
the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5) -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/



/*
Write a function named as count3OrLess() which takes a string word as an argument and returns the
count of the words that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello") -> 0
count3OrLess("Hi John") -> 1
count3OrLess("JavaScript is fun") -> 2
count3OrLess("My name is John Doe") -> 3
count3OrLess("") -> 0
*/


/*
Write a function named as removeExtraSpaces() which takes a string word as an argument and
returns the string back with all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello") -> "Hello"
removeExtraSpaces(" Hello World ") -> "Hello World"
removeExtraSpaces(" JavaScript is fun") -> "JavaScript is fun”
removeExtraSpaces("") -> ""
21
www.techglobalschool.com
*/


/*
Write a function named middleInt() which takes three number arguments and return the middle
number.
Examples:
middleInt(1, 2, 2) -> 2
middleInt(5, 5, 8) -> 5
middleInt(5, 3, 5) -> 5
middleInt(1, 1, 1) -> 1
middleInt(-1, 25, 10) -> 10
*/



/*
Write a function named as firstDuplicate() which takes an array argument and returns the first
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the
array. For two elements to be considered as duplicated, value and data types of the elements must be
same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) firstDuplicate([ 5, '5', 3, 7, 4 ]) firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) firstDuplicate([ 1, 2, 3]) firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) -> 3
-> 5
-> -1
-> 'abc'
-> -1
-> -1
*/


/*
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated
elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no
duplicates in the array. For two elements to be considered as duplicated, value and data types of the
elements must be same.
22
www.techglobalschool.com
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) getDuplicates([ 1, 2, 5, 0, 7 ]) getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> [ 0, -7 ]
-> [ ]
-> [ 'foo', 'a’ ]
-> [ ]
*/


/*
Write a function named as countVowels() which takes a string word as an argument and returns the
count of the vowel letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") -> 2
countVowels("JavaScript is fun") -> 5
countVowels("") -> 0
*/



/*
Write a function named as reverseStringWords() which takes a string as an argument and returns
string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before
and after words in the given string.
Examples:
reverseStringWords("Hello World") -> "olleH dlroW"
reverseStringWords("I like JavaScript") -> "I ekil tpircSavaJ"
reverseStringWords("Hello") -> "olleH"
reverseStringWords("") -> ""
reverseStringWords(" ") -> ""
*/



/*
Write a function named as countConsonants() which takes a string word as an argument and returns
the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") -> 3
countConsonants("Hello World") -> 8
countConsonants("JavaScript is fun") -> 12
23
countConsonants("") -> 0
*/
