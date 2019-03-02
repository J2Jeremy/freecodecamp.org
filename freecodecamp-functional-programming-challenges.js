/* useful notes

callback       : functions that are slipped or passed into another function to decide the invocation of that function
first class    : Functions that can be assigned to a variable, passed into another function, or returned from another function
               : just like any other normal value. In JavaScript, all functions are first class functions.
higher order   : functions that take a function as an argument, or return a function as a return value 
lambda         : functions are passed in to another function or returned from another function


*/
//Refactor Global Variables Out of Functions
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (arr, bookName) {
  let newArr = [...arr];
 newArr.push(bookName);
  return newArr;
};

function remove (arr, bookName) {
  let newArr = [...arr];
  let indexToRemove = newArr.indexOf(bookName);
  if (indexToRemove >= 0) {
    newArr.splice(indexToRemove, 1);
    return newArr;
    }
};

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
//refactor alt solution
function add (list,bookName) {
  return [...list, bookName];
}

function remove (list,bookName) {
  if (list.indexOf(bookName) >= 0) {
    return list.filter((item) => item !== bookName);
    }
}

//Use the map Method to Extract Data from an Array
var rating = [];
watchList.map(function(element){
  rating.push({title: element.Title, rating:element.imdbRating});
});
// Implement map on a Prototype - my solution
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  this.forEach(function(element){
    newArray.push(callback(element));
  });
  return newArray; 
};

var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s);

//Use the filter Method to Extract Data from an Array
var filteredList = watchList.map(function(e){
  return {title:e["Title"], rating:e["imdbRating"]}
}).filter((e) => e.rating >= 8);

console.log(filteredList);  

//Implement the filter Method on a Prototype - my solution
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  let arr = [];
  this.forEach(function(e){
    if (callback(e)){
      arr.push(e);
    }
  })
  return arr;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

//Return Part of an Array Using the slice Method
function nonMutatingSplice(cities) {
 return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

//Use the reduce Method to Analyze Data - my solution
let length = 0;
let averageRating = watchList.filter(function(e){
  if (e["Director"] == "Christopher Nolan"){
    length++;
    return e["imdbRating"];
  }
}).reduce(function(total, i){
  return total + parseFloat(i.imdbRating);
  
}, 0) / length;

//Use the reduce Method to Analyze Data - alt solution 
var averageRating = watchList.filter(x => x.Director === "Christopher Nolan").map(x => Number(x.imdbRating)).reduce((x1, x2) => x1 + x2) / watchList.filter(x => x.Director === "Christopher Nolan").length;

//Return a Sorted Array Without Changing the Original Array - my solution
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
 return [...globalArray].sort(function(a, b){
   return a-b;
 })
}
//Return a Sorted Array Without Changing the Original Array -alt
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let newArr = [].concat(globalArray);
 return newArr.sort( (a,b) => {return a-b});
}

//Split a String into an Array Using the split Method - my solution
function splitify(str) {
 return str.split(/\W/) 
}

//Convert Strings to URL Slugs -my solution
function urlSlug(title) {
 return title.split(/\W/).filter( (e) => e != '').join('-').toLowerCase(); 
}
//convert strings to URL slug -alt
function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join('-');
}

//every
function checkPositive(arr) {
  return arr.every( (e) => e > 0);
}

//some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive(arr) {
  return arr.some( (e) => e > 0 );
}
//Introduction to Currying and Partial Application
function add(x) {
return function(y){
  return function(z){
    return x+y+z
  }
}

}
let test = add(10)(20)(30);
console.log(test);