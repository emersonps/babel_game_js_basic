'use strict';

// Cria o canvas
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = 'images/background.png';

// Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
  heroReady = true;
};
heroImage.src = 'images/mario.png';

// Imagem do monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
  monsterReady = true;
};
monsterImage.src = 'images/star.png';

// Objetos do jogo
var hero = {
  speed: 256 // movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

// Controle do teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
  keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', function (e) {
  delete keysDown[e.keyCode];
}, false);

// Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;

  // Posiciona o monstro randomicamente na tela
  monster.x = 32 + Math.random() * (canvas.width - 64);
  monster.y = 32 + Math.random() * (canvas.height - 64);
};

// Atualiza os objetos do jogo
var update = function update(modifier) {
  if (38 in keysDown) {
    // Pressionando a seta pra cima
    hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown) {
    // Pressionando a seta pra baixo
    hero.y += hero.speed * modifier;
  }
  if (37 in keysDown) {
    // Pressionando a seta pra esquerda
    hero.x -= hero.speed * modifier;
  }
  if (39 in keysDown) {
    // Pressionando a seta pra direita
    hero.x += hero.speed * modifier;
  }

  // Os personagens se encostaram?
  if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
    ++monstersCaught;
    reset();
  }
};

// Renderiza tudo
var render = function render() {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }

  if (heroReady) {
    ctx.drawImage(heroImage, hero.x, hero.y);
  }

  if (monsterReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y);
  }

  // Pontuação
  ctx.fillStyle = 'rgb(250, 250, 250)';
  ctx.font = '24px Helvetica';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText('Pessoas salvas: ' + monstersCaught, 32, 32);

  ctx.fillStyle = 'rgb(200, 250, 200)';
  ctx.font = '14px Helvetica', ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText('By: Emerson P. de Souza', 300, 40);
};

// Controla o loop do jogo
var main = function main() {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;

  // Executa isso o mais breve possível
  requestAnimationFrame(main);
};

// Suporte cross-browser para requestAnimationFrame
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
var then = Date.now();
reset();
main();
'use strict';

// Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

// Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/mario.png';

// Imagem do monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/star.png';

// Objetos do jogo
var hero = {
	speed: 256 // movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

// Controle do teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.height - 64);
};

// Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monstersCaught;
		reset();
	}
};

// Renderiza tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Pessoas salvas: ' + monstersCaught, 32, 32);

	ctx.fillStyle = 'rgb(200, 250, 200)';
	ctx.font = '14px Helvetica', ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('By: Emerson P. de Souza', 300, 40);
};

// Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Executa isso o mais breve possível
	requestAnimationFrame(main);
};

// Suporte cross-browser para requestAnimationFrame
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
var then = Date.now();
reset();
main();
'use strict';

// Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

// Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/mario.png';

// Imagem do monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/star.png';

// Objetos do jogo
var hero = {
	speed: 256 // movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

// Controle do teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.height - 64);
};

// Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monstersCaught;
		reset();
	}
};

// Renderiza tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Pessoas salvas: ' + monstersCaught, 32, 32);

	ctx.fillStyle = 'rgb(200, 250, 200)';
	ctx.font = '14px Helvetica', ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('By: Emerson P. de Souza', 300, 40);
};

// Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Executa isso o mais breve possível
	requestAnimationFrame(main);
};

// Suporte cross-browser para requestAnimationFrame
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
var then = Date.now();
reset();
main();
'use strict';

// Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

// Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/mario.png';

// Imagem do monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/star.png';

// Objetos do jogo
var hero = {
	speed: 256 // movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

// Controle do teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.height - 64);
};

// Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monstersCaught;
		reset();
	}
};

// Renderiza tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Pessoas salvas: ' + monstersCaught, 32, 32);

	ctx.fillStyle = 'rgb(200, 250, 200)';
	ctx.font = '14px Helvetica', ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('By: Emerson P. de Souza', 300, 40);
};

// Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Executa isso o mais breve possível
	requestAnimationFrame(main);
};

// Suporte cross-browser para requestAnimationFrame
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
var then = Date.now();
reset();
main();
'use strict';

// Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

// Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/mario.png';

// Imagem do monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/star.png';

// Objetos do jogo
var hero = {
	speed: 256 // movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

// Controle do teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.height - 64);
};

// Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monstersCaught;
		reset();
	}
};

// Renderiza tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Pessoas salvas: ' + monstersCaught, 32, 32);

	ctx.fillStyle = 'rgb(25, 250, 200)';
	ctx.font = '14px Helvetica', ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('By: Emerson P. de Souza' + monstersCaught, 350, 30);
};

// Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Executa isso o mais breve possível
	requestAnimationFrame(main);
};

// Suporte cross-browser para requestAnimationFrame
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
var then = Date.now();
reset();
main();
'use strict';

// Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

// Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/mario.png';

// Imagem do monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/star.png';

// Objetos do jogo
var hero = {
	speed: 256 // movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

// Controle do teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.height - 64);
};

// Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monstersCaught;
		reset();
	}
};

// Renderiza tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Pessoas salvas: ' + monstersCaught, 32, 32);

	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'right';
	ctx.textBaseline = 'base';
	ctx.fillText('Pessoas salvas: ' + monstersCaught, 32, 32);
};

// Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Executa isso o mais breve possível
	requestAnimationFrame(main);
};

// Suporte cross-browser para requestAnimationFrame
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
var then = Date.now();
reset();
main();
'use strict';

// Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

// Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/mario.png';

// Imagem do monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/star.png';

// Objetos do jogo
var hero = {
	speed: 256 // movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

// Controle do teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.height - 64);
};

// Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monstersCaught;
		reset();
	}
};

// Renderiza tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Pessoas salvas: ' + monstersCaught, 32, 32);
};

// Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Executa isso o mais breve possível
	requestAnimationFrame(main);
};

// Suporte cross-browser para requestAnimationFrame
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
var then = Date.now();
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/star.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/mario.png';

//Objetos do Jogo
var moster = {
	speed: 256 //movimento em pixels por segundo
};
var hero = {};
var monsterCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', function (e) {
	delete keysDown[e.keyCode];
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.height - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monsterCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Estrelas Capturadas: ' + monsterCaught, 32, 32);
};
//Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monsterCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', function (e) {
	delete keysDown[e.keyCode];
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.height - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monsterCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Pessoas salvas: ' + monsterCaught, 32, 32);
};
//Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monsterCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', function (e) {
	delete keysDown[e.keyCode];
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.height - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monsterCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Pessoas salvas: ' + monsterCaught, 32, 32);
};
//Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monsterCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysDown[e.keyCode];
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.height - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monsterCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Pessoas salvas: ' + monsterCaught, 32, 32);
};
//Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monsterCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysDown[e.keyCode];
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.height - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monsterCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monsterCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monsters.x = 32 + Math.random() * (canvas.width - 64);
	monsters.y = 32 + Math.random() * (canvas.height - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monsters.x, monsters.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monsters.x = 32 + Math.random() * (canvas.width - 64);
	monsters.y = 32 + Math.random() * (canvas.height - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monsters.x, monsters.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monsters.x = 32 + Math.random() * (canvas.width - 64);
	monsters.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monsters.x, monsters.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monsters.x = 32 + Math.random() * (canvas.width - 64);
	monsters.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monsters.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monsters.x = 32 + Math.random() * (canvas.width - 64);
	monsters.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monsters.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now(); // 3200 mil milésimos
	var delta = now - then; // 2000 mil milésimos

	update(delta / 1000); //2000/1000 = 2
	render();

	then = now; //32000 

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monsters.x = 32 + Math.random() * (canvas.width - 64);
	monsters.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= hero.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= hero.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now(); // 3200 mil milésimos
	var delta = now - then; // 2000 mil milésimos

	update(delta / 1000); //2000/1000 = 2
	render();

	then = now; //32000 

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monsters.x = 32 + Math.random() * (canvas.width - 64);
	monsters.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysDown) {
		// Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		// Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		// Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		// Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	// Os personagens se encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= hero.x + 32 && hero.y <= monster.y + 32 && monster.y <= hero.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now(); // 3200 mil milésimos
	var delta = now - then; // 2000 mil milésimos

	update(delta / 1000); //2000/1000 = 2
	render();

	then = now; //32000 

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monsters.x = 32 + Math.random() * (canvas.width - 64);
	monsters.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now(); // 3200 mil milésimos
	var delta = now - then; // 2000 mil milésimos

	update(delta / 1000); //2000/1000 = 2
	render();

	then = now; //32000 

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now(); // 3200 mil milésimos
	var delta = now - then; // 2000 mil milésimos

	update(delta / 1000); //2000/1000 = 2
	render();

	then = now; //32000 

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = windows;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now(); // 3200 mil milésimos
	var delta = now - then; // 2000 mil milésimos

	update(delta / 1000); //2000/1000 = 2
	render();

	then = now; //32000 

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = windows;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now(); // 3200 mil milésimos
	var delta = now - then; // 2000 mil milésimos

	update(delta / 1000); //2000/1000 = 2
	render();

	then = now; //32000 

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = windows;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now(); // 3200 mil milésimos
	var delta = now - then; // 2000 mil milésimos

	update(delta / 1000); //2000/1000 = 2
	render();

	then = now; //32000 

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = windows;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now(); // 3200 mil milésimos
	var delta = now - then; // 2000 mil milésimos

	update(delta / 1000); //2000/1000 = 2
	render();

	then = now; //32000 

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = windows;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now(); // 3200 mil milésimos
	var delta = now - then; // 2000 mil milésimos

	update(delta / 1000); //2000/1000 = 2
	render();

	then = now; //32000 

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

//Suporte cross-browser para requestAnimationFrame 
var w = windows;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now(); // 3200 mil milésimos
	var delta = now - then; // 2000 mil milésimos

	update(delta / 1000); //2000/1000 = 2
	render();

	then = now; //32000 

	//Executa isso o mais breve possível
	requestAnimationFrame(main);
};

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now(); // 3200 mil milésimos
	var delta = now - then; // 2000 mil milésimos

	update(delta / 1000); //2000/1000 = 2
	render();

	then = now;
};

var then = Date.now(); // 3000 mil milésimos
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;
};

var then = Date.now();
reset();
main();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};

//Controla o loop do jogo
var main = function main() {
	var now = Date.now();
};

console.log(Date.now());
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};

//Renderiza Tudo
var render = function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Pontuação
	ctx.fillStyle = 'rgb(250, 250, 250)';
	ctx.font = '24px Helvetica';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32);
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var Ready = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monsters.x + 32 && monsters.x <= heroi.x + 32 && hero.y <= monsters.y + 32 && monsters.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monsters = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= heroi.x + 32 && hero.y <= monster.y + 32 && monster.y <= heroi.y + 32) {
		++monstersCaught;
		reset();
	}
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= heroi.x + 32 && hero.y <= monster.y + 32 && monster.y <= heroi.y + 32) {
		++monsterCaught;
		reset();
	}
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= heroi.x + 32 && hero.y <= monster.y + 32 && monster.y <= heroi.y + 32) {
		++monsterCaught;
		reset();
	}
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
	if (hero.x <= monster.x + 32 && monster.x <= heroi.x + 32 && hero.y <= monster.y + 32 && monster.y <= heroi.y + 32) {}
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		//Pressionando a seta pra esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		//Pressionando a seta pra direita
		hero.x += hero.speed * modifier;
	}

	//Os personagens encostaram?
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		//Pressionando a seta pra baixo
		hero.y += hero.speed * modifier;
	}
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) {
		//Pressionando a seta pra cima
		hero.y -= hero.speed * modifier;
	}
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) ;
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	console.log(e);
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2; //posicionamento na metade da largura do canvas
	hero.x = canvas.height / 2;

	//Posiciona o monstro randomicamente na tela
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.width - 64);
};

//Atualiza os objetos do jogo
var update = function update(modifier) {
	if (38 in keysdown) ;
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	//console.log(e); 
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2;
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	//console.log(e); 
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2;
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	//console.log(e); 
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2;
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	//console.log(e); 
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2;
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	//console.log(e); 
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
	hero.x = canvas.width / 2;
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	//console.log(e); 
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);

//Reseta o jogo quando o jogador pega o monstro
var reset = function reset() {};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);

window.addEventListener('keyup', function (e) {
	//console.log(e); 
	delete keysdown[e.keyCode]; //Apaga cada tecla digitada
}, false);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	//console.log(e); 
	keysdown[e.keyCode] = true; //Captura cada tecla digitada
}, false);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	console.log(e);
	keysdown[e.keyCode];
}, false);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	keysdown[e.keyCode];
}, false);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	keysdown[e.keyCode];
}, false);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};

window.addEventListener('keydown', function (e) {
	keysdown[e.keyCode];
}, false);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//Objetos do Jogo
var hero = {
	speed: 256 //movimento em pixels por segundo
};
var monster = {};
var monstersCaught = 0;

//Controle do Teclado
var keysDown = {};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = 'images/monster.jpp';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};

heroImage.src = 'images/hero.png';

//Imagem do Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};

heroImage.src = 'images/hero.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';

//Imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};

heroImage.src = 'images/hero.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = 'images/background.png';
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
var bgReady = false;
var bgImage = new Image();
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Imagem de fundo
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);

document.write("Teste");
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);

document.write("Teste");
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
'use strict';

//Cria o canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
//Cria o canvas
"use strict";
'use strict';

//Objetos

var caneta = {
	cor: 'preto',
	marca: 'BIC'
};

document.write(caneta.cor + '<br>');
caneta.cor = 'azul';
document.write(caneta.cor + '<br>');

var caneta2 = {};
caneta2['marca'] = 'BIC';
document.write(caneta2.marca + '<br>');

var caneta3 = {};
var propriedade = 'marca';
caneta3[propriedade] = 'FABER';
document.write(caneta3.marca + '<br>');

var caneta4 = {};
caneta4['cor da caneta'] = 'azul';
document.write(caneta4['cor da caneta'] + '<br>');

var caneta5 = {
	cor: 'preta',
	minhaCor: function minhaCor() {
		return 'Minha cor é ' + this.cor + '<br>';
	}
};

document.write(caneta5.minhaCor());

//função
function quadrado(num) {
	return num * num;
}
document.write(quadrado(2) + '<br>');

//expressao de função
var soma = function soma(num1, num2) {
	return num1 + num2;
};
document.write(soma(2, 3) + '<br>');

//função de seta
var quadrado2 = function quadrado2(numero) {
	return numero * numero;
};

document.write(quadrado2(2) + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
ts;
'use strict';

var nome = 'Emerson "Legal" ';
var snome = ' Pinheiro';
var completo = nome + snome;

document.write(nome + '<br>' + snome + '<br>');
document.write(completo.length + '<br>');
document.write(completo.charAt(2) + '<br>');
document.write(completo.substring(0, 3) + '<br>');
document.write(completo.toLowerCase() + '<br>');
document.write(completo.toUpperCase() + '<br>');
