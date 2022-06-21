// gerencia o Canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = 1000;
const height = canvas.height = 700;

// gera um número aleatório

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// gera uma cor aleatória

function randomRGB() {
  return "#FF0000";
}


//define um vetor de bolas
const bolas = [];

while (bolas.length < 20) {
  const size = random(20, 30);
  const bola = new Bola(
    // posição de sempre uma bola de distância
    // fora das bordas para evitar erros de desenho
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(3, 30),
    random(3, 30),
    randomRGB(),
    size
  );

  //atualiza o vetor
  bolas.push(bola);
}

//realiza um loop em todas as bolas geradas
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.fillRect(0, 0, width, height);

  for (const bola of bolas) {
    bola.draw();
    bola.update();
    bola.collisionDetect(bolas);
  }

  requestAnimationFrame(loop);
}

loop();