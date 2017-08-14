function process(data) {
	// do something interesting
}
var someReallyBigData = {};
process(someReallyBigData);

var btn = document.getElementById( "my_button" );
btn.addEventListener("click", function (evt) {
	console.log("button clicked")
}, /*capturingPhase=*/  false);