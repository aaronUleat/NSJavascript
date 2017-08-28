function wait(message) {
	setTimeout(function timer() {
		console.log(message);
	}, 5000);
}
wait("Hello message here!!!!");