const density = 'ABCxyz '
export function main(coord, context){
	const t = context.time * 0.001
	const x = coord.x
	const y = coord.y
	const ox = Math.sin(t) * 20
	const oy = Math.sin(t*2) * 10
	const i = Math.round(Math.abs(x-ox ) + Math.abs(y-oy)) % density.length
	return density[i]
}