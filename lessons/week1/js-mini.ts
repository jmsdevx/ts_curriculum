//1.1 Javascript Problems Mini Project translated to TS

//Data Types

//1
let dt_greeting: string = "Hi";
let farewell: string = "Goodbye";

//2
let hello: string = "Hello";
let userName: string = "James";
let dt2_greeting = hello + userName;

//3
let seven: number = 7;

//4
let money: number = 100000;

//5
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

//6
let num1: number = 2;
let num2: number = 3;
function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

//8
let theName: string = "Bob";
let theBoss: string;

function assignName(name: string): void {
  theBoss = name;
}

//9
let user: { name: string; age: number; email: string } = {
  name: "Billy",
  age: 22,
  email: "billy@william.com"
};

function getName(user: object) {
  return user[name];
}

//13
let calendar: { months: string[]; weekDays: string[]; days: number[] } = {
  months: ["January", "February", "March"],
  weekDays: ["Monday", "Tuesday", "Wednesday"],
  days: [1, 2, 3, 4, 5]
};

function getWeekDay(): string {
  return calendar.weekDays[2];
}

//14
