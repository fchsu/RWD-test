$(document).ready(function() {
	$(".hamburger-menu").click(function(event) {
		$(".hamburger-menu-area").toggleClass('active-bg-c');
		$(".bar").toggleClass('animate');
		$(".logo-menu ul").toggleClass('active');
	});

	//點擊輸入欄位時，隱藏提示圖片
	$("#email").focus(function(event) {
		$(this).parent().find("p").css('display', 'none');
	});
	$("#email").blur(function(event) {
		$(this).parent().find("p").css('display', 'block');
	});
	$("#password").focus(function(event) {
		$(this).parent().find("p").css('display', 'none');
	});
	$("#password").blur(function(event) {
		$(this).parent().find("p").css('display', 'block');
	});
});
