const pattern = "ABCDabcd##";
const colors = ['mediumvioletred', 'gold', 'orange'];

export const settings = {
  backgroundColor: "black",
  color:"gray",
  fontSize:"2em",
  renderer:"text",
  allowSelect:"true"
}

export function pre(context){
  if (context.frame % 10 == 0) {
		console.log(context.metrics.aspect)
	}
}

export function main(coord, context, cursor, buffer) {
	const x = Math.floor(cursor.x) 
	const y = Math.floor(cursor.y)
  const index = coord.index % pattern.length
  const colorIndex = coord.index % colors.length

	if (coord.x == x && coord.y == y) return 'X'
	if (coord.x == x) return '|'
	if (coord.y == y) return '-'
	return {
    char: pattern[index],
  }
}

