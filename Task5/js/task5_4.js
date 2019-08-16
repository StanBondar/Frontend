window.onload = function(){
var menu = document.getElementById("mmenu");
var title = document.querySelector(".title");
title.onclick = function(){
menu.classList.toggle("open");
}
}