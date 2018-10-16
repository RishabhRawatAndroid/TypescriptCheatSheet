///////////////////////////////////////////////////////////////////////////////////////////
//Variable in TypeScript string,number,boolean,any
//we have a let and var for declare variable
//var for global scope and let for local scope
var myname:string="Rishabh";
//myname=1996;  //Error because we already explicity type of string
let age:number=22;
let check:boolean=true;

//changes can be done at runtime
let notsure:any='Rawat';
notsure=true;
notsure=25;

//Define the constant value we can't change the sex variable value
const sex:string='M'

console.log(myname);
console.log(age);
console.log(notsure);
console.log(check);
///////////////////////////////////////////////////////////////////////////////////////////////

//Define the array in typescipt
let list:number[]=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<=list.length-1;i++)
{
    console.log(list[i]);
}

//Define the Any type array
let anylist:any[];
anylist=['Rishabh','Rawat',22,25071996,'Male',true];
anylist.push('a')
anylist.push('b')
anylist.push('c')
anylist.push('d')
anylist.pop()
for(let i=0;i<=anylist.length-1;i++)
{
    console.log(anylist[i]);
}

var loop:any;
for(loop in anylist)
{
 console.log(anylist[loop]);
}

//Define the multidimensional array
let myArray:number[][]=[[1,2,3],[4,5,6],[7,8,9],[11,12,13]];
for(var i = 0; i < myArray.length; i++) { 
	for(var j = 0; j < myArray[i].length; j++) { // 
			console.log(myArray[i][j])
	}
}

//Define the array using the Array class
let classarray=new Array(5,4,5,7,4,8,5,6,6,2,2,4,6,6);
/////////////////////////////////////////////////////////////////////////////////////////////////

//With tuples we can define what type of data (variable type) 
//can be stored in every position ( or few starting positions ) inside of an array
var mytuple:[string,number,number];
mytuple=['rishabh',5,10];
console.log(mytuple[2])

//another way to define the tuples. Tuples are always fixed in size with know the element type
type Tuple = [boolean, number];
let x:Tuple;
x=[true,25];
//x = [false, 0, 3, 3, true]; //error because length is more 

console.log('-------------------------------------------------------')
///////////////////////////////////////////////////////////////////////////////////////////////////////
//Enum  enumeration type define the more mening full of same type
//default value start with 0 and futher values incement by default
enum days {sunday=1,monday,tuesday,wednesday,thusday,friday,saturday};
let mon:number=days.monday;
console.log(mon);
console.log(days.friday);
///////////////////////////////////////////////////////////////////////////////////////////////////

//for....in statement

let myobj:any={a:11,b:12,c:13,d:14};
for(let y in myobj)
{
    console.log(myobj[y])
}
console.log("text "+myobj['a']) //output 11 and so on
/////////////////////////////////////////////////////////////////////////////////////////////////////

//function declartion in Typescript
function printname(str:string):void //return type void and it is named function
{

    if(str.charAt(0)=='R' || str.charAt(0)=='r')
    {
        console.log("Your name start with R");
    }
    else{
        console.log("Your name not start with R");
    }
}
printname("Rishabh")


//anamyous function declartion in typescipt
let printanothername=function(str:string):string
{
    if(str.charAt(0)=='R' || str.charAt(0)=='r')
       return 'Yes';
    else
        return 'No';
}
printanothername("Rishabh")


//rest parameter function or param same like a c#
//rest parameters act as placeholders for multiple arguments of the same type.
let restfuntion=function(...inttype:number[])
{
for(let i=0;i<=inttype.length-1;i++)
{
    console.log(inttype[i])
}
}

restfuntion(4,5,2,6,9,5,6,2,4);

//Default paramter function
function defaultfun(num1:number=0,num2:number=0):number //assign the num1 and num2 value 0 this is default value
{
return num1+num2;
}

//TypeScript introduces the question mark ? syntax to indicate optional parameters. 
var concatStrings = function(a: string, b: string, c?: string) {
    return a + b + c;
   }
   console.log(concatStrings("a", "b", "c"));
   console.log(concatStrings("a", "b"));


   //Callback function -> When we pass the function into the another function as a parameter
   function myCallBack(text: string) {
    console.log("inside myCallback " + text);
   }

   function callingFunction(initialText: string,callback: (text: string) => void)
   {
    callback(initialText);
   }
   callingFunction("myText", myCallBack);
   //callingFunction("myText", "this is not a function");
/////////////////////////////////////////////////////////////////////////////////////////////////////
//the ability to combine one or two types using the pipe symbol (|) to denote a Union Type.
var uniontype:string|number='Hello';
uniontype=25;
//uniontype=true; //error because we cann only define two type of this union type
//if we do like var uniontype:string|number|boolean  then the 168 line will be correct

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//type aliases which means we can also create our own custom type
//Type aliases are denoted by using the type keyword
type StringNumberOrBoolean = string | number | boolean;
function addWithAliases(arg1: StringNumberOrBoolean,arg2: StringNumberOrBoolean): StringNumberOrBoolean {
return "String|Number|Boolean Type Aliases";
}



////////////////////////////////////////////////////////////////////////////////////////////
//lamda function very consice function  {The fat arrow notation/lambda notation (=>)}
let lamdafun=(x:number):number=>{return x*x}
////////////////////////////////////////////////////////////////////////////////////////////
//DuckTyping in TypeScript

var product={
    id:"dv54d7sv4",
    name:"Apple IPhone",
    price:1000
}

console.log(product.id)

////////////////////////////////////////////////////////////////////////////////
//Classes in the TypeScript
class Car {

    //field
    private engine:string;
    //constructor    //we cannot overload the constructor in typescipt only single constructor exists in single class
    constructor(engine:string) {
       this.engine = engine;
    }

    //function
    disp():void {
       console.log("Engine is  :   "+this.engine);
    }
 }

 let carobj=new Car("Land Rover");
 carobj.disp();