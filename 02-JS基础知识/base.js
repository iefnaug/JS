/**
 * 变量声明
 */
let a = '变量'
const A = '常量'

/**
JavaScript 中有八种基本的数据类型。

七种原始数据类型（基本数据类型）：
number 用于任何类型的数字：整数或浮点数，在 ±(253-1) 范围内的整数。
bigint 用于任意长度的整数。
string 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。
boolean 用于 true 和 false。
null 用于未知的值 —— 只有一个 null 值的独立类型。
undefined 用于未定义的值 —— 只有一个 undefined 值的独立类型。
symbol 用于唯一的标识符。
以及一种非原始数据类型（复杂数据类型）：
object 用于更复杂的数据结构。
 */

console.log(`${a} - ${A}`);


/**
 * 类型转换
 */
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number('123')); //123
console.log(Number('123a')); //NaN

/**
 * Boolean类型转换
 */
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(' '));


/**
 * 运算
 */
console.log(2 ** 3); //8
console.log("2" + 3);

let num = 2
console.log(++num);
console.log(num ?? 1000); //如果不是null或undefined返回自身，否则返回其他
console.log(null || 1000); //返回第一个真值


/**
 * 控制流
 */
console.log('------------控制流');
g:
for(let i=0; i<10; i++) {
    for(let j=0; j<10; j++) {
        if (j == 5) {
            break g;
            // continue g;
        }
        console.log(i, j);
    }
}

/*
switch
*/
let n = '1'
switch(n) { //switch使用===比较
    case 1:
        console.log(1);
        break;
    default:
        console.log('default');
        break;
}

/*
函数
*/
function fn(p1, p2 = 'test') {
    console.log(p1, p2);
}
fn(1, 2)