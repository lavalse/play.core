import { sdCircle, opSmoothUnion } from '/src/modules/sdf.js'
import { sub, vec2 } from '/src/modules/vec2.js'

let mouseX, mouseY;

let circles = [];

const n = 8;

const density_1 = '#AB▄|/:÷×+-=?*· ';
const density_2 = '▓目▄*◑÷×+=-·   ';
let density = density_1;


/// init circle
const initCircle = ( x, y, r, speedX, speedY ) =>{
  const circle = {
    x: x,
    y: y,
    r: r,
    speedX: speedX,
    speedY: speedY,
  }
  circles.push(circle);
}

/// update circles location
const updateCircle = (circle, context) =>{
  if(circle.x >= context.cols || circle.x <= 0){
    circle.speedX = circle.speedX * -1;
  }
  if(circle.y >= context.rows || circle.y <= 0){
    circle.speedY = circle.speedY * -1;
  }
  circle.x += circle.speedX;
  circle.y += circle.speedY;
}

/// convert to sdCircle
const convertSdCircle = (circle, coord, minAxis, aspect) =>{
  const st = vec2(
    2.0 * (coord.x - circle.x) / minAxis  * aspect,
    2.0 * (coord.y - circle.y) / minAxis
  );
  const c = sdCircle(st, circle.r);
  return c;
}

//-------------------------boot-----------------------------
export function boot(context){

  // init 5 circle
  for(let i=0; i<n; i++){
    initCircle(
      Math.random()*context.cols, 
      Math.random()*context.rows, 
      Math.random()*0.2, 
      Math.random()*0.2,
      Math.random()*0.2,
    )
  }
  console.log(circles);
}

//-------------------------pre-----------------------------
export function pre(context, cursor, buffer, data){
  mouseX = Math.floor(cursor.x);
  mouseY = Math.floor(cursor.y);

  for(let i=0; i<n; i++){
    updateCircle(circles[i], context);
  }

  circles[0].x = cursor.x;
  circles[0].y = cursor.y;

  if(context.frame % 300 === 150){
    density = density_2;
  }
  if(context.frame % 300 === 0){
    density = density_1;
  }

  // console.log(context.frame % 300);

}

//-------------------------main-----------------------------

export function main(coord, context, cursor, buffer) {
  const aspect = context.metrics.aspect
  const minAxis = Math.min(context.cols, context.rows)
  let union = 1; 

  //convert all circles to sdcircle, then make a union
  for(let i=0; i<n; i++){
    const sdc = convertSdCircle(circles[i], coord, minAxis, aspect);
    union = opSmoothUnion(union, sdc, 0.2);
  }

  const index = Math.floor(union * density.length)

  if (coord.x == mouseX && coord.y == mouseY) return '┼'
	if (coord.x == mouseX) return '│'
	if (coord.y == mouseY) return '─'
  return density[index]

}