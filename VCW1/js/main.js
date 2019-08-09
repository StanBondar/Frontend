// alert("Hello World!")

var btn = document.getElementById('btn');

btn.onclick = function(e){
	e.preventDefault();
	} 

$(function(){
$(window).scroll(function() {
		$('#future .section-title').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass('rotateIn');
			}
		});
	});
$(window).scroll(function() {
		$('#future .opportunity-time').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass('fadeInLeft');
			}
		});
	});
$(window).scroll(function() {
		$('#future .opportunity-travels').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass('fadeInUp');
			}
		});
	});
$(window).scroll(function() {
		$('#future .opportunity-values').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass('fadeInRight');
			}
		});
	});
$(window).scroll(function() {
		$('#order .section-title').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass('fadeInUp');
			}
		});
	});
$(window).scroll(function() {
		$('#footer .credits').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass('rollIn');
			}
		});
	});
})

