import { Vector } from './Vector'
import { floor } from './utils'

export function Snake (options) {
	this.pos = new Vector(0, 0);
	this.dir = new Vector(20, 0);
	this.ctx = options.ctx;
	this.size = options.size;
	this.cols = options.cols;
	this.rows = options.rows;
	this.total = 0;
	this.tail = [];
}

Snake.prototype.show = function () {
	this.ctx.fillStyle = '#fff';
  if (this.pos.x > this.ctx.canvas.width) {
		this.pos.x = 0;
	}
	if (this.pos.x < 0) {
		this.pos.x = this.cols * this.size;	
	}
	if (this.pos.y > this.ctx.canvas.height) {
		this.pos.y = 0;
	}
	if (this.pos.y < 0) {
		this.pos.y = this.rows * this.size;
	}

	for (let i = 0; i < this.tail.length; i++) {
		this.ctx.fillRect(this.tail[i].x, this.tail[i].y, this.size, this.size);
	}

	this.ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
}

Snake.prototype.update = function () {
	this.pos.add(this.dir);
}

Snake.prototype.setDirection = function (dir) {
	const opposite = new Vector(this.dir.x, this.dir.y);
	opposite.mul(-1);
  if (!opposite.isEqual(dir)) {
		this.dir = dir;
	}
	return;
}

Snake.prototype.isEating = function (food) {
	return this.pos.isEqual(food.pos);
}

Snake.prototype.grow = function () {
	this.total++;
	this.tail.push(this.pos.clone());
}

