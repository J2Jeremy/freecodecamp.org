/*
methods used:
substr    : (str) returns sub string based on starting/ending index
repeat    : (str) returns a new string with a specified number of copies of the string it was called on.
replace   : (str) searches a string for a specified value, and returns a new string where the specified values are replaced.
charAt    : (str) returns the character at the specified index in a string
split     : (str) turns string into array
indexOf   : (str / arr) returns the position of the first occurrence of a specified value in a string, -1 if not found, case sensitive

findIndex : returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, 
			indicating no element passed the test.
slice     : (arr) returns new array, doesn't mutate original
splice    : (arr) returns original array, mutates original
join      : (arr) concats array into string
reverse   : (arr) returns original array, reverses the order of the elements in an array
concat    : (arr) returns new array, join two or more arrays
sort      : (arr) sorts an array alphabetically, use .sort(function(a, b){return a - b}); to compare numbers
reduce    : (arr) reduce the array to one single value
filter    : (arr) returns original, altered array Filter let you provide a callback for every element
map       : (arr) returns new array based on your existing array
forEach   : (arr) works as a traditional for loop looping over the array and providing you array elements to do operations on them.
every     : (arr) returns true if EVERY element passes test, false otherwise
some      : (arr) returns true if ANY element passes a test, fase otherwise
*/
//Reverse a String - my solution, didnt need array, stringArr could just be a string
function reverseString(str) { 
  let stringArr  =[];
  for(let i = str.length-1; i>=0; i--){
    stringArr.push(str.charAt(i));
  }
  return stringArr.join("");
}

//Reverse a String - #2 built in string prototype methods
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split(""); // ["h", "e", "l", "l", "o"]
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join(""); // ["o", "l", "l", "e", "h"] // "olleh"
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
function reverseString(str) {
    return str.split("").reverse().join("");
}

//Reverse a String #3 recursion
function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}

//Factorialize a Number - my solution
function factorialize(num) {
  return num == 0 ? 1 : num == 1 ? num : factorialize(num-1) * num;
}
console.log(factorialize(0)); 

//Find the Longest Word in a String - my solution
function findLongestWordLength(str) {
  let longestWord = "";
  let stringArr = str.split(" ");
  //console.log(stringArr);
  for(let word in stringArr){
    if (stringArr[word].length > longestWord.length){
      longestWord = stringArr[word];
    }
  }
  return longestWord.length;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//find the longest word in a string - intermediate solution
function findLongestWordLength(s) {
  return s.split(' ')
    .reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0); // 0 here gives x a starting value for the math.max
}

//find the longest word in a string - advanced recursion solution
function findLongestWordLength(str) {
  str = str.split(" ");//split the string into individual words  //(important!!, you'll see why later)
  if(str.length == 1){ //str only has 1 element left that is the longest element, //return the length of that element
    return str[0].length;
  }
  if(str[0].length >= str[1].length){//if the first element's length is greater than the second element's (or equal)  //remove the second element and recursively call the function)
    str.splice(1,1);
    return findLongestWordLength(str.join(" "));
  }
  if(str[0].length <= str[1].length){ //if the second element's length is greater thant the first element's start //call the function past the first element 
    // from the first element to the last element inclusive.
    return findLongestWordLength(str.slice(1,str.length).join(" "));
  }
}

//Return Largest Numbers in Arrays - my solution
function largestOfFour(arr) {
  let newArr = [];
  function getLargestNum(array){
   return array.reduce(function(x,y){
     return Math.max(x,y);
   });
  }
  for(let a in arr){
    newArr.push(getLargestNum(arr[a]));
  }
  return newArr;
}
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

//return largest numbers in arrays - intermmediate solution
function largestOfFour(arr) {
  return arr.map(function(group){ //creates a new array with the results of calling a function for every array element. //does not mutate original array
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}

//Return Largest Numbers in Arrays - advanced solution
//more details: https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays/
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));//While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
}

//Confirm the Ending - my solution
function confirmEnding(str, target) {
  let startingIndex = str.length-target.length;
  return str.substr(startingIndex) == target;
}
confirmEnding("Bastian", "n");

//confirm the ending - alternative
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("He has to give me a new name", "name");

//Repeat a String Repeat a String - my solution
function repeatStringNumTimes(str, num) {
  let repeated = "";
 if(num < 0){
   return repeated;
 }
 for(let i=0; i<num; i++){
   repeated+=str;
 }
 return repeated;
}
//repeat a string repeat a string - alternate 
function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}
//repeat a string repeat a string -intermediate
function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}
//repeat a string repeat a string -advanced
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}
repeatStringNumTimes("abc", 3);

//Truncate a String - my solution
function truncateString(str, num) {
  return str.length <= num ? str : str.slice(0, num) + '...';
}
//truncate a string - advanced solution
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}
//Finders Keepers - my solution
function findElement(arr, func) {
  for(let i in arr){
    if(func(arr[i])){
      return arr[i];
    }
  }
  return undefined;
} 

//Boo who - my solution
function booWho(bool) {
  return (typeof bool == "boolean");
}
booWho(null);

//Title Case a Sentence - my solution
function titleCase(str) {
  let stringArr = str.split(" ");
  for(let word in stringArr){
    stringArr[word] = stringArr[word].charAt(0).toUpperCase() + stringArr[word].substr(1).toLowerCase();
  }
  return stringArr.join(" ");
}

//title case a sentence - intermediate
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}
//title case a senetence - advanced
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

//Slice and Splice
function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

//falsy bouncer
function bouncer(arr) {
  return arr.filter(Boolean);
}

//find lowest index to insert number in sorted array - my solution
function getIndexToIns(arr, num) {
  let sortedArr = arr.sort(function(a, b){
    return a-b;
  });
  
  if(sortedArr.length == 0){
    return 0;
  }

  for(let i=0; i < sortedArr.length; i++){
    if(sortedArr[i] >= num){
      return i;
    }
  }
  return sortedArr.length;
}

let text = getIndexToIns([10, 20, 30, 40, 50], 35);
console.log(text); 
//find lowest index to insert number in sorted array - alternate
function getIndexToIns(arr, num) { 
  arr.sort(function(a, b) {
  return a - b;
  });

  var i = 0;
  while (num > arr[i]) {
  i++;
  }

  return i;
}

getIndexToIns([40, 60], 50);
//find lowest index to insert number in sorted array - intermediate
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a-b});
  return arr.indexOf(num);
}
//find lowest index to insert number in sorted array - advanced
function getIndexToIns(arr, num) {
return arr.concat(num).sort((a,b) => a-b).indexOf(num);
}

getIndexToIns([1,3,4],2);

//mutations - my solution, procedural
function mutation(arr) {

	let firstStr = arr[0].toLowerCase();
	let secondStr = arr[1].toLowerCase();

	for(let i = 0; i<secondStr.length; i++){
	  if (firstStr.indexOf(secondStr[i]) < 0){
	    return false;
	  };
	}
return true;
}

//mutations - alt solution, declarative
function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}

//chunky munky - my solution
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for(let i = 0; i<arr.length; i+=size){//console.log (`i = ${i} ` + `i+size = ${i+size}`);
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);  

//chunky munky - alt basic solutin
    function chunkArrayInGroups(arr, size) {
      var temp = [];
      var result = [];
      for (var a = 0; a < arr.length; a++) { //0  1 0  1
        if (a % size !== size - 1) //size - 1 = 1
          temp.push(arr[a]);
        else {
          temp.push(arr[a]);
          result.push(temp);
          temp = [];
        }
      }
      if (temp.length !== 0)
        result.push(temp);
      return result;
    }

//chunky munky advanced solution 1
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var i = 0;
  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
//chunky munky advanced solution 2
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0,size));
  }
  return newArr;
}