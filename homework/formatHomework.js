function formatTestCases(input) {
    let lines = input.split("\n").map(line => line.trim());
    let functionName = "";
    let paramNames = "...args"; // Default for multiple values
    let formattedLines = [];
    let testCases = [];
    let descriptionEnded = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Comment out all instruction text until test cases start
        if (!descriptionEnded) {
            if (line !== "" && !line.includes("->")) { 
                formattedLines.push(`/* ${line} */`);
            }
            if (line === "" || line.includes("->")) {
                descriptionEnded = true; // Marks the end of the description
            }
            continue;
        }

        // Match function name and arguments
        let match = line.match(/^(\w+)\((.*)\)\s*->\s*(.+)$/);
        if (match) {
            let [_, func, args, expected] = match;
            functionName = func;

            // Detect parameter structure dynamically
            let paramValues = args.split(", ").map(v => v.trim());
            if (paramValues.length === 1) {
                paramNames = "input";
            } else if (paramValues.length === 2) {
                const [param1, param2] = paramValues;
                if (param1.startsWith('"') || param1.startsWith("'")) {
                    if (!isNaN(param2)) paramNames = "str, num";
                    else paramNames = "str, param";
                } else if (!isNaN(param1)) {
                    if (param2.startsWith('"') || param2.startsWith("'")) paramNames = "num, str";
                    else paramNames = "num, param";
                } else {
                    paramNames = "param1, param2";
                }
            } else {
                paramNames = "...params";
            }

            // Convert test case into console.log() format
            let formattedTestCase = `console.log(${functionName}(${args})); // → ${expected}`;
            testCases.push(formattedTestCase);
        }
    }

    // Add function signature at the top
    if (functionName) {
        formattedLines.push(`const ${functionName} = (${paramNames}) => {};\n`);
    }

    formattedLines.push(...testCases);

    return formattedLines.join("\n");
}

// Example test case input
const inputText = `Write a method named mostRepeated() takes an array argument and returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.

Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) 			-> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) 	-> "pen"
mostRepeated([10]) 					-> 10
mostRepeated(["TechGlobal"]) 				-> "TechGlobal"



`;

console.log(formatTestCases(inputText));