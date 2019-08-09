// alert("Hello World!")

var btn = document.getElementById('btn');

btn.onclick = function(e){
	e.preventDefault();
	// alert('Lick clicked')
	var text = document.querySelector('p.intro');
	text.classList.add('red');
	 
	document.querySelector('.skill-change').style.marginRight = '100px';
} 

$(function(){
$(window).scroll(function() {
		$('#learn .skill-free').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass('fadeInUp');
			}
		});
	});
$(window).scroll(function() {
		$('#learn .section-title').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass('fadeInLeft');
			}
		});
	});
})

