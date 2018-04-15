$(document).ready(function() {
	$(".hamburger-menu").click(function(event) {
		$(".hamburger-menu-area").toggleClass('active-bg-c');
		$(".bar").toggleClass('animate');
		$(".logo-menu ul").toggleClass('active');
	});

	$(".food-menu a").click(function(event) {
		event.preventDefault();
		$(this).toggleClass('web-list');
		$(this).parent().siblings().find('a').removeClass('web-list');
	});

	$(".product-area > ul button").click(function(event) {
		$(this).parent().find(".fas.fa-heart").toggleClass('display');
	});
});

