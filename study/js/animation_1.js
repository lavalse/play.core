const density = 'ABCxyz '
export function main(coord, context){
	const t = context.time * 0.001
	const x = coord.x
	const y = coord.y
	const o = Math.sin(t) * 20
	const i = Math.round(Math.abs(x-o)) % density.length
	return density[i]
}