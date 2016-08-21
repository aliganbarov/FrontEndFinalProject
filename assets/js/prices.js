if ($(window).width() < 1000) {
	$('#prices .row1 h1').css("font-size", "27px");
	$('#prices .row1 p').css("width", "90%");
	$('#prices .row3 h2').css("font-size", "27px");
	$('#prices .row3 p').css("width", "90%");
}
else {
	$('#prices .row1 h1').css("font-size", "45px");
	$('#prices .row1 p').css("width", "35%");
	$('#prices .row3 h2').css("font-size", "45px");
	$('#prices .row3 p').css("width", "35%");
}

//dynamic changes
$(window).resize(function() {
	if ($(window).width() < 1000) {
		$('#prices .row1 h1').css("font-size", "27px");
		$('#prices .row1 p').css("width", "90%");
		$('#prices .row3 h2').css("font-size", "27px");
		$('#prices .row3 p').css("width", "90%");
	}
	else {
		$('#prices .row1 h1').css("font-size", "45px");
		$('#prices .row1 p').css("width", "35%");
		$('#prices .row3 h2').css("font-size", "45px");
		$('#prices .row3 p').css("width", "35%");
	}

})