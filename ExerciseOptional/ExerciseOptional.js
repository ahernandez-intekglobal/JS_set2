'use strict'
// Input a paragraph of text and translate it to 1337 $|>34|<

let translator = {
    "A": ["4", "/\\", "/-\\", "@", "^",],
    "B": ["I3", "8", "|3", "!3", ")3",],
    "C": ["¢", "<", "©",],
    "D": ["|)", "[)", "|}",],
    "E": ["3", "€", "£",],
    "F": ["|=", "ƒ", "/=",],
    "G": ["6", "{,", "[,", "(?,",],
    "H": ["#", "[-]", "]-[", ")-(", "|~|", "]~[", "}{",],
    "I": ["1", "|", "][", "!",],
    "J": [",_|", "._|", "._]", ",_]",],
    "K": ["|<", "1<", "7<"],
    "L": ["1", "|_", "|"],
    "M": ["/\\/\\", "/V\\", "|\\/|", "|\\|\\",],
    "N": ["|\\|", "/\\/", "[\\]", "/V", "ท", "И",],
    "O": ["0", "()", "[]", "Ø",],
    "P": ["|*", "|º", "|>", "|7",],
    "Q": ["()_", "0_",],
    "R": ["I2", "/2", "12", "Я", "|2",],
    "S": ["5", "$", "§", "z", "72",],
    "T": ["7", "+", "†"],
    "U": ["(_)", "|_|", "บ", "v",],
    "V": ["\\/", "|/", "\\|",],
    "W": ["\\/\\/", "vv", "'//", "\\\\'", "uu", "2u", "พ", "₩",],
    "X": ["><", "}{", "×", "}{", ")(",],
    "Y": ["`/", "¥",],
    "Z": ["7_", "%", "-\\_",],
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function trans2_1337(str) {
    if (typeof str != 'string')
        throw new Error(`${typeof txt} is not 'string'`);
    else {
        let upper = str.toUpperCase();
        let str1337 = [];
        for (let i = 0; i < upper.length; i++) {
            if (/[a-zA-Z]/.test(upper.charAt(i))) {
                str1337.push(choose(translator[upper.charAt(i)]));
            }
            else
                str1337.push(upper.charAt(i));
        }
        return str1337.join("")
    }
}

function translationHandler(){
    let input = document.getElementById("inputText");
    let output = document.getElementById("translation");

    output.textContent = trans2_1337(input.value)
}