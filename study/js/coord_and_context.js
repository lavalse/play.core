const density = 'ABCxyz '

export function main(coord, context) {
	const index = (coord.x + coord.y + context.frame ) % density.length;
	return density[index];
}