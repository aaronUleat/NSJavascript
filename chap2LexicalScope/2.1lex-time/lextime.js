console.time('test');
function foo(a) {
	var b = a * 2;
	function bar(c) {
		console.log(a, b, c);
	}
	bar(b * 3);
	// Esta variable no puede ser accesada con el objeto window
	var noGlobal = 'no global';
}
// Esta variable puede ser accesada con el objeto window
// window.globalVar.
var globalVar = "Global Variable";
foo(2);
//some code
console.timeEnd('test');