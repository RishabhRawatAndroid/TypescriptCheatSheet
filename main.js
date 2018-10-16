//Variable in TypeScript string,number,boolean,any
//we have a let and var for declare variable
//var for global scope and let for local scope
var myname = "Rishabh";
//myname=1996;  //Error because we already explicity type of string
var age = 22;
var check = true;
//changes can be done at runtime
var notsure = 'Rawat';
notsure = true;
notsure = 25;
//Define the constant value we can't change the sex variable value
var sex = 'M';
console.log(myname);
console.log(age);
console.log(notsure);
console.log(check);
//Define the array in typescipt
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i_1 = 0; i_1 <= list.length - 1; i_1++) {
    console.log(list[i_1]);
}
//Define the Any type array
var anylist;
anylist = ['Rishabh', 'Rawat', 22, 25071996, 'Male', true];
anylist.push('a');
anylist.push('b');
anylist.push('c');
anylist.push('d');
anylist.pop();
for (var i_2 = 0; i_2 <= anylist.length - 1; i_2++) {
    console.log(anylist[i_2]);
}
var loop;
for (loop in anylist) {
    console.log(anylist[loop]);
}
//Define the multidimensional array
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [11, 12, 13]];
for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) { // 
        console.log(myArray[i][j]);
    }
}
//Define the array using the Array class
var classarray = new Array(5, 4, 5, 7, 4, 8, 5, 6, 6, 2, 2, 4, 6, 6);
//With tuples we can define what type of data (variable type) 
//can be stored in every position ( or few starting positions ) inside of an array
var mytuple;
mytuple = ['rishabh', 5, 10];
console.log(mytuple[2]);
var x;
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
var mon = days.monday;
console.log(mon);
console.log(days.friday);
//for....in statement
var myobj = { a: 11, b: 12, c: 13, d: 14 };
for (var y in myobj) {
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
var printanothername = function (str) {
    if (str.charAt(0) == 'R' || str.charAt(0) == 'r')
        return 'Yes';
    else
        return 'No';
};
printanothername("Rishabh");
//rest parameter function
//rest parameters act as placeholders for multiple arguments of the same type.
var restfuntion = function () {
    var inttype = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inttype[_i] = arguments[_i];
    }
    for (var i_3 = 0; i_3 <= inttype.length - 1; i_3++) {
        console.log(inttype[i_3]);
    }
};
restfuntion(4, 5, 2, 6, 9, 5, 6, 2, 4);
//Default paramter function
function defaultfun(num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
}
//lamda function very consice function  {The fat arrow notation/lambda notation (=>)}
var lamdafun = function (x) { return x * x; };
// //TypeScript also supports defining a function with the built-in JavaScript constructor called Function ().
// let mul=new Function()
// {
// }
// mul()
//Classes in the TypeScript
var Car = /** @class */ (function () {
    //constructor    //we cannot overload the constructor in typescipt only single constructor exists in single class
    function Car(engine) {
        this.engine = engine;
    }
    //function
    Car.prototype.disp = function () {
        console.log("Engine is  :   " + this.engine);
    };
    return Car;
}());
var carobj = new Car("Land Rover");
carobj.disp();
