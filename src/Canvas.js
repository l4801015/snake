export function Canvas (width, height) {
	this.width = width;
	this.height = height;
	this.canvas = document.createElement('canvas');
	this.canvas.width = width;
	this.canvas.height = height;
	this.context = this.canvas.getContext('2d');
}

Canvas.prototype.init = function () {
	this.canvas.style.position = 'absolute';
	this.canvas.style.top = '0px';
	this.canvas.style.left = '0px';
	this.canvas.style.width = '100%';
	this.canvas.style.height = '100%';
	this.clear();
	document.body.appendChild(this.canvas);
	return this.context;
}


Canvas.prototype.clear = function () {
	this.context.clearRect(0, 0, this.width, this.height);
	this.context.fillStyle = '#333';
	this.context.fillRect(0, 0, this.width, this.height);
}

Canvas.prototype.drawGrid = function (gridSize) {
	this.context.strokeStyle = 'rgba(255,255,255,0.1)';
	this.context.lineWidth = 1;
	for (var i = 0; i < this.width; i += gridSize) {
		this.context.beginPath();
		this.context.moveTo(i, 0);
		this.context.lineTo(i, this.height);
		this.context.stroke();
		this.context.closePath();
	}
	for (var i = 0; i < this.height; i += gridSize) {
		this.context.beginPath();
		this.context.moveTo(0, i);
		this.context.lineTo(this.width, i);
		this.context.stroke();
		this.context.closePath();
	}
}


