
export function main(coord, context) {
	const condition_1 = () => coord.x - context.cols / 2 === coord.y;
	const condition_2 = () => coord.x  === - coord.y + context.cols / 2 - 1;
	const condition_3 = () => coord.x  === context.cols / 2;
	const condition_4 = () => coord.y  === context.rows / 2;

	return condition_1()||condition_2()||condition_3()||condition_4()?"▄":"░";
}