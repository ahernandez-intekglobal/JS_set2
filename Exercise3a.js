'use strict'
// Write a program that will:

// Shift cyclically every letter of the alphabet by one, and the numbers as well.
function shiftChar(str) {
    if (typeof str != 'string')
        throw new Error(`Expected string object. Getting ${typeof str} instead`);
    let format = /(?:([a-zA-z])|(\d+)+)/g;
    let matches = str.match(format);
    if (matches.join("") === str) {
        function shiftLetter(letter) {
            let code = letter.charCodeAt(); 
            switch (code) {
                // char code of "Z" is 90
                case 90:
                    // char code of "A" is 65
                    code = 65;
                    break;
                // char code of "z" is 122
                case 122:
                    // char Code of "a" is 97
                    code = 97;
                    break;
                default:
                    code++;
                    break;
            }
            return String.fromCharCode(code);
        }
        function shiftNum(num){
            return String(Number(num) + 1);
        }
        return matches.map(match => /\d+/.test(match) ? shiftNum(match) : shiftLetter(match)).join("")
    }
    else
        throw new Error("Invalid format of string")
}

let shiftCharExamples = ["aBc","xyz","aK89"];
console.log(shiftCharExamples.map(example => shiftChar(example)))