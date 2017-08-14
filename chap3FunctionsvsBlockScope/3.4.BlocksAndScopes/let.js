var foo = true;
if(foo) {
	let bar = foo * 2;
	bar = something(bar);
	console.log(bar);
}

console.log(bar); // reference error