const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const W = canvas.width, H = canvas.height;

const borderColor = '#c26019';
const triSize = 150;
const contrastLevel = 18;

ctx.fillStyle = '#111';
ctx.fillRect(0, 0, W, H);

const cols = Math.ceil(W / triSize) + 2;
const rows = Math.ceil(H / (triSize * 0.866)) + 2;

for (let row = -1; row < rows; row++) {
  for (let col = -1; col < cols; col++) {
    const h = triSize * 0.866;
    const x = col * triSize + (row % 2 === 0 ? 0 : triSize / 2);
    const y = row * h;
    for (let t = 0; t < 2; t++) {
      const pts = t === 0
        ? [[x, y+h], [x+triSize/2, y], [x+triSize, y+h]]
        : [[x+triSize, y+h], [x+triSize/2, y+h*2], [x, y+h]];

      const base = 10 + Math.random() * contrastLevel;
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      ctx.lineTo(pts[1][0], pts[1][1]);
      ctx.lineTo(pts[2][0], pts[2][1]);
      ctx.closePath();
      ctx.fillStyle = `rgb(${base},${base},${base})`;
      ctx.fill();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }
  }
}