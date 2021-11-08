
function setup() {
  createCanvas(600, 600);
	
	// Stretch problem. Move background up here in order to view
	var ran = random(0, fortunes.length)
	ran = floor(ran)
	text(fortunes[ran], width/2, 20)
	
	
}

function draw() {
	background(255);
	textSize(20)
	textFont("Courier")
	text("These are some words in a box", 20, 20, 50, 200)
	textFont("Times New Roman")
	text("These are some more words in a box", 120, 20, 50, 200)
	textFont("Mochiy Pop P One")
	text("This is a font from Google Fonts", width/2, height/2)
	
}

