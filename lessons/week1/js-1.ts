//typescript translation of javascript-1-afternoon

//problem 1

function greeting(name: string): string {
  return "Hello " + name;
}

greeting("Bob");

//problem 2

let newGreeting = function(name: string): string {
  return "Hello " + name;
};

newGreeting("Burt");

//problem 3

let finalGreeting = (name: string): string => {
  return "Hello " + name;
};

finalGreeting("Bill");

//problem 4

let groceries: string[] = ["apples", "milk", "eggs", "bread"];

//problem 5

let dog: {
  name: string;
  color: string;
  age: number;
  goodBoy: boolean;
} = {
  name: "doggo",
  color: "dog color",
  age: 9,
  goodBoy: true
};

let devMountainClassPet: string = dog[name];
