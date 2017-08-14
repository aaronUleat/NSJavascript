var foo = true;

if(foo) {
	{ // block explicito
		let bar = foo * 2;
		bar = something(bar);
		console.log(bar);
	}
}
console.log(bar); // ReferenceError