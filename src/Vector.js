export function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.add = function(v) {
	this.x += v.x;
	this.y += v.y;
	return this;
}

Vector.prototype.sub = function(v) {
	this.x -= v.x;
	this.y -= v.y;
	return this;
}

Vector.prototype.mul = function(n) {
	this.x *= n;
	this.y *= n;
	return this;
}

Vector.prototype.div = function(n) {
	this.x /= n;
	this.y /= n;
	return this;
}	

Vector.prototype.isEqual = function(v) {
	if (this.x == v.x && this.y == v.y) {
		return true;
	} else {
		return false;
	}
}

Vector.prototype.length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
}

Vector.prototype.clone = function() {
	return new Vector(this.x, this.y);
}

