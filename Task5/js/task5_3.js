
function loadHandler(){
	var inp = document.getElementById("inp");
	var pattern = /8\W(063)\W\d\d\d\d\d/g;
	if(pattern.test(inp.value)){
		document.getElementById("inp").style.borderColor = "green";
	}else{
		document.getElementById("inp").style.borderColor = "red";
	}
}

