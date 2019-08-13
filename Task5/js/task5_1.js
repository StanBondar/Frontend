window.onload = function(){
	function Being(type, sound, movement, number){
		this.kindOfAnimal = type;
		this.voice = sound;
		this.move = movement;
		this.limbs = number;

		this.say = function(){
			document.write(this.kindOfAnimal+" is "+this.voice+".</br>");
		}

		this.moving = function(){
			document.write(this.kindOfAnimal+" is "+this.move+"ing </br>");
		}

		this.paws = function(){
			if(this.limbs%2||this.limbs<0){
				document.write("It will be hard for him in life. </br>");
			}else if(this.limbs>1000){
				document.write("Ridley Scott already created Alien, probably it's enough? </br>");
			}else if(this.kindOfAnimal=="fish"&&this.limbs != 0){
				document.write("Welcome to Chernobyl!</br>");
			}else{
				document.write("Your genetic experiments are going to succes.");
			}
		}
	}

	var horse = new Being("horse", "neigh", "run", 4);
	var kangaroo = new Being("kangaroo", "chortle", "jump", 4);
	var fish = new Being("pike","pops", "swim", 0);

	horse.moving();
	kangaroo.say();
	fish.paws();
}