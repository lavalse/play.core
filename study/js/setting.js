const pattern = "abcdABCD";

export function main(coord, context, cursor, buffer) {
	const x = Math.floor(cursor.x) 
	const y = Math.floor(cursor.y)
  const index = coord.index % pattern.length

	if (coord.x == x && coord.y == y) return '┼'
	if (coord.x == x) return '│'
	if (coord.y == y) return '─'
	return pattern[index];
}

