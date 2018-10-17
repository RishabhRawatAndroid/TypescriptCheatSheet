//We can also declare the namespace same like the C# and java packages
//from namesapce we can origanise the various similar classes into a single namespace

export namespace Calculator
{
    export class SimpleCalculator
    {
        returnadd(num1:number,num2:number):number
        {
            return num1+num2;
        }

        returnsubtract(num1:number,num2:number):number
        {
            return num1-num2;
        }
    }

    export function addname(first:string,last:string):string{
        return first+last;
    }
}