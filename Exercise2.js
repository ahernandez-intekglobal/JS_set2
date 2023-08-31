'use strict'
// Write a regular expression that can match:

// Date format <Month-string> <##day>, <####year>
let dateFormat = /(January|February|March|April|May|June|July|August|September|October|November|December) (\d{2}), (\d{4})/;
let dateExamples = ["September 29, 1972","February 99, 0001","June 04, 3000"];
console.log(dateExamples.every(example => dateFormat.test(example)));

// A letter followed OR preceded by a number
let letterAndNumber = /\d+[A-Za-z]|[A-Za-z]\d+/;
let letterAndNumberExamples = ["A52","d747","27X","v2"];
console.log(letterAndNumberExamples.every(example => letterAndNumber.test(example)));

// txt, java, and cpp files with names consisting of only letters
let program = /([A-Za-z]+)\.(txt|java|cpp)/;
let programExamples = ["test.java","program.cpp","newReport.txt"];
console.log(programExamples.every(example => program.test(example)));

// A 5 character palindrome
let fiveCharPalindrome = /(.)(.).\2\1/;
let fiveCharPalindromeExamples = ["abcba","12321","_1a1_"];
console.log(fiveCharPalindromeExamples.every(example => fiveCharPalindrome.test(example)));

// All words that consist of letters from b to y only
let b2y = /\b([B-Yb-y]+)\b/g;
let b2yExample = "Bee zapp Crow Eagle Zorro  mouse Ape  you";
console.log(b2yExample.match(b2y));

// All the non nested tag elements in a string
let nonNestedTags = /<\w+>(?:(?!<\/\w+>).)*<\/\w+>/g;
let nonNestedTagsExample = "Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.";
console.log(nonNestedTagsExample.match(nonNestedTags));