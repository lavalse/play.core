export function main(coord, context, cursor, buffer) {

  function getDistance(x1,y1,x2,y2){
    let dx = (x2 - x1) * context.metrics.aspect;
    let dy = y2 - y1;
    return Math.sqrt(dx*dx+dy*dy);
  }

  const tx = (Math.sin(context.frame / 15 ) / 2 + 0.5) * context.cols;
  const ty = (Math.cos(context.frame / 15 ) / 2 + 0.5) * context.rows;

  const distance = Math.floor(getDistance(coord.x, coord.y, tx, ty )) ;

  if(distance <= 3) return"▄"
  return "-"
}