import { Vector } from './Vector.js';
import { floor, random, map } from './utils.js';

export function Food(options) {
		this.pos = this.pickLocation(options);
		this.size = options.size;
	  this.ctx = options.ctx;
	  this.options = options;
}

Food.prototype.show = function() {
	this.ctx.fillStyle = 'red';
	this.ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
}

Food.prototype.pickLocation = function(options) {
	const cols = options.cols;
	const rows = options.rows;
	const size = options.size;
	const x = floor(random(0, cols));
	const y = floor(random(0, rows));
	const newPos = new Vector(x, y);
	newPos.mul(size);
	return newPos;
}

Food.prototype.update = function() {
	this.pos = this.pickLocation(this.options);
}


