/**
[header]
@author ertdfgcvb
@title  10 PRINT
@desc   10 PRINT CHR$(205.5+RND(1)); : GOTO 10
See also:
https://10print.org
*/

const a = 0.5;

// Run the program only once
export const settings = {
	once : true
}

export function main() {
	// Also try: ╩ ╦ or ▄ ░
	// or any combination from
	// https://play.ertdfgcvb.xyz/abc.html#font:characterset
	return Math.random() < 0.5 ? '░' : '▄'
}

//Note: 这里单单只在初始化的时候刷新了一下，如何update呢？
