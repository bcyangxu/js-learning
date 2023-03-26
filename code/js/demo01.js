// ECMAScript 2017 添加了两个 String 方法：padStart 和 padEnd，以支持在字符串的开头和结尾进行填充。

let str = '5'
console.log(str.padStart(4,0))
console.log(str.padEnd(4,'a'))

// 对象条目
// Object.entries() 方法返回对象中键/值对的数组
const person = {
    name:'yangxu',
    age:21,
    sex:'男'
}

console.log(Object.entries(person))

// Async函数

async function test() {
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("I love You !!"); }, 3000);
      });
    console.log(await myPromise)
}

test()