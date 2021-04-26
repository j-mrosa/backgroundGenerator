var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("#random");

window.onload = function(){
	
	setGradient();
	

	color1.addEventListener("input", setGradient);

	color2.addEventListener("input", setGradient);

	//random button evetn listener
	button.addEventListener("click", generateRandom);

};

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateRandom(){
	//generate code for 2 random colors
	c1 =  calculateRandom();
	c2 = calculateRandom();

	//add the two random colors to the input values
	color1.value = "#" + c1;
	color2.value = "#" + c2;

	//put input values in the background gradient + show the code for the colors	
	setGradient();
}

function calculateRandom(){
	r = Math.floor(Math.random() * 16777215).toString(16);
	return r;
}