	window.onload = function(){
	function resizeWindow(){
		 var width = document.documentElement.clientWidth;
		 var height = document.documentElement.clientHeight;
		 document.getElementById("width").innerHTML = "Width: "+width;
		 document.getElementById("height").innerHTML = "Height:"+height;
	}

	window.addEventListener("resize", resizeWindow);

	resizeWindow();
}