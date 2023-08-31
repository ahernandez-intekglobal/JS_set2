'use strict'
// From a reasonably sized text, have a user defined string be replaced by that same string with a hashtag. That hashtag should be a link for a twitter search as well. 
// example
//  String: yolo
//      … should never use #yolo for any reason... 


function replaceWord(event){
    let inputElem = document.getElementById("replaceInput");
    let paragElem = document.getElementById("paragraph");
    let word = inputElem.value;
    console.log(word);

    if(/^[A-Za-z]+$/.test(word))
        paragElem.innerHTML = paragElem.innerHTML.replace(word, `<a href="https://twitter.com/search?q=%23${word}" target="_blank">#${word}</a>`);
    else
        alert("not valid word")
}