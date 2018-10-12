"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//export means we can use this class in another file we need only one thing to impoet this class is 
///// import {User, AnotherClassName} from oops;
var User = /** @class */ (function () {
    //In Typescript we cannot overload the constructor onLY SINGLE constructor exists in a single class
    //if we define the access modifier in constructor parameter the  by deafult the variable make the field of the class
    function User(name, age, work) {
        this.name = name;
        this.age = age;
        this.work = work;
    }
    User.prototype.getuserdetail = function () {
        return this.name + " " + this.age + " " + this.work; //we can see that we not declare any field but we can  access the constructor fields
    };
    return User;
}());
exports.User = User;
var uobj = new User('Rishabh', 22, 'Software Engineer');
console.log(uobj.getuserdetail());
var Uobj = new User("Rishabh", 22, 'Android Developer'); //Both are same but in this line we define explicitly Type of object
console.log(Uobj.getuserdetail());
//There is three access modifier in TyeScript
//Public , Private , Protected 
var Parent = /** @class */ (function () {
    function Parent(parent_name, parent_age) {
        this.parent_name = '';
        this.parent_age = 0;
        this.parent_age = parent_age;
        this.parent_name = parent_name;
    }
    Parent.prototype.getdetails = function () {
        return this.parent_name + " " + this.parent_age;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(child_name, child_age) {
        return _super.call(this, child_name, child_age) || this;
    }
    Child.prototype.getdetails = function () {
        return _super.prototype.getdetails.call(this);
    };
    return Child;
}(Parent));
var pobj = new Parent('Rishabh Rawat', 21);
console.log(pobj.getdetails());
var cobj = new Child('Rishabh TypeScript', 25);
console.log(cobj.getdetails());
//from abstact class we achive the abstarction from 0 to 100 %
//the drived class responsiblity to implement the base abstact method 
var MobilePhone = /** @class */ (function () {
    function MobilePhone() {
    }
    //similar for both mobile apple and samsung
    MobilePhone.prototype.getcountry = function () {
        return 'Made in India';
    };
    return MobilePhone;
}());
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Samsung.prototype.getcompany = function () {
        return 'Samsung';
    };
    Samsung.prototype.getprocessor = function () {
        return 'Snapdragon 845';
    };
    Samsung.prototype.getram = function () {
        return 8;
    };
    Samsung.prototype.getstorage = function () {
        return 256;
    };
    return Samsung;
}(MobilePhone));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Apple.prototype.getprocessor = function () {
        return 'A12 bionic';
    };
    Apple.prototype.getram = function () {
        return 4;
    };
    Apple.prototype.getstorage = function () {
        return 64;
    };
    Apple.prototype.getcompany = function () {
        return 'Apple';
    };
    return Apple;
}(MobilePhone));
var samobj = new Samsung();
console.log(samobj.getcompany());
console.log(samobj.getprocessor());
console.log(samobj.getcountry());
var appobj = new Apple();
console.log(appobj.getcompany());
console.log(appobj.getprocessor());
console.log(appobj.getcountry());
var BMW = /** @class */ (function () {
    function BMW() {
        this.carname = 'BMW';
        this.carcountry = 'Germany';
        this.carenginecc = 2050;
    }
    BMW.prototype.getname = function () {
        return this.carname;
    };
    BMW.prototype.getcountry = function () {
        return this.carcountry;
    };
    BMW.prototype.getenginecc = function () {
        return this.carenginecc;
    };
    return BMW;
}());
var carobj = new BMW();
console.log(carobj.getname());
