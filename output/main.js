"use strict";
//Variable in TypeScript string,number,boolean,any
//we have a let and var for declare variable
//var for global scope and let for local scope
var myname = "Rishabh";
//myname=1996;  //Error because we already explicity type of string
let age = 22;
let check = true;
//changes can be done at runtime
let notsure = 'Rawat';
notsure = true;
notsure = 25;
//Define the constant value we can't change the sex variable value
const sex = 'M';
console.log(myname);
console.log(age);
console.log(notsure);
console.log(check);
//Define the array in typescipt
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i <= list.length - 1; i++) {
    console.log(list[i]);
}
//Define the Any type array
let anylist;
anylist = ['Rishabh', 'Rawat', 22, 25071996, 'Male', true];
anylist.push('a');
anylist.push('b');
anylist.push('c');
anylist.push('d');
anylist.pop();
for (let i = 0; i <= anylist.length - 1; i++) {
    console.log(anylist[i]);
}
var loop;
for (loop in anylist) {
    console.log(anylist[loop]);
}
//Define the multidimensional array
let myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [11, 12, 13]];
for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) { // 
        console.log(myArray[i][j]);
    }
}
//Define the array using the Array class
let classarray = new Array(5, 4, 5, 7, 4, 8, 5, 6, 6, 2, 2, 4, 6, 6);
//With tuples we can define what type of data (variable type) 
//can be stored in every position ( or few starting positions ) inside of an array
var mytuple;
mytuple = ['rishabh', 5, 10];
console.log(mytuple[2]);
let x;
x = [true, 25];
//x = [false, 0, 3, 3, true]; //error because length is more 
console.log('-------------------------------------------------------');
//Enum  enumeration type define the more mening full of same type
//default value start with 0 and futher values incement by default
var days;
(function (days) {
    days[days["sunday"] = 1] = "sunday";
    days[days["monday"] = 2] = "monday";
    days[days["tuesday"] = 3] = "tuesday";
    days[days["wednesday"] = 4] = "wednesday";
    days[days["thusday"] = 5] = "thusday";
    days[days["friday"] = 6] = "friday";
    days[days["saturday"] = 7] = "saturday";
})(days || (days = {}));
;
let mon = days.monday;
console.log(mon);
console.log(days.friday);
//for....in statement
let myobj = { a: 11, b: 12, c: 13, d: 14 };
for (let y in myobj) {
    console.log(myobj[y]);
}
console.log("text " + myobj['a']); //output 11 and so on
//function declartion in Typescript
function printname(str) {
    if (str.charAt(0) == 'R' || str.charAt(0) == 'r') {
        console.log("Your name start with R");
    }
    else {
        console.log("Your name not start with R");
    }
}
printname("Rishabh");
//anamyous function declartion in typescipt
let printanothername = function (str) {
    if (str.charAt(0) == 'R' || str.charAt(0) == 'r')
        return 'Yes';
    else
        return 'No';
};
printanothername("Rishabh");
//rest parameter function
//rest parameters act as placeholders for multiple arguments of the same type.
let restfuntion = function (...inttype) {
    for (let i = 0; i <= inttype.length - 1; i++) {
        console.log(inttype[i]);
    }
};
restfuntion(4, 5, 2, 6, 9, 5, 6, 2, 4);
//Default paramter function
function defaultfun(num1 = 0, num2 = 0) {
    return num1 + num2;
}
//lamda function very consice function  {The fat arrow notation/lambda notation (=>)}
let lamdafun = (x) => { return x * x; };
// //TypeScript also supports defining a function with the built-in JavaScript constructor called Function ().
// let mul=new Function()
// {
// }
// mul()
//Classes in the TypeScript
class Car {
    //constructor    //we cannot overload the constructor in typescipt only single constructor exists in single class
    constructor(engine) {
        this.engine = engine;
    }
    //function
    disp() {
        console.log("Engine is  :   " + this.engine);
    }
}
let carobj = new Car("Land Rover");
carobj.disp();
