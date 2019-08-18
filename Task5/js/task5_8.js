var message = document.createElement("p");
div.append(message);

document.getElementById("btn").onclick = function() {
var loginField = document.getElementById("login");
var passwordField = document.getElementById("password");
	if(loginField.value=="admin"&&passwordField.value=="12345"){
		message.innerHTML = "You have loged in, thank you.";
		message.style.backgroundColor = "green";
		loginField.style.borderColor = "black";
		passwordField.style.borderColor = "black";
	}else if(loginField.value==""||passwordField.value==""){
		message.innerHTML = "Please, fill Login & Password fields.";
		loginField.style.borderColor = "red";
		passwordField.style.borderColor = "red";
		message.style.backgroundColor = "red";
	}else{
		message.innerHTML = "Type proper login and/or password";
		loginField.style.borderColor = "red";
		passwordField.style.borderColor = "red";
		message.style.backgroundColor = "red";
	}
}