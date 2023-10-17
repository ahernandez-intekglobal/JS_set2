'use strict'
// Write a program that will:

// Shift cyclically every letter of the alphabet by one, and the numbers as well.
function ceasarCipher(match, p1,p2,p3, offset, string){
    if(p1){
      if (p1.charCodeAt() === 90){
        return String.fromCharCode(65);
      }
      else if (p1.charCodeAt() === 122){
        return String.fromCharCode(97);
      }
      else{
        return String.fromCharCode(p1.charCodeAt()+1)
      }
    }
    if (p2){
      let myNum = Number(p2);
      return String(myNum === 9 ? 0 : myNum+1);
    }
    if (p3){
      return p3
    }
  }
  
  let shiftCharExamples = ["aBc","xyz","aK89_1"];
  console.log(shiftCharExamples.map(example => example.replace(/([a-zA-Z])|(\d)/gi, ceasarCipher)))