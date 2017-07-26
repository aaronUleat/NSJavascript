function foo(str) {
	"use strict";
	eval(str);
	console.log(a); // referenceError: a is not defined
}

foo("var a = 2");