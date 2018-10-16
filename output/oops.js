"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//export means we can use this class in another file we need only one thing to impoet this class is 
///// import {User, AnotherClassName} from oops;
class User {
    //In Typescript we cannot overload the constructor onLY SINGLE constructor exists in a single class
    //if we define the access modifier in constructor parameter the  by deafult the variable make the field of the class
    constructor(name, age, work) {
        this.name = name;
        this.age = age;
        this.work = work;
    }
    getuserdetail() {
        return this.name + " " + this.age + " " + this.work; //we can see that we not declare any field but we can  access the constructor fields
    }
}
exports.User = User;
let uobj = new User('Rishabh', 22, 'Software Engineer');
console.log(uobj.getuserdetail());
let Uobj = new User("Rishabh", 22, 'Android Developer'); //Both are same but in this line we define explicitly Type of object
console.log(Uobj.getuserdetail());
//There is three access modifier in TyeScript
//Public , Private , Protected 
class Parent {
    constructor(parent_name, parent_age) {
        this.parent_name = '';
        this.parent_age = 0;
        this.parent_age = parent_age;
        this.parent_name = parent_name;
    }
    getdetails() {
        return this.parent_name + " " + this.parent_age;
    }
}
class Child extends Parent {
    constructor(child_name, child_age) {
        super(child_name, child_age);
    }
    getdetails() {
        return super.getdetails();
    }
}
let pobj = new Parent('Rishabh Rawat', 21);
console.log(pobj.getdetails());
let cobj = new Child('Rishabh TypeScript', 25);
console.log(cobj.getdetails());
//from abstact class we achive the abstarction from 0 to 100 %
//the drived class responsiblity to implement the base abstact method 
class MobilePhone {
    //similar for both mobile apple and samsung
    getcountry() {
        return 'Made in India';
    }
}
class Samsung extends MobilePhone {
    getcompany() {
        return 'Samsung';
    }
    getprocessor() {
        return 'Snapdragon 845';
    }
    getram() {
        return 8;
    }
    getstorage() {
        return 256;
    }
}
class Apple extends MobilePhone {
    getprocessor() {
        return 'A12 bionic';
    }
    getram() {
        return 4;
    }
    getstorage() {
        return 64;
    }
    getcompany() {
        return 'Apple';
    }
}
let samobj = new Samsung();
console.log(samobj.getcompany());
console.log(samobj.getprocessor());
console.log(samobj.getcountry());
let appobj = new Apple();
console.log(appobj.getcompany());
console.log(appobj.getprocessor());
console.log(appobj.getcountry());
class BMW {
    constructor() {
        this.carname = 'BMW';
        this.carcountry = 'Germany';
        this.carenginecc = 2050;
    }
    getname() {
        return this.carname;
    }
    getcountry() {
        return this.carcountry;
    }
    getenginecc() {
        return this.carenginecc;
    }
}
var carobj = new BMW();
console.log(carobj.getname());
//For using the namespace code we use like
/// <reference path="./namespacecode.ts"/>
let getname = Calculator.addname('Rishabh', 'Rawat');
console.log(getname);
let sum = new Calculator.SimpleCalculator();
console.log(sum.returnadd(10, 15));
