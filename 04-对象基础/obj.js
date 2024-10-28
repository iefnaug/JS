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
 * Symbol
 */
let sy = Symbol.for('id')
let sy2 = Symbol.for('id');
console.log(sy === sy2);
console.log(Symbol.keyFor(sy));

let so = {
    name: 'test',
    [Symbol('age')]: 32
}
let keys = Object.getOwnPropertySymbols(so)
console.log(keys);
keys = Reflect.ownKeys(so)
console.log(keys);


/**
 * 对象到原始类型的转换
 * https://zh.javascript.info/object-toprimitive
 */
console.log(Symbol.toPrimitive.toString());

console.log(Symbol.toPrimitive === Symbol.toPrimitive);


let user = {
    name: "John",
    money: 1000,
    /*
    三种hint: string, number, default
    "string"（对于 alert 和其他需要字符串的操作）
    "number"（对于数学运算）
    "default"（少数运算符，通常对象以和 "number" 相同的方式实现 "default" 转换）
    */
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
        // return {} //必须返回原始值
    },
    // valueOf() {
    //     console.log('call valueOf');
    // },
    // toString() {
    //     console.log('call toString');
    // }
};
console.log(user + '');
console.log(+user);
console.log(100 + user);



