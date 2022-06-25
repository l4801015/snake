import { Vector } from "./Vector";
import { floor } from "./utils";

export function Snake(options) {
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
	this.ctx.fillStyle = "#fff";
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
};

Snake.prototype.update = function (fps) {
	for (let i = 0; i < this.tail.length - 1; i++) {
		this.tail[i] = this.tail[i + 1];
	}
	if (this.total >= 1) {
		this.tail[this.total - 1] = new Vector(this.pos.x, this.pos.y);
	}
	this.pos.add(this.dir);
	if (this.isDead()) {
		this.reset();
		fps.reset();
	}
};

Snake.prototype.setDirection = function (dir) {
	const opposite = new Vector(this.dir.x, this.dir.y);
	opposite.mul(-1);
	if (!opposite.isEqual(dir)) {
		this.dir = dir;
	}
	return;
};

Snake.prototype.isEating = function (food) {
	if (!this.pos.isEqual(food.pos)) {
		return false;
	}
	this.total++;
	return true;
};

Snake.prototype.isDead = function () {
	for (let i = 0; i < this.tail.length; i++) {
		if (this.pos.isEqual(this.tail[i])) {
			return true;
		}
	}
	return false;
}

Snake.prototype.reset = function () {
	this.total = 0;
	this.tail = [];
	this.pos = new Vector(0, 0);
	this.dir = new Vector(20, 0);
}

Snake.prototype.showScore = function () {
	this.ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
	this.ctx.font = "20px Arial";
	this.ctx.fillText("Score: " + this.total, 10, 30);
}

Snake.prototype.getScore = function () {
	return this.total;
}
