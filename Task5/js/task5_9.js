var div = document.getElementById("div");
var topPos = 0;
var leftPos = 0;
var rightPos = 0;
var downPos = 0;

document.getElementById("upButton").onclick = function moveUp(){
	downPos+=50;
	topPos-=50;
	div.style.bottom = downPos + "px";
	div.style.top = topPos + "px";
}

document.getElementById("leftButton").onclick = function moveLeft(){
	rightPos+=50;
	leftPos-=50;
	div.style.right = rightPos + "px";
	div.style.left = leftPos + "px";
}

document.getElementById("rightButton").onclick = function moveRight(){
	leftPos+=50;
	rightPos-=50;
	div.style.left = leftPos + "px";
	div.style.right = rightPos + "px";
}

document.getElementById("downButton").onclick = function moveDown(){
	topPos+=50;
	downPos-=50;
	div.style.top = topPos + "px";
	div.style.bottom = downPos + "px";
}