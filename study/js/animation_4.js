const density = '▄ABCxyz '
export function main(coord, context){
	const t = context.time * 0.001
	const x = coord.x
	const y = coord.y
	const ox = Math.sin(Math.sin(t) * y * 0.2 + x * 0.04 + t ) * 20
	const i = Math.round(Math.abs(x-ox)) % density.length
	return density[i]
}