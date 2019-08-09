window.onload = function(){
var theHeader = document.getElementById('headText');
var p1 = document.createElement("p");
p1.innerHTML = "js works";
var p2 = document.createElement("p");
p2.innerHTML = "js works";
theHeader.appendChild(p1);
document.body.insertBefore(p2, theHeader);
}