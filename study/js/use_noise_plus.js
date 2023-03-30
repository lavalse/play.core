

const density = '#¶W;:+=-,._'

export function main(coord, context, cursor, buffer) {
	const t = context.time * 0.0001
	const s = 0.05
	const x = coord.x * s
	const y = coord.y * s / context.metrics.aspect + t
	const i = Math.floor((openSimplex.noise3D(x, y, t) + 0.5) * density.length)
	return density[i]
}
