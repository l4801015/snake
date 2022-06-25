//import VConsole from "vconsole";
//const vConsole = new VConsole();

import { Canvas } from "./Canvas";
import { Vector } from "./Vector";
import { Snake } from "./Snake";
import { Food } from "./Food";
import { floor } from "./utils";
import { FPS } from "./FPS";

const width = window.innerWidth;
const height = window.innerHeight;
const size = 20;
const cols = floor(width / size);
const rows = floor(height / size);
const canvas = new Canvas(width, height);
const ctx = canvas.init();
const options = {
	width: width,
	height: height,
	size: size,
	cols: cols,
	rows: rows,
	ctx: ctx,
};
const snake = new Snake(options);
const food = new Food(options);
const fps = new FPS(4);

const setup = () => {
	snake.show();
	food.show();
};

let then = performance.now();
const loop = () => {
	const interval = 1000 / fps.getFPS();
	const now = performance.now();
	const delta = now - then;
	if (delta > interval) {
		then = now - (delta % interval);
		canvas.clear();
		canvas.drawGrid(size);
		snake.update(fps);
		snake.show();
		snake.showScore();
		fps.showFPS(ctx);
		if (snake.isEating(food)) {
			food.update();
			if (snake.getScore() % 3 === 0) {
				fps.increment();
			}
		}
		food.show();
	}

	requestAnimationFrame(loop);
};

setup();
loop();

const left = document.createElement("button");
left.innerHTML = "Left";
left.addEventListener("click", () => {
	snake.setDirection(new Vector(-20, 0));
});
left.style.position = "absolute";
left.style.bottom = "20px";
left.style.left = "10px";
left.style.width = "100px";
left.style.padding = "20px";
left.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
left.style.border = "1px solid #000";
left.style.borderRadius = "5px";
document.body.appendChild(left);

const right = document.createElement("button");
right.innerHTML = "Right";
right.addEventListener("click", () => {
	snake.setDirection(new Vector(20, 0));
});
right.style.position = "absolute";
right.style.bottom = "20px";
right.style.right = "10px";
right.style.width = "100px";
right.style.padding = "20px";
right.style.backgroundColor = "rgba(255, 255, 255, 0.4";
right.style.border = "1px solid #000";
right.style.borderRadius = "5px";
document.body.appendChild(right);

const up = document.createElement("button");
up.innerHTML = "Up";
up.addEventListener("click", () => {
	snake.setDirection(new Vector(0, -20));
});
up.style.position = "absolute";
up.style.bottom = "100px";
up.style.left = "10px";
up.style.width = "100px";
up.style.padding = "20px";
up.style.backgroundColor = "rgba(255, 255, 255, 0.4";
up.style.border = "1px solid #000";
up.style.borderRadius = "5px";
document.body.appendChild(up);

const down = document.createElement("button");
down.innerHTML = "Down";
down.addEventListener("click", () => {
	snake.setDirection(new Vector(0, 20));
});
down.style.position = "absolute";
down.style.bottom = "100px";
down.style.right = "10px";
down.style.width = "100px";
down.style.padding = "20px";
down.style.backgroundColor = "rgba(255, 255, 255, 0.4";
down.style.border = "1px solid #000";
down.style.borderRadius = "5px";
document.body.appendChild(down);

const fpsUp = document.createElement("button");
fpsUp.innerHTML = "FPS U";
fpsUp.addEventListener("click", () => {
	fps.increment();
});
fpsUp.style.position = "absolute";
fpsUp.style.top = "20px";
fpsUp.style.right = "10px";
fpsUp.style.width = "80px";
fpsUp.style.padding = "10px";
fpsUp.style.backgroundColor = "rgba(255, 255, 255, 0.4";
fpsUp.style.border = "1px solid #000";
fpsUp.style.borderRadius = "5px";
document.body.appendChild(fpsUp);

const fpsDown = document.createElement("button");
fpsDown.innerHTML = "FPS D";
fpsDown.addEventListener("click", () => {
	fps.decrement();
});
fpsDown.style.position = "absolute";
fpsDown.style.top = "70px";
fpsDown.style.right = "10px";
fpsDown.style.width = "80px";
fpsDown.style.padding = "10px";
fpsDown.style.backgroundColor = "rgba(255, 255, 255, 0.4";
fpsDown.style.border = "1px solid #000";
fpsDown.style.borderRadius = "5px";
document.body.appendChild(fpsDown);

document.addEventListener("keydown", (e) => {
	if (e.keyCode === 38) {
		snake.setDirection(new Vector(0, -20));
	} else if (e.keyCode === 40) {
		snake.setDirection(new Vector(0, 20));
	} else if (e.keyCode === 37) {
		snake.setDirection(new Vector(-20, 0));
	} else if (e.keyCode === 39) {
		snake.setDirection(new Vector(20, 0));
	}
});
