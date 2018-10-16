"use strict";
//We can also declare the namespace same like the C# and java packages
//from namesapce we can origanise the various similar classes into a single namespace
var Calculator;
(function (Calculator) {
    class SimpleCalculator {
        returnadd(num1, num2) {
            return num1 + num2;
        }
        returnsubtract(num1, num2) {
            return num1 - num2;
        }
    }
    Calculator.SimpleCalculator = SimpleCalculator;
    function addname(first, last) {
        return first + last;
    }
    Calculator.addname = addname;
})(Calculator || (Calculator = {}));
