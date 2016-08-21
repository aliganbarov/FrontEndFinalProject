//define initial home page size
$('#home').css({
	height: $(window).height() + 'px'
})

//define initial #home #homeContainer .inner margin-top
$('#home #homeContainer .inner').css({
	marginTop: ($(window).height() - $('#home .inner').height())/2 + 'px'
})



$(window).resize(function() {
	//dynamically changing home page size
	$('#home').css({
		height: $(window).height() + 'px'
	})

	//dynamically changing .inner marginTop
	$('#home #homeContainer .inner').css({
	marginTop: ($(window).height() - $('#home .inner').height())/2 + 'px'
})
})

//adding active class to EXTRA in menu
function openExtra() {
	$('#home .navbar .dropdown').addClass('open');
	$('#home .navbar .dropdown').css ('borderTop', '3px solid #1AC6FF');
	$('#home .navbar .dropdown .dropdown-toggle').css('color', '#1AC6FF');
}
$('#home .navbar .dropdown').on('mouseenter',function() {
	openExtra();
});
//removing active class
function closeExtra() {
	$('#home .navbar .dropdown').removeClass('open');
	$('#home .navbar .dropdown').css ('borderTop', 'none');	
	$('#home .navbar .dropdown .dropdown-toggle').css('color', '#C6B7D1');
}
$('#home .navbar .dropdown').on('mouseleave',function() {
	closeExtra();
});

/* RESPONSIVITY FOR TEXT */
if ($(window).width() < 1000) {
	$('#homeContainer .inner h1').css('font-size', '29px');
	$('#homeContainer .inner p').css('font-size', '19px');
	$('#homeContainer .inner button').css({
		width: '90%',
		margin: '0 auto',
		marginBottom: '20px'
	});
	// $('#homeContainer .inner button').addClass('col-xs-12');
}
else {
	$('#homeContainer .inner h1').css('font-size', '60px');
	$('#homeContainer .inner p').css('font-size', '23px');
	$('#homeContainer .inner button').css({
		width: 'auto',
		marginRight: '20px'
	});
	// $('#homeContainer .inner button').removeClass('col-xs-12');
}
//dynamic responsivity
$(window).resize(function(){
	if ($(window).width() < 1000) {
		$('#homeContainer .inner h1').css('font-size', '29px');
		$('#homeContainer .inner p').css('font-size', '19px');
		$('#homeContainer .inner button').css({
			width: '90%',
			margin: '0 auto',
			marginBottom: '20px'
		});
		// $('#homeContainer .inner button').addClass('col-xs-12');
	}
	else {
		$('#homeContainer .inner h1').css('font-size', '60px');
		$('#homeContainer .inner p').css('font-size', '23px');
		$('#homeContainer .inner button').css({
			width: 'auto',
			marginRight: '20px'
		});
		// $('#homeContainer .inner button').removeClass('col-xs-12');
	}
})

/* #homepagesMenu #blogMenu #ecommerceMenu activation */
$('#homepagesMenu').fadeOut(0);
$('#blogMenu').fadeOut(0);
$('#ecommerceMenu').fadeOut(0);

$('#homepages').on('mouseenter', function(){
	$('#homepagesMenu').fadeIn(500);
});
$('#homepages').on('mouseleave', function(){
	$('#homepagesMenu').fadeOut(0);
});
$('#homepagesMenu').on('mouseenter', function() {
	$('#homepagesMenu').fadeIn();
	openExtra();
})
$('#homepagesMenu').on('mouseleave', function() {
	$('#homepagesMenu').fadeOut();
	closeExtra();
})

$('#blog').on('mouseenter', function(){
	console.log("hovered on #blog")
	$('#blogMenu').fadeIn(500);
});
$('#blog').on('mouseleave', function(){
	$('#blogMenu').fadeOut(0);
});

$('#ecommerce').on('mouseenter', function(){
	$('#ecommerceMenu').fadeIn(500);
});
$('#ecommerce').on('mouseleave', function(){
	$('#ecommerceMenu').fadeOut(0);
});


if ($(window).scrollTop() > 500) {
	$('#header').addClass('white');
	$('.navbar-brand img').attr('src', 'img/1.png');
}
else {
	$('#header').removeClass('white');
	$('.navbar-brand img').attr('src', 'img/3.png');
}

$(window).scroll(function(){
	if ($(window).scrollTop() > 500) {
		$('#header').addClass('white');
		$('.navbar-brand img').attr('src', 'img/1.png');
	}
	else {
		$('#header').removeClass('white');
		$('.navbar-brand img').attr('src', 'img/3.png');
	}
})