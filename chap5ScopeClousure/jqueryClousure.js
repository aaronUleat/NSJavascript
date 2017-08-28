function setupBot(name, selector) {
	$( selector ).click(function activator() {
		console.log( "Activating: " + name );
	});
}
setupBot("Clousure Bot 1", "#bot_1");
setupBot("Clousure Bot 2", "#bot_2");