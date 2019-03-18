/* useful things
instanceof        : The instanceof operator tests the presence of constructor.prototype in object's prototype chain
hasOwnProperty    : returns a boolean indicating whether the object has the specified property as its own property (as opposed to 
                    inheriting it).
constructor       : advantage of the constructor property is that it's possible to check for this property to find out what kind 
                    of object it is. 					
                  : Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s 
                    generally better to 				  : use the instanceof method to check the type of an object.
isPrototypeOf     : shows prototype relationship, obj.prototype.isPrototypeOf(obj2)
prototype         : All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an 
                    object.
                  : Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of 
                    Bird.prototype is
                  : Object.prototype. 
Object.create     : Object.create(obj) creates a new object, and sets obj as the new object's prototype

*/

//basic objects, check for constructor
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
// new instance, own prop, proto prop
let crow = new Bird("Alexis", "black");
crow instanceof Bird; // => true
crow.hasOwnProperty(name);
Bird.prototype.numLegs = 2;

//Iterate Over All Properties
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

//check obj type with .constructor
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog ? true : false;
}

//Change the Prototype to a New Object note: must set the constructor again!
function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
	constructor : Dog, //don't forget this!
  numLegs : 4,
  eat : ()=> {console.log("yummy")},
  describe : ()=> {console.log("a good boy and a pretty boy")}
};

//check prototype 
Dog.prototype.isPrototypeOf(beagle);
//Understand the Prototype Chain
Object.prototype.isPrototypeOf(Bird.prototype); // returns true
let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // => true
	/* 
	The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain.

	In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck.

	Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.
	*/

//Use Inheritance, create supertype / parent with prototypes
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let animal = Object.create(Animal.prototype);
animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
let duck = Object.create(Animal.prototype);
duck.eat(); // Should print "nom nom nom"
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

//Reset an Inherited Constructor Property must set the constructor b/c it is inherited for the super type
function Bird(){};
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
let crow = new Bird(); // now crow.constructor will point to Bird instead of Animal

//Add Methods After Inheritance
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"

//Override Inherited Methods
Bird.prototype.eat = function() {
  return "peck peck peck";
};

//Use a Mixin to Add Common Behavior Between Unrelated Objects
let flyMixin = function(obj) { //The flyMixin takes any object and gives it the fly method.
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"

//Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
  let hatchedEgg = 10; // private property

  this.getHatchedEggCount = function() { // publicly available method that a bird object can use
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10

//Understand the Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("A cozy nest is ready");
})();

//Use an IIFE to Create a Module
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
}) (); // The two parentheses cause the function to be immediately invoked
motionModule.glideMixin(duck);
duck.glide();