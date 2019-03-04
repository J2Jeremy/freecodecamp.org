// Sum All Numbers in a Range - my solution
function sumAll(arr) {
  let total = 0;
  for (let i = Math.min(arr[0], arr[1]) ; i<= Math.max(arr[0], arr[1]); i++){
    total+=i;
  }
  return total;
}
//sum all nums in range - intermediate
//using the Arithmetic Progression summing formula 
function sumAll(arr) {
  var sortedArr = arr.sort((a,b) => a-b);
  var firstNum = arr[0];
  var lastNum = arr[1];
  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}
//advanced 
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}
sumAll([1, 4]);

//Diff Two Arrays - basic solution
function diffArray(arr1, arr2) {
      var newArr = [];

      function onlyInFirst(first, second) {
        for (var i=0;i<first.length;i++) {
          if (second.indexOf(first[i]) === -1) {
            newArr.push(first[i]);
          }
        }
      }

      onlyInFirst(arr1, arr2);
      onlyInFirst(arr2, arr1);

      return newArr;
    }

//diff two arrays - intermediate
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//diff two arrays -advanced #1 declarative
function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//diff two arrays - advanced #2 declarative
function diffArray(arr1, arr2) {
  return [
    ...diff(arr1, arr2),
    ...diff(arr2, arr1)
  ]
  
  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}

//Seek and Destroy
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

//seek and destroy - intermediate
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

//seek and destroy - advanced 
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));


//Wherefore art thou, find matching key/values in two objs
function whatIsInAName(collection, source) {

   var srcKeys = Object.keys(source);
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//intermediate
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    return srcKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
//advanced
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  // filter the collection
  return collection.filter(function (obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}

//Spinal Tap Case remove all special chars and whitespace and join with - 
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

//intermediate
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

//advanced
function spinalCase(str) {
//a whitespace character [\s] is encountered
//underscore character [_] is encountered
//or is followed by an uppercase letter [(?=[A-Z])]
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}

//Pig Latin if word starts with vowel, append 'way', else remove 1st cluster of consonants and move to end + 'ay'
//my solution
function translatePigLatin(str) {
  if(str.charAt(0).match(/[aeiou]/)){
    return str += "way"
  }
  let arr = str.split('');
  let temp = arr.splice(0, str.search(/([aeiou])/));
  return arr.join('')+temp.join('')+'ay';
}

let test = translatePigLatin("glove");
console.log(test);

//pig latin -alt
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else if(str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + 'ay';
  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

//pig latin - intermediate
function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }
  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

//pig latin-advanced
function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end  
 return strArr.join("")+"ay";
}

// test here
translatePigLatin("consonant");

//Search and Replace - my solution
function myReplace(str, before, after) {

 function checkCase( letter = before.charAt(0) ) {
   return (/[A-Z]/).test(letter) ? after.charAt(0).toUpperCase() + after.substr(1) : after;
 }
  return str.replace(before, checkCase());
}

let test = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "eaped");
console.log(test);

//DNA Pairing - The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//my solution
function pairElement(str) {
  let pairs = [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]];
  let newArr = [];

  str.split('').map( (i) =>{
    pairs.filter ( (e) => {
      if(e[0] == i[0]){
        newArr.push(e);
      }
    })
  });
  return newArr;
}

let test = pairElement("ATCGA");
console.log(test); 

//DNA pairing alt solution
function pairElement(str) {
      // Return each strand as an array of two elements, the original and the pair.
      var paired = [];

      // Function to check with strand to pair.
      var search = function(char) {
        switch (char) {
          case 'A':
            paired.push(['A', 'T']);
            break;
          case 'T':
            paired.push(['T', 'A']);
            break;
          case 'C':
            paired.push(['C', 'G']);
            break;
          case 'G':
            paired.push(['G', 'C']);
            break;
        }
      };

      // Loops through the input and pair.
      for (var i = 0; i < str.length; i++) {
        search(str[i]);
      }

      return paired;
    }
//DNA pairing intermediate
function pairElement(str) {
//create object for pair lookup
var pairs = {
  "A": "T",
  "T": "A",
  "C": "G",
  "G": "C"
}
//split string into array of characters
var arr = str.split("");
//map character to array of character and matching pair
return arr.map(x => [x,pairs[x]]);
}

//Missing letters Find the missing letter in the passed letter range and return it.
//my solution
function fearNotLetter(str) {

  let arr = str.split('');
  let base = str.charCodeAt(arr[0]);

  for(let i = 0; i<arr.length; i++){
    let currLetter = String.fromCharCode(base+i);
    let currArr = arr[i];
    if(currLetter != currArr){
      return currLetter;
    }
  }
  return undefined
}
let test = fearNotLetter("abce");
console.log(test);

// missing letters alt
function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}

//missing letters intermediate
// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// test here
fearNotLetter("abce");

//missing letters advanced simplified
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

//missing letters advanced
function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g');

  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

// test here
fearNotLetter("abce");