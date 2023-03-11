export function main(coord, context, cursor, buffer) {

	const dx = Math.abs (cursor.x - coord.x);
	const dy = Math.abs (cursor.y - coord.y)/context.metrics.aspect;

	const index = Math.floor(Math.max(dx, dy));

	return ".-=:abc123?xyz*;%+,"[ index % 30 ]
}