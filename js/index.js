$(document).ready(function() {
	$(".hamburger-menu").click(function(event) {
		$(".hamburger-menu-area").toggleClass('active-bg-c');
		$(".bar").toggleClass('animate');
		$(".logo-menu ul").toggleClass('active');
	});
});