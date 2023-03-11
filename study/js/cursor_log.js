export function main(coord, context, cursor, buffer) {

	const x = Math.floor(cursor.x) 
	const y = Math.floor(cursor.y) 

  // if (coord.index == 0 && context.frame % 10 == 0) {
	// 	console.log("cursor = " + x + " " + y)
	// }

  function getDistance(x1,y1,x2,y2){
    let dx = (x2 - x1) * context.metrics.aspect;
    let dy = y2 - y1;
    return Math.sqrt(dx*dx+dy*dy);
  }

  const distance = Math.floor(getDistance(coord.x, coord.y, cursor.x, cursor.y )) ;

  if (distance >= 4 && distance <= 5 ) return "▄"

	if (coord.x == x && coord.y == y) return '┼'
	if (coord.x == x) return '│'
	if (coord.y == y) return '─'
	return (coord.x + coord.y) % 2 ? '·' : ' '
}

import { drawInfo } from '/src/modules/drawbox.js'
//这个工具是写死的，只能输出这些内容
export function post(context, cursor, buffer) {
	drawInfo(context, cursor, buffer, {
		color : 'white', backgroundColor : 'royalblue', shadowStyle : 'gray'
	})
}