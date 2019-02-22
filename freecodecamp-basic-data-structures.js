//splice() changes the original array whereas slice() doesn't.
//Access an Array's Contents Using Bracket Notation
let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0]; // ourVariable equals "a"
ourArray[1] = "not b anymore"; // ourArray now equals ["a", "not b anymore", "c"];

//Add Items to an Array with push() and unshift()
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];
romanNumerals.unshift('XIX', 'XX'); //unshift adds to front // now equals ['XIX', 'XX', 'XXI', 'XXII']
romanNumerals.push(twentyThree); //push adds to end // now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']

//Remove Items from an Array with pop() and shift()
let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop(); //removes last ele // now equals ['whats up?', 'hello']
greetings.shift(); //removes element from the front // now equals ['hello']

// Remove Items Using splice() 
let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2); //remove 2 eles beginning at 3rd ele, returns new array // newArray equals ['really', 'happy']

//Add Items Using splice()
function colorChange(arr, index, newColor) {
  arr.splice(index, 1, newColor); // we have removed '#bb7e8c' and added '#332327' in its place
  return arr;
}
let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];
colorScheme = colorChange(colorScheme, 2, '#332327');// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']

//Copy Array Items Using slice()
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear']; // weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
let todaysWeather = weatherConditions.slice(1, 3); // todaysWeather equals ['snow', 'sleet'];

//Copy an Array with the Spread Operator
let thisArray = [true, true, undefined, false, null]; // thisArray remains unchanged, and is identical to thatArray
let thatArray = [...thisArray]; // thatArray equals [true, true, undefined, false, null]

//Combine Arrays with the Spread Operator
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander']; // thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

//Check For The Presence of an Element With indexOf()
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2
fruits.indexOf('pears') // returns 1, the first index at which the element exists

//Iterate Through All an Array's Items Using For Loops (other methods: every(), forEach(), map() )
function filteredArray(arr, elem) { //returns new arry containing nested arrays that don't contain the 'elem' param
  console.log("original arr: " + arr);
  let newArr = [];
  for (let i = 0; i< arr.length; i++){
    if(arr[i].indexOf(elem) == -1){
      newArr.push(arr[i]);
    }
  } 
  return newArr; 
}  
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));

//Add Key-Value Pairs to JavaScript Objects
let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};
let userData = FCC_User.followers; // userData equals 572
let userData = FCC_User['followers']; // userData equals 572
FCC_User['registered'] = true;

//Modify an Object Nested Within an Object
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13
    }
  }
};

//Access Property Names with Bracket Notation 
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("apples"));
//Use the delete Keyword to Remove Object Properties
delete foods.apples;
//Check if an Object has a Property
foods.hasOwnProperty('apples');
'apples', 'oranges' in foods;
//Iterate Through the Keys of an Object with a for...in Statement
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function countOnline(obj) {
  let count=0;
  for(let user in obj){
     if(obj[user].online == true){
       count++;
     }
  }
  return count;
}
//Generate an Array of All Object Keys with Object.keys()
return Object.keys(obj);
//Modify an Array Stored in an Object
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
function addFriend(userObj, friend) {
  // change code below this line  
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // change code above this line
}