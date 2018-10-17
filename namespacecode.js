"use strict";
//We can also declare the namespace same like the C# and java packages
//from namesapce we can origanise the various similar classes into a single namespace
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator;
(function (Calculator) {
    var SimpleCalculator = /** @class */ (function () {
        function SimpleCalculator() {
        }
        SimpleCalculator.prototype.returnadd = function (num1, num2) {
            return num1 + num2;
        };
        SimpleCalculator.prototype.returnsubtract = function (num1, num2) {
            return num1 - num2;
        };
        return SimpleCalculator;
    }());
    Calculator.SimpleCalculator = SimpleCalculator;
    function addname(first, last) {
        return first + last;
    }
    Calculator.addname = addname;
})(Calculator = exports.Calculator || (exports.Calculator = {}));
