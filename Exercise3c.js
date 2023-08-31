'use strict'
// Using regular expressions, create a function that will match all word palindromes of any size in a text.

let textWithPalindromes = `"Racecar drivers love to race their fast racecars on the radar. 
They find it amusing to drive a civic car and race it alongside a kayak. 
Civic and kayak are two well-known palindromes, and they certainly add a fun twist to the racecar experience!"`;

let textWithoutPalindromes = `Drivers enjoy competing in speedy vehicles. They find it amusing to operate compact vehicles and compete alongside small boats. These words and phrases certainly add an interesting twist to the driving experience!`

function searchPalindromes(txt){
    if(typeof txt !== 'string')
        throw new Error(`${typeof txt} is not 'string'`)
    else{
        function recursiveTesting(str){
            if(str.length === 1 || str.length === 0)
                return true;
            else{
                return /^(.)(.*)(\1)$/i.test(str) && recursiveTesting(str.replace(/^(.)(.*)(\1)$/i,'$2'));
            }
        }
        let palindromes = [];
        let matches = txt.match(/\b\w+\b/gi);
        for (let match of matches){
            if (recursiveTesting(match))
                palindromes.push(match);
        }
        return palindromes;
    }
}

console.log(searchPalindromes(textWithPalindromes));
console.log(searchPalindromes(textWithoutPalindromes));