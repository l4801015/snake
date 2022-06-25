export function FPS (fps) {
	this.fps = fps
}

FPS.prototype.setFPS = function (fps) {
	this.fps = fps
}

FPS.prototype.getFPS = function () {
	return this.fps
}

FPS.prototype.increment = function () {
	this.fps++
}

FPS.prototype.decrement = function ()	{
	if (!this.isSmoler()) {
		this.fps--
	}
	return
}

FPS.prototype.reset = function () {
	this.fps = 4
}

FPS.prototype.showFPS = function (ctx) {
	ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
	ctx.font = "20px Arial";
	ctx.fillText("FPS: " + this.fps, 10, 60);
}

FPS.prototype.isSmoler = function () {
	return this.fps < 2
}


