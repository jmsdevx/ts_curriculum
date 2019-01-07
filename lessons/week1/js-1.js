//typescript translation of javascript-1-afternoon
//problem 1
function greeting(name) {
    return "Hello " + name;
}
greeting("Bob");
//problem 2
var newGreeting = function (name) {
    return "Hello " + name;
};
newGreeting("Burt");
//problem 3
var finalGreeting = function (name) {
    return "Hello " + name;
};
finalGreeting("Bill");
//problem 4
var groceries = ["apples", "milk", "eggs", "bread"];
//problem 5
var dog = {
    name: "doggo",
    color: "dog color",
    age: 9,
    goodBoy: true,
    bark: function () { return "Woof Woof."; }
};
var devMountainClassPet = dog[name];
var ruff = dog.bark();
//problem 6
var looper = function (array) {
    var mySum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0 || array[i] >= 100) {
            mySum += array[i];
        }
    }
    return mySum;
};
//problem 7
function math(num1, num2, callback) {
    return callback(num1, num2);
}
function add(num1, num2) {
    return num1 + num2;
}
math(3, 4, add);
//problem 8
function invoker(callback) {
    return callback();
}
function myCallback() {
    return "I am a callback";
}
invoker(myCallback);
//problem 9
var duck = "cute";
function bathroom() {
    var rubberDuck = "squeaky";
    function bathtub() {
        var sailorDuck = "nautical";
    }
}
function pond() {
    var realDuck = "fluffy";
}
var globalScope = ["duck"];
var bathroomScope = ["duck", "rubberDuck", "sailorDuck"];
var bathrubScope = ["duck", "sailorDuck"];
var pondScope = ["duck", "realDuck"];
//problem 10
function outerFN() {
    (function () { return "James"; });
}
var innerFN = outerFN();
var finalResult = innerFN();
