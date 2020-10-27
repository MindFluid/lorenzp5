var x, y, z, a, b, c, t;

var vertexList = [];

x = 0.1;
y = 0;
z = 0;
a = 10.0;
b = 28.0;
c = 8.0 / 3.0;

function setup() {
	createCanvas(700, 700, WEBGL);
	colorMode(HSB);
	background(255);
}

function draw() {
	// noFill();
	noStroke();
	scale(6);

	var dt = 0.005;
	var dx = a * (y - x) * dt;
	var dy = (x * (b - z) - y) * dt;
	var dz = (x * y - c * z) * dt;

	x += dx;
	y += dy;
	z += dz;

	vertexList.push([x, y, z]);

	var col = 0;

	beginShape();
	for (var i in vertexList) {
		fill(col, 255, 255);
		vertex(vertexList[i][0], vertexList[i][1], vertexList[i][2]);
		col += 0.2;
		if (col > 255) {
			col = 0.0;
		}
	}
	endShape();
}

function doubleClicked() {
	save("lorenz" + x + "-" + y + "-" + z + ".png");
}
