console.log('=-=-=-=-=-=-=-=-= TASK 1 =-=-=-=-=-=-=-=-=');
/* Write a function named toCamelCase() which takes a string as its argument
and returns a new string in camelCase. Assume the string only contains letters
and spaces */
var toCamelCase = function (str) {
    var newWord = '';
    var splitWord = str.trim().toLowerCase().split(/\s+/);
    newWord += splitWord[0];
    if (splitWord.length === 1)
        return str;
    for (var i = 1; i < splitWord.length; i++) {
        newWord += (splitWord[i][0]).toUpperCase() + splitWord[i].slice(1);
    }
    return newWord;
};
console.log(toCamelCase("first name")); //  ->"firstName"
console.log(toCamelCase("last     name")); //  ->"lastName"
console.log(toCamelCase("   ZIP CODE")); //  ->"zipCode"
console.log(toCamelCase("I Learn Java Script")); //    -> "iLearnJavaScript"
console.log(toCamelCase("helloWorld")); //     -> “helloWorld”
console.log('=-=-=-=-=-=-=-=-= TASK 2 =-=-=-=-=-=-=-=-=');
/* Write a function named toSnakeCase() which takes a string as its argument
and returns a new string in snake_case. Assume the string only contains letters
and spaces
NOTE: In snake case words are separated by underscores (_) and are all
lowercase. */
var toSnakeCase = function (str) { return str.trim().toLowerCase().replace(/\s+/g, '_'); };
console.log(toSnakeCase("first name")); //  ->"first_name"
console.log(toSnakeCase("last    name")); // ->"last_name"
console.log(toSnakeCase("    I love Java Script")); //  ->"i_love_java_script"
console.log(toSnakeCase("already_snake_case")); //   -> "already_snake_case"
console.log(toSnakeCase("hello")); //     -> "hello
console.log('=-=-=-=-=-=-=-=-= TASK 3 =-=-=-=-=-=-=-=-=');
/* Write a function named alternatingCases() which takes a string argument and
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are
ignored. */
var alternatingCases = function (str) {
    var newWord = '';
    var upper = true;
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (/[a-zA-Z]/.test(char)) {
            newWord += upper ? char.toUpperCase() : char.toLowerCase();
            upper = !upper;
        }
        else {
            newWord += char;
        }
    }
    return newWord;
};
console.log(alternatingCases("Hello")); //  -> "HeLlO"
console.log(alternatingCases("basketball")); //  -> "BaSkEtBaLl"
console.log(alternatingCases("Tech Global")); //  -> "TeCh GlObAl"
console.log(alternatingCases("")); //  -> ""
console.log(alternatingCases("123!@#aB")); //  -> "123!@#Ab"
console.log('=-=-=-=-=-=-=-=-= TASK 4 =-=-=-=-=-=-=-=-=');
/*Write a function named isNeutral() that takes two strings comprised of + and
-, and return a new string which shows how the two strings interact in the
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are
shown as the number 0.
Note: The two strings will be the same length. */
var isNeutral = function (str1, str2) {
    var newWord = '';
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] === '-' && str2[i] === '-') {
            newWord += '-';
        }
        else if (str1[i] === '+' && str2[i] === '+') {
            newWord += '+';
        }
        else {
            newWord += '0';
        }
    }
    return newWord;
};
console.log(isNeutral("-", "+")); //      ->  "0"
console.log(isNeutral("-+", "-+")); // ->   "-+"
console.log(isNeutral("-++-", "-+-+")); //            ->  "-+00"
console.log(isNeutral("--++--", "++--++")); //      ->  "000000"
console.log(isNeutral("+++", "+++")); //           ->  "+++"
console.log('=-=-=-=-=-=-=-=-= TASK 5 =-=-=-=-=-=-=-=-=');
/* Write a function named isTrueOrFalse() which takes a string with sets of character/words
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should
be treated the same), you need to determine whether it falls into the positive/first half of the
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters. */
var isTrueOrFalse = function (str) {
    var posCount = 0;
    var negCount = 0;
    var words = str.split(' ');
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var firstChar = word[0];
        if (!firstChar || !/[a-z]/i.test(firstChar))
            continue;
        if (/^[A-M]/i.test(firstChar)) {
            posCount++;
        }
        else {
            negCount++;
        }
    }
    return posCount >= negCount;
};
console.log(isTrueOrFalse("A big brown fox caught a bad rabbit")); //  -> true
console.log(isTrueOrFalse("Xylophones can obtain Xenon.")); //   ->  false
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")); //  -> true
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")); //  -> true
console.log(isTrueOrFalse("Got stuck in the Traffic")); //  -> false
