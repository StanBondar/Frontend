	window.onload = function(){
	var pattern = /\d\d\W\D\D/g;	
	var text = document.getElementById("pp");
	var result = text.innerHTML.replace(pattern, "***");
	document.getElementById("pp").after(result);
}