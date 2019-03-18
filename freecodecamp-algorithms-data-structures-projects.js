//Palindrome Checker
//Return true if the given string is a palindrome. Otherwise, return false. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//my solution
function palindrome(str) {
  str = str.toLowerCase().replace((/\W+|_/g), '');
  let strArr = [];
  let reversedArr = [];
  str.split(' ').forEach(e => {
    strArr.push(e);
    reversedArr.push(e.split('').reverse().join(''));
  });
  return strArr.join('') == reversedArr.reverse().join('');
}
let test = palindrome("_eye");
console.log(test); 

// palindrome checker - basic alt
function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

//palindrome intermediate solution
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  for(var i = 0, len = str.length - 1; i < len/2; i++) {
    if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
}
//palindrome advanced 
//this solution performs at minimum 7x better, at maximum infinitely better.
//read the explanation for the reason why. I just failed this in an interview.
function palindrome(str) {
  //assign a front and a back pointer
  let front = 0
  let back = str.length - 1

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    if ( str[front].match(/[\W_]/) ) {
      front++
      continue
    }
    //decrements back pointer if current character doesn't meet criteria
    if ( str[back].match(/[\W_]/) ) {
      back--
      continue
    }
    //finally does the comparison on the current character
    if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
    front++
    back--
  }

  //if the whole string has been compared without returning false, it's a palindrome!
  return true

}

//Roman Numeral Converter
//Convert the given number into a roman numeral.
var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

// test here
convertToRoman(36);

//Caesars Cipher
//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount. A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//my solution
function rot13(str) { // LBH QVQ VG!
    
    function decode(aString){
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let patt = /\W/g;
        let newStr = "";
        let arr = aString.split('');
        arr.forEach( l => {
            if (!patt.test(l)){
               let index = alphabet.indexOf(l)-13;
               if(index >= 0){
                newStr += alphabet[index];
               }else{
                newStr += alphabet[index+26];
               }
            }else{
                newStr += l;
            }
        });
        //console.log(newStr);
        return newStr;
    }
    //decode("PNZC");

    return str.split(' ').map( e=> {
        return decode(e);
    }).join(' '); 
}

let test = rot13("SERR PBQR PNZC");
console.log(test);

//caesars cipher basic alt
function rot13(str) {
  // Split str into a character array
  return str.split('')
  // Iterate over each character in the array
    .map.call(str, function(char) {
      // Convert char to a character code
      x = char.charCodeAt(0);
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);  // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}

//caesars cipher
function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/ ;
  str = str.split("");
  for (var x in str) {
    if (regEx.test(str[x])) {
      // A more general approach
      // possible because of modular arithmetic
      // and cyclic nature of rot13 transform
      rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}
//caesars cipher - advanced
//https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher/
function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}