/**
 * 在 JavaScript 中有 7 种原始类型：string，number，bigint，boolean，symbol，null 和 undefined。
 */
let sy = Symbol('sy');
console.log(sy, typeof sy);
let bi = 123456789n;
console.log(bi, typeof bi);

/**
 * 数字类型
 */
let bili = 1_000_000_000;
console.log(bili.toString(8));
let n = 12.345
console.log(n.toFixed(2));

/**
 * 字符串
 */
let s = 'widget'
console.log(s.slice(1, 4));
console.log(s.slice(-2, -1));

/**
 * 数组
 */
let nums = [1,3,5,7,9]
nums.splice(1, 2, 4, 6)
console.log(nums);





