// // // ---------------------------------- 1st Topic ---------------------------------- //
// // function Bird(name) {
// //     this.name = name;
// //     this.numLegs = 2;
// // }
// // let canary = new Bird("Tweety");
// // let ownProps = [];
    
// // // Only change code below this line
// // for (let property in canary){
// //     if(canary.hasOwnProperty(property)){
// //         ownProps.push(property);
// //     }
// // }
// // console.log(ownProps);       // ['name', 'numLegs']
            

// // // ---------------------------------- 2nd Topic ---------------------------------- //
// // function Dog(name) {
// //     this.name = name;
// // }
// // // Only change code above this line
// // let beagle = new Dog("Snoopy");
// // Dog.prototype.numLegs = 4
// // console.log(beagle)  // numLegs should be a prototype property not an own property.



// // // ---------------------------------- 3rd Topic ---------------------------------- //
// // function Dogg(name) {
// //     this.name = name;
// // }
  
// // Dogg.prototype.numLegs = 4;
// // let beagle1 = new Dogg("Snoopy");

// // let ownProps1 = [];
// // let prototypeProps = [];

// // // Only change code below this line
// // for (let property in beagle1){
// //     if(beagle1.hasOwnProperty(property)){
// //         ownProps1.push(property);
// //     }
// //     else{
// //         prototypeProps.push(property);
// //     }
// // }
// // console.log(`${ownProps1}, ${prototypeProps}`);       // name, numLegs
// // console.log(ownProps1);       // ['name']


// // // ---------------------------------- 4th Topic ---------------------------------- //
// // function Doge(name) {
// //     this.name = name;
// // }

// // // Only change code below this line
// // function joinDogFraternity(candidate) {
// //     if(candidate.constructor === Doge){
// //         return true;
// //     } 
// //     else {
// //         return false
// //     }
// // }

// // // ---------------------------------- 4th Topic ---------------------------------- //
// // function Dogy(name) {
// //     this.name = name;
// // }

// // Dogy.prototype = {
// // // Only change code below this line
// //     numLegs: 2, 
// //     eat: function() {
// //         console.log("nom nom nom");
// //     },
// //     describe: function() {
// //         console.log("My name is " + this.name);
// //     }
// // };



// freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp


// Create a Basic JavaScript Object
let dog = {
    name: "Spot",
    numLegs: 4,
};

// Use Dot Notation to Access the Properties of an Object
let dog1 = {
    name: "Bhow",
};
console.log(dog1.name) // Bhow

// Define a Constructor Function
function Dog(){
    this.name = "Puppy";
    this.color = "Brown";
    this.numLegs = 4
};

// Use a Constructor to Create Objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
};
let hound = new Dog();

// Extend Constructors to Receive Arguments
function Doggy(name, color, numLegs) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Doggy("Puppy", "Brown");

// Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(4);
myHouse instanceof House;         // true

// Understand Own Properties
let Dog = function(name, color, numLegs) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let myDog = new Dog("Spot", "Brown");

let propArray = [];
for (let prop in myDog){
    if(myDog.hasOwnProperty(prop)){
        propArray.push(prop);
    }
}
console.log(propArray);       // ['name', 'color', 'numLegs']


// Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Snoopy");
let beaglee = new Dog("Snoop");
Dog.prototype.numLegs = 4;


// Iterate Over All Properties
function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle1 = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let property in beagle1){
    if(beagle1.hasOwnProperty(property)){
        ownProps.push(property);
    } else{
        prototypeProps.push(property);
    }
}

// Understand the Constructor Property
function Dog(name) {
    this.name = name;
}
// Only change code below this line
    function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog){
        return true;
    } else {
        return false;
    }
}

// Change the Prototype to a New Object
function Dog(name) {
    this.name = name;
}
Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function(){
        console.log("Yum Yum Yum");
    },
    describe: function() {
        console.log("My Name is "+"Hadi");
    }
};

// Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

// Understand Where an Object’s Prototype Comes From
function Dog(name) {
    this.name = name;
}
let beagle2 = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle2);

// Understand the Prototype Chain
function Dog(name) {
    this.name = name;
}

let beagle3 = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle3);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);























