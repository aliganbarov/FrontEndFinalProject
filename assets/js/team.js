//change size
if ($(window).width() < 1000) {
	$('#team .row1 h1').css('font-size', '27px');
}
else {
	$('#team .row1 h1').css('font-size', '45px');
}
//dynamic change
$(window).resize(function(){
	if ($(window).width() < 1000) {
		$('#team .row1 h1').css('font-size', '27px');
	}
	else {
		$('#team .row1 h1').css('font-size', '45px');
	}
})