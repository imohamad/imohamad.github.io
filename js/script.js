$(document).ready(function(){$(".info").delay(3000).animate({ opacity: 1,},1000);});
$(function () {
	var winheight = $(window).height();
	var divheight = $(".info").height();
	var totalheight = winheight - divheight;
	var realheight = totalheight / 2;
	$(".info").css({ 'margin-top': realheight });
});