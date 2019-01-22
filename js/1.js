$(function(){
	vitricuaedu = $('#khoiedu').offset().top;
 	$('.xuong, .kn').click(function(event) {
 		$('html').animate({scrollTop: vitricuaedu},700);
 		return false;
 	});
 	$('.sp').click(function(event) {
 		$('html').animate({scrollTop: $('#khoisanpham').offset().top},700);
 		return false;
 	});
 	$('.cm').click(function(event) {
 		$('html').animate({scrollTop: $('.khoicomment').offset().top},700);
 		return false;
 	});
})  
 