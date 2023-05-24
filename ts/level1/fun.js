function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
const add2 = (a = 10, b = 20) => a + b;
console.log(add2(2, 3));
console.log(add2());
// 函数表达式
let mySum = function (x, y) {
    return x + y;
};
// 上面的代码只对等号右侧的匿名函数进行了类型定义,
// 而等号左边的mySum，是通过赋值操作进行类型推断出来的
let mySum2 = function (x, y) {
    return x + y;
};
let mySearch;
mySearch = function (source, substring) {
    return source.search(substring) !== -1;
};
// 可选参数 可选参数必须接在必需参数的后面，可选参数后面不允许再出现必需参数
// 参数默认值，ts会将添加了默认值的参数识别为可选参数
function buildName(firstName = 'yang', lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
let tomcat = buildName('tom', 'cat');
let tom = buildName('tom');
// 剩余参数
function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    });
}
let arr1 = [];
push(arr1, 1, 2, 3);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
