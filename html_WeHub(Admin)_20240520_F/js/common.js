$(document).ready(function(){
	//nav menu
	$(".gnbFold").click(function(){
		$("body").toggleClass('unfull_nav');
	});

	//menu
	$.fn.toggleAccordionV2({
		wrapClass:".js_wrap1",
		clickShowClass:".js_click1",
		showClass:".js_show1",
		itemClickClass:".js_show1 ul li",
		multiShow:true,
		duration:200
	});
	//menu

	//layer
	$.fn.toggleAccordionV2({
		wrapClass:".js_wrap2",
		clickShowClass:".js_click2",
		showClass:".js_show2",
		itemClickClass:".alarm_list ul li,.language_layer ul li",
		hideClass:".bt_close, .js_show2 .alarm_list ul li,.language_layer ul li",
		fade:true,
		layer:true,
		duration:200
	});
	$.fn.toggleAccordionV2({
		wrapClass:".js_wrap",
		clickShowClass:".js_click",
		showClass:".js_show",
		itemClickClass:"",
		hideClass:".js_show ul li",
		layer:true,
		duration:200
	});
	//layer

	// language select
	$(".language_Box ul li").click(function(){
		//$(this).addClass("on").siblings("li").removeClass("on");
		$(".language_Box .bt_language").html($(this).find("a").children().clone());
	});
	// language select

	//common
	$(".js_wrap").selectTextV2({
		wrapClass: ".js_wrap",
		clickOn: ".js_show ul li a span",
		setTextToClass: ".js_click"
	});

	$(".combo_control ul li a span").click(function(){
		//$(this).addClass("on").siblings("li").removeClass("on");
		$(this).parents("ul").find("li").removeClass('on');
		$(this).parent().parent().addClass('on');
		$(this).parents(".combo_control").children(".tx_placeholder").removeClass("tx_placeholder");
	});

	//inPage_pop
	$(".bt_inPageClose").click(function(){
		$(".inPage_pop_wrap").fadeOut(300);
		$("body").css({"overflow":"visible"});
	});
	$(".company_wrap .js_click1").click(function(){
		$(".company_layer").slideToggle(300);
		$(this).toggleClass("on");
	});
	//inPage_pop

	// [D]사이드바 접기/펼치기, fold/unfold
	$(".bt_inSidebar.toggleFold").click(function(){
		$(this).toggleClass("fold");
		$(".col_inn").toggleClass("unfold");
	});

	$(".bt_inSidebar.hidden").click(function(){
		$(".left_col").css({"display":"none"});
		$(".content_body_inn,.displayGrid2").removeClass("column");
	});

	$(".ic_filter").click(function(){
		$(".left_col").css({"display":"block"});
		$(".content_body_inn,.displayGrid2").addClass("column");
	});
	//common

	//calendar
	$(".bt_more_wrap .bt_more").click(function(){
		$(this).toggleClass('on');
		$(this).parent().parent().find(".dataStatus_item").not(":first").slideToggle(300);
	});
	//calendar

});
