function toggle() {
  var element = document.getElementById("marquee-main");
  element.classList.toggle("active");
}

/**
 * Example of starting a plugin with options.
 * I am just passing some of the options in the following example.
 * you can also start the plugin using $('.marquee').marquee(); with defaults
*/
$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 5000,
	//gap in pixels between the tickers
	gap: 300,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true
});

$( function() {
    $( ".draggable" ).draggable();
  } );
