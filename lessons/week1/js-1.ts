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
  bark: () => string;
} = {
  name: "doggo",
  color: "dog color",
  age: 9,
  goodBoy: true,
  bark: () => "Woof Woof."
};

let devMountainClassPet: string = dog[name];

let ruff: string = dog.bark();

//problem 6

let looper = (array: number[]): number => {
  let mySum: number = 0;

  for (let i: number = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0 || array[i] >= 100) {
      mySum += array[i];
    }
  }
  return mySum;
};

//problem 7

function math(
  num1: number,
  num2: number,
  callback: (num1: number, num2: number) => number
): any {
  return callback(num1, num2);
}

function add(num1: number, num2: number): number {
  return num1 + num2;
}

math(3, 4, add);

//problem 8

function invoker(callback: () => any): string {
  return callback();
}

function myCallback(): string {
  return "I am a callback";
}

invoker(myCallback);

//problem 9

let duck: string = "cute";

function bathroom(): void {
  let rubberDuck: string = "squeaky";
  function bathtub(): void {
    let sailorDuck = "nautical";
  }
}

function pond(): void {
  let realDuck: string = "fluffy";
}

let globalScope: string[] = ["duck"];

let bathroomScope: string[] = ["duck", "rubberDuck", "sailorDuck"];

let bathrubScope: string[] = ["duck", "sailorDuck"];

let pondScope: string[] = ["duck", "realDuck"];

//problem 10

function outerFN(): any {
  () => "James";
}

let innerFN: () => string = outerFN();

let finalResult: string = innerFN();
