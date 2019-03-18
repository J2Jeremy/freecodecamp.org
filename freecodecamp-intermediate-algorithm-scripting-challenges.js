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

//Sorted Union. Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//my solution 
function uniteUnique(arr) {
	var args = [...arguments];
	let newArr =[];
	for(let index in args){
	  let currArr = args[index];
	  currArr.filter( item =>{
	    if (newArr.indexOf(item)==-1){
	      newArr.push(item);
	    }
	  });
	}
	return newArr;
}
//sorted union alt
function uniteUnique(arr1, arr2, arr3) {
  var finalArray = [];
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;
}
//sorted union alt 2
function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for(var i = 0; i < args.length; i++) {
    for(var j = 0; j < args[i].length; j++) {
       if(!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

//sorted union intermediate
function uniteUnique(arr1, arr2, arr3) {
 var newArr;
 //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA,arrB){
  //Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });

   return newArr;                    
}

//sorted union advanced 
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}
/* this helps me understand
[ 1, 3, 2, 5, 2, 1, 4, 2, 1 ]
indexOf(item) = 0 item= 1 pos= 0
indexOf(item) = 1 item= 3 pos= 1
indexOf(item) = 2 item= 2 pos= 2
indexOf(item) = 3 item= 5 pos= 3
indexOf(item) = 2 item= 2 pos= 4
indexOf(item) = 0 item= 1 pos= 5
indexOf(item) = 6 item= 4 pos= 6
indexOf(item) = 2 item= 2 pos= 7
indexOf(item) = 0 item= 1 pos= 8
*/
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//Convert HTML Entities. Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// my solution

function convertHTML(str) {

  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

let test = convertHTML("Dolce & Gabbana");
console.log(test);

// conver HTML entities alt
function convertHTML(str) {
// Split by character to avoid problems.
var temp = str.split('');
// Since we are only checking for a few HTML elements I used a switch

for (var i = 0; i < temp.length; i++) {
switch (temp[i]) {
  case '<':
    temp[i] = '&lt;';
    break;
  case '&':
    temp[i] = '&amp;';
    break;
  case '>':
    temp[i] = '&gt;';
    break;
  case '"':
    temp[i] = '&quot;';
    break;
  case "'":
    temp[i] = "&apos;";
    break;
}
}

temp = temp.join('');
return temp;
}
//html entities intermediate
function convertHTML(str) {
//Chaining of replace method with different arguments
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
return str;
}

//html entities advanced
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  htmlEntities={
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    '\'':"&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(entity => htmlEntities[entity] || entity).join('');
}

//Sum All Odd Fibonacci Numbers. 
//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num
//my solution -ugly
function sumFibs(num) {
  let ogNum = num;
  let oddArr=[];
  let a=1, b=0, temp;

  while(num >= 1){
    temp = a;
    a = a+b;
    b = temp;
    num--;
    if(b%2 !== 0){
      oddArr.push(b);
    }
    
  }
 
  return oddArr.filter(i => {
    return i <= ogNum;
  }).reduce( (a,b) => {
    return a+b
  });

}

// sum all odd fibonacci numbers -alt 
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}
// sum all odd fibonacci numbers -intermediate
function sumFibs(num) {
    // Perform checks for the validity of the input
    if (num < 0) return -1;
    if (num === 0 || num === 1) return 1;

    // Create an array of fib numbers till num
    const arrFib = [1, 1];
    let nextFib = 0;
    
    // We put the new Fibonacci numbers to the front so we
    // don't need to calculate the length of the array on each
    // iteration
    while((nextFib = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFib);
    }

    // Sum only the odd numbers and return the value
    return arrFib.reduce((acc, curr) => {
        return acc + curr * (curr % 2);
    });
}

//sum all prime numbers inclusive of num
//my solution
function sumPrimes(num) {
  let total=0;

  function isPrime(aNum){
    for(let i = 2; i<aNum; i++){
      if(aNum % i == 0){
        return false      
      }
    }
    return true
  }
  for(let i = 2; i<=num; i++){
    if(isPrime(i)){
      console.log(i);
      total+=i;
    }
  }
  return total;
}
//Smallest Common Multiple
//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. 
//my solution
function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

// test here
smallestCommons([1,5]);



//Drop it
//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it. Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
//my solution
function dropElements(arr, func) {

  let firstIndex = [];
  arr.forEach( e=> {
    return func(e) ? firstIndex.push(arr.indexOf(e)) : false;
  });

  return firstIndex.length > 0 ? arr.slice(firstIndex[0]) : [];
}
 
let test = dropElements([0, 1, 0, 1], function(n) {return n === 1;});
console.log(test);

//Drop it alt
function dropElements(arr, func) {
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
//Drop it intermediate
function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
}
//Drop it advanced
function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

//Steamroller
//Flatten a nested array. You must account for varying levels of nesting. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
function steamrollArray(arr) {
  let newArr = [];

  let flatty = function(arg){

    if(!Array.isArray(arg)){
      newArr.push(arg);
    } else {
      for(let a in arg){
        flatty(arg[a]);
      }
    }
  };
  arr.forEach(flatty);
  console.log('newArr= '+newArr);
  return newArr;
}
 
let test = steamrollArray([1, [2], [3, [[4]]]]);
console.log(test);

//Steamroller -intermediate
function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
//Steamroller - advanced
function steamrollArray(arr) {
  return arr.toString()
    .replace(',,', ',')       // "1,2,,3" => "1,2,3"
    .split(',')               // ['1','2','3']
    .map(function(v) {
      if (v == '[object Object]') { // bring back empty objects
        return {};
      } else if (isNaN(v)) {        // if not a number (string)
        return v;
      } else {
        return parseInt(v);         // if a number in a string, convert it
      }
    });
}
//binary agents
//Return an English translated sentence of the passed binary string.
//my solution
function binaryAgent(str) {
let arr = str.split(' ').map( i=> parseInt(i,2));
return arr.map( e=> String.fromCharCode(e)).join('');

}
let test = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(test);

//binary agents -advanced
// fromCharCode() expects a series of numbers rather than an Array! We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers.
    function binaryAgent(str) {
      return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
    }

//Everything Be True
//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
//my solution
function truthCheck(collection, pre) {
  return collection.every( e => e[pre])
}
let test = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log(test);

//everything be true - alt
function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

//Arguments Optional
//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum. For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//my solution
function addTogether() {
  let arr = [...arguments];
  if(arr.every(e => {return typeof e == "number"})){
    return arr.length > 1 ? arr[0]+arr[1] : function(arg2){ 
      return typeof arg2 == "number" ? arg2+arr[0] : undefined;
    };
  }
  return undefined;
}
// arguments optional - advanced
function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== 'number') ? undefined : args.length > 1 ?
      args.reduce((acc, n) => acc += n, 0) :
      (n) => typeof n === "number" ? n + args[0]:undefined;
}

//Make a Person - my solution
var Person = function(firstAndLast) {

  this.getFirstName = () =>{
    return firstAndLast.split(' ')[0];
  };

  this.getLastName = () => {
    return firstAndLast.split(' ')[1];
  };

  this.getFullName = () => {
    return firstAndLast;
  };

  this.setFirstName = (first) => {
    firstAndLast = first + " " + firstAndLast.split(' ')[1];
  }; 

  this.setLastName = (last) => {
    firstAndLast = firstAndLast.split(' ')[0] + " " + last;
  };

  this.setFullName = (str) => {
    firstAndLast = str;
  }; 
};  

var bob = new Person('Bob Ross');

//Map the Debris
//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds). The array will contain objects in the format {name: 'name', avgAlt: avgAlt}
//my solution
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  let newArr = [];
  for(let i in arr){
      let aCubed = Math.pow((earthRadius + arr[i].avgAlt), 3);
      let getSQRT = Math.sqrt(aCubed / GM);
      let getOribtal = Math.round((2 * 3.1415926535) * getSQRT);
      newArr.push({'name':arr[i].name, 'orbitalPeriod': getOribtal});
  }

  return newArr;
}

let test = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(test);