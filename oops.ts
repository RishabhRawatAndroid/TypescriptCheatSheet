//export means we can use this class in another file we need only one thing to impoet this class is 
///// import {User, AnotherClassName} from oops;
export class User  
{
    //In Typescript we cannot overload the constructor onLY SINGLE constructor exists in a single class
    //if we define the access modifier in constructor parameter the  by deafult the variable make the field of the class
    constructor(private name:string,private age:number,private work:string)
    {
    }

    public getuserdetail():string
    {
         return this.name+" "+this.age+" "+this.work;  //we can see that we not declare any field but we can  access the constructor fields
    }
}

let uobj=new User('Rishabh',22,'Software Engineer');  
console.log(uobj.getuserdetail())

let Uobj:User=new User("Rishabh",22,'Android Developer'); //Both are same but in this line we define explicitly Type of object
console.log(Uobj.getuserdetail())


//There is three access modifier in TyeScript
//Public , Private , Protected 
class Parent
{
protected parent_name:string='';
protected parent_age:number=0;
constructor(parent_name:string,parent_age:number)
{
    this.parent_age=parent_age;
    this.parent_name=parent_name;
}

public getdetails():string
{
 return this.parent_name+" "+this.parent_age;   
}
}

class Child extends Parent
{
constructor(child_name:string,child_age:number)
{
    super(child_name,child_age);
}

public getdetails():string
{
    return super.getdetails();
}
}

let pobj:Parent=new Parent('Rishabh Rawat',21);
console.log(pobj.getdetails());

let cobj:Parent=new Child('Rishabh TypeScript',25);
console.log(cobj.getdetails());


//from abstact class we achive the abstarction from 0 to 100 %
//the drived class responsiblity to implement the base abstact method 
abstract class MobilePhone
{
    abstract getcompany():string;
    abstract getprocessor():string;
    abstract getram():number;
    abstract getstorage():number;

    //similar for both mobile apple and samsung
    getcountry():string
    {
         return 'Made in India';
    }
}

class Samsung extends MobilePhone
{
    getcompany(): string {
       return 'Samsung';
    }  
      getprocessor(): string {
        return 'Snapdragon 845';
    }
    getram(): number {
        return 8;
    }
    getstorage(): number {
        return 256;
    }
}

class Apple extends MobilePhone
{
    getprocessor(): string {
        return 'A12 bionic'
    }
    getram(): number {
        return 4;
    }
    getstorage(): number {
        return 64;
    }
    getcompany():string
    {
        return 'Apple';
    }
}

let samobj:MobilePhone=new Samsung();
console.log(samobj.getcompany())
console.log(samobj.getprocessor())
console.log(samobj.getcountry())

let appobj:MobilePhone=new Apple();
console.log(appobj.getcompany())
console.log(appobj.getprocessor())
console.log(appobj.getcountry())


