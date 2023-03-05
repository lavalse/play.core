const density = 'ABCxyz '

export function main(coord, context) {
	return (coord.x===coord.y || coord.x+coord.y===15)?"▄":"░";
}