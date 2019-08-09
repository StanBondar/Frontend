window.onload = function(){
	function Being(type, sound, movement, number){
		this.kindOfAnimal = type;
		this.voice = sound;
		this.move = movement;
		this.limbs = number;

		this.say = function(){
			document.write("I said"+this.voice+"</br>");
		}

		this.moving = function(){
			document.write(this.kindOfAnimal+this.move+"</br>");
		}

		this.paws = function(){
			if(this.limbs%2||this.limbs<0){
				document.write("It will be hard for him in life.");
			}else if(this.limbs>1000){
				document.write("Ridley Scott already created Alien, probably it's enough?");
			}else if(this.kindOfAnimal=="fish"&&this.limbs != 0){
				document.write("Welcome to Chernobyl!");
			}else{
				document.write("Your genetic experiments are going to succes.");
			}
		}
	}

	var horse = new Being("horse", "neigh", "run", 4);
	var kangaroo = new Being("kangaroo", "chortle", "jump", 4);
	var fish = new Being("fish","pops", "swim", 0);

	hoese.moving();
	document.write("ebaaa");
}