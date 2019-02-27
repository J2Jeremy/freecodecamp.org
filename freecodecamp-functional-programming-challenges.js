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