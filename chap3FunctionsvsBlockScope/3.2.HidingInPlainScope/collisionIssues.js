function foo() {
	function bar(a) {
		i = 3; // cambiando 'i' en el encapsuliamiento del scope for
		console.log(a + i);
	}
	for(var i = 0; i<10; i++) {
		bar(i*2); // ops, un loop infinito
	}
}
foo();