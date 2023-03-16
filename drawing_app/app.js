
const eraserBtn = document.getElementById("eraser-btn");
const destroyBtn = document.getElementById("destroy-btn");
const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");

const CANVAS_HEIGHT = 800;
const CANVAS_WIDTH = 800;
//const colors =
//[
 // "#40407a","#706fd3","#ff5252","#ff793f","#ffb142","#ffda79","#227093","#84817a"

//];
canvas.width = CANVAS_WIDTH; 
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value; //5가 됨 

let isPainting = false;
let isFilling = false;

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
function onColorChange(event){
ctx.strokeStyle = event.target.value;
ctx.fillStyle = event.target.value;
}
// data-color를 사용하였기 때문에 event에서 원하는 html에서정보를 가져올 수 있음(배열을 꼭 사용하여주어야 함 Array.form()) 
function onColorClick(event){
const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
ctx.fillStyle = colorValue;
color.value = colorValue; // 사용자에게 선택한 컬러를 알려주기 위해 작성 (메뉴바에 설정)

}

function onModeClick()
{
  if(isFilling)
  {
    isFilling = false;
    modeBtn.innerText = "Fill"

  }else{
    isFilling = true;
    modeBtn.innerText = "Draw"
  }
}

function onCanvasClick()
{
if(isFilling)
{
  ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  
  
}
}
function onDestroyClick(){

 ctx.fillStyle = "white";
 ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
   
}

function onEraserClick(){

  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill"

}


canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMovedown);
canvas.addEventListener("mouseup", onMoveup);
canvas.addEventListener("mouseleave", onMoveup);  //범위 밖으로 나갔을 시 down 상태에서 벗어나기 위해 mouseleave이벤트 추가
canvas.addEventListener("click",onCanvasClick);

lineWidth.addEventListener("change",onCW)
color.addEventListener("change",onColorChange);

colorOptions.forEach(color => {color.addEventListener("click",onColorClick);

modeBtn.addEventListener("click", onModeClick)
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
  
});

