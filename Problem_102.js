var Triangle = {
	generatePoints: function(coordinateString) {
		var coordinates = coordinateString.split(',');
		this.a = coordinates.slice(0,2);
		this.b = coordinates.slice(2,4);
		this.c = coordinates.slice(4,6);
	},

	displayPoints: function() {
		console.log(
			"Point a: " + this.a[0] + ', ' + this.a[1],
			"Point b: " + this.b[0] + ', ' + this.b[1],
			"Point c: " + this.c[0] + ', ' + this.c[1]
		);
	}
};

t1 = Object.create(Triangle, {"coordinateString": {value:data[1]}});

t1.generatePoints(t1.coordinateString);

console.dir(t1);

// Idea: given three points creating an angle, can you tell whether a fouth
// point is _inside_ or _outside_ (assuming it's not _on_) the angle?
// Seems like yes: draw a lind from the fourth point to the vertex. That should
// create two new angles. If the point is inside, the two new angles will sum
// to less than pi.  If outside, they should sum to greater than pi.