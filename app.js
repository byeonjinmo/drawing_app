
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const colors =
[
  "#40407a","#706fd3","#ff5252","#ff793f","#ffb142","#ffda79","#227093","#84817a"

];
canvas.width = 800; 
canvas.height = 800;

ctx.lineWidth=2;


function onMove(event){
  ctx.beginPath();
  ctx.moveTo(0,0);
  const color = colors[Math.floor(Math.random()*colors.length)];
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.strokeStyle= color;
  ctx.stroke(); // 안하면 선 안그려짐 
}

canvas.addEventListener("mousemove", onMove);