const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const colors =
[
  "#40407a","#706fd3","#ff5252","#ff793f","#ffb142","#ffda79","#227093","#84817a"

];
canvas.width = 800; 
canvas.height = 800;

ctx.lineWidth = lineWidth.value; //5가 됨 

let isPainting = false;
function onMove(event) {
if(isPainting) {
ctx.lineTo(event.offsetX, event.offsetY);
ctx.stroke();
return;
}
ctx.moveTo(event.offsetX, event.offsetY); // 마우스가 있는 곳에서 그림을 그리기 위해 현재 마우스 위치를 받는다. 
}
function onMovedown(event){
  isPainting = true;
}

function onMoveup(event){
  isPainting = false;
  ctx.beginPath();// 새로운 path 즉, 다른 공간의 그리기 생성이 된다고 보면 됨  
}

function onCW(event){
  ctx.lineWidth=event.target.value

}
//color를 받아서 기존 fill,stroke 함수에 색을 만들어 줌 
function oncc(event){
ctx.strokeStyle = event.target.value;
ctx.fillStyle = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMovedown);
canvas.addEventListener("mouseup", onMoveup);
canvas.addEventListener("mouseleave", onMoveup);  //범위 밖으로 나갔을 시 down 상태에서 벗어나기 위해 mouseleave이벤트 추가

lineWidth.addEventListener("change",onCW)
color.addEventListener("change",oncc);