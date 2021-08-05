var canvas= document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

width=75 ;
height=100;
x=5;
y=225;


function add() {
	bgImgTag=new Image()
	bgImgTag.onload=uploadBackground
	bgImgTag.src=background_image
	carImgTag=new Image()
	carImgTag.onload=uploadgreencar
	carImgTag.src=greencar_image

}
function uploadBackground() {
	ctx.drawImage(bgImgTag, 0,0, canvas.width, canvas.height)
	

}

function uploadgreencar() {
	ctx.drawImage(carImgTag, x,y, width, height)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(y>=0){
		y=y-10
		uploadBackground()
		uploadgreencar()
		
	}
}

function down()
{
	if(y<=350){
		y=y+10
		uploadBackground()
		uploadgreencar()
		
	}
}

function left()
{
	if(x>=0){
		x=x-10
		uploadBackground()
		uploadgreencar()
		
	}
}

function right()
{
	if(x<=750){
		x=x+10
		uploadBackground()
		uploadgreencar()
		
	}
}
