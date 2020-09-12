var c = document.getElementById("myCanvas"); //set myCanvas to myCanvas
var ctx = c.getContext("2d"); //Make sure we are in the 2D world

raindrops = []; //our dynamic array of raindrops

var wind =0;

function gameLoop()
{
	ctx.fillStyle = "black";
	ctx.rect(0,0,c.width,c.height);
	ctx.fill();

	var raindrop = {
		x: Math.random() * c.width,
		y: 0, 
		yspeed:Math.random() * 8+ 3 // speed
	};
	raindrops.push(raindrop);

	var l_drop = raindrops.length

	while (l_drop--) {
		var drop = raindrops[l_drop];
		drop.y = drop.y + drop.yspeed;
		drop.x = drop.x + wind;
		if (drop.y > c.height) {
			raindrops.splice(l_drop, 1);
		}
		else {
			ctx.beginPath();
			ctx.rect(drop.x, drop.y, 2, 4); //size
			ctx.fillStyle = "blue"; // the raindrops color
			ctx.fill();
		}
	}
}

setInterval(gameLoop, 30);

document.addEventListner("keydown", keyDownHandler, false)

function keyDownHandler(e) { 
	if (e.keyCode == 37) { // left arrow
		wind--;
	}
	else if (e.keyCode == 39) { // right arrow
		wind++;
	}
}