import { sdCircle, opSmoothUnion } from '/src/modules/sdf.js'
import { sub, vec2 } from '/src/modules/vec2.js'

export function boot(context, buffer, data){

}

export function main(coord, context, cursor, buffer) {
  const aspect = context.metrics.aspect
  const m = Math.min(context.cols, context.rows)

  const density = '▓目▄*◑÷×+=-·   '

  let circles = [];
  let union = 1; 

  ////draw circle sdf func
  const drawSdfCircle = ( px, py, r ) => {
    const st = vec2(
      2.0 * (coord.x - px) / m  * aspect,
      2.0 * (coord.y - py) / m
    );
    const c = sdCircle(st, r);
    return c;
  }
  ///

  const cMouse = drawSdfCircle(cursor.x, cursor.y, 0.1);

  const tx = (Math.sin(context.frame / 600 ) / 2 ) * context.cols;
  const ty = (Math.cos(context.frame / 600 ) / 2 ) * context.rows;

  for(let i=0; i<5; i++){
    const c = drawSdfCircle(0.2 * i *context.cols + tx, 0.2 * i * context.rows + ty, 0.05);
    circles.push(c)
  }

  circles.forEach((e)=>{
    union = opSmoothUnion(union, e, 0.5);
  })

  const finalUnion = opSmoothUnion(union, cMouse, 0.5);

  // if(coord.index===0 && context.frame % 10 == 0){
  //   console.log(a);
  // }


	const index = Math.floor(finalUnion * density.length)

  return density[index]
}