export function FPS (fps) {
	this.fps = fps
}

FPS.prototype.setFPS = function (fps) {
	this.fps = fps
}

FPS.prototype.getFPS = function () {
	return this.fps
}
