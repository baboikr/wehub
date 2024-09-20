$(document).ready(function() {
	/* nav switch */
	$('.nav_left .nav_head a.nav_switcher').click(function(){
		$('.nav_left').toggleClass('short');
	});
	$('.nav_left .nav_menu .setting dt > a').click(function(){
		$(this).parents('dl').toggleClass('off');
		$(this).parents('dt').siblings('dd').slideToggle();
	});

	/* language */
	$('.menu_right ul li .lang > a').click(function(){
		$(this).parents('.lang').toggleClass('on');
		$(this).next('ul').slideToggle();
	});

	/* notification */
	$('.notification > a').click(function(){
		$('.notification_box').slideToggle();
	});
	$('.notification_box .head a.close').click(function(){
		$('.notification_box').fadeOut();
	});
});
