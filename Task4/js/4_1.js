// (window.onload = function(){
// 	var counter = 0;
// 	document.getElementById('but').onclick = function (){
// 	counter++;
// 	document.getElementById("output").innerHTML = counter;
// 	}
// }
(function(){
var message = "Message with delay";
	function showMessage(){
		alert(message);
	}
	var timer = setTimeout(showMessage, 3500);
})();