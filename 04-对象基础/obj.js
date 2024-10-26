/**
 * for...in遍历对象中的可枚举的属性
 * 整数属性会被排序，其他则是书写的顺序
 */
let obj = {
    test: undefined,
    name: 'scott',
    age: 32,
    1: 1,
    2: 2,
    0: 0
}
for(let key in obj) {
    console.log(key);
}

/**
 * 对象拷贝
 */
let obj2 = {
    name: 'scoot',
    age: 32,
    addr: {
        province: 'bj',
        city: 'bj'
    },
    say() {
        console.log('hhh');
    }
}
let obj3 = {}
Object.assign(obj3, obj2); //浅拷贝
console.log('拷贝后的值', obj3);

/**
 * 
 * @param {object} source 
 * @param {object} target 
 */
function deepClone(source, target) {
    for(let key in source) {
        if (typeof source[key] === 'object') {
            target[key]  = deepClone(source[key], {})
        } else{
            target[key] = source[key];
        }
    }
    return target;
}

let newObj = deepClone(obj2, {})
newObj.addr.province = 'sc'
console.log(obj2);
console.log(newObj);



/**
 * this的指向
 */
let o = {
    name: 'scoot',
    say: function() {
        console.log('out ' + this.name);
        let f = () => {
            console.log('inner ' + this.name);
        }
        f()
    }
}
o.say()

function Person() {
    console.log(new.target); //没有通过new调用返回undefined, 通过new调用返回函数本身
    this.name = 'scottt'
}
Person()
let p = new Person()
console.log(p.name2?.length); //可选链
p.say?.() //方法可能不存在

/**
 * symbol
 */
let sl = Symbol()
console.log(typeof sl);
console.log(sl.toString);

let sl1 = Symbol('id')
let sl2 = Symbol('id')
console.log(sl1 === sl2);

let sb = Symbol('id')
let so = {
    name: 'scott',
    age: 32,
    [sb]: 'sb' //for...in中不会出现
}
for(let k in so) {
    console.log(k);
}
let arr = Object.keys(so) //跳过symbol
console.log(arr);
