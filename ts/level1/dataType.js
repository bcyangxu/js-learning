/**
 * 原始数据类型
 * JavaScript的类型分为两种：原始数据类型和对象类型
 * 原始数据类型包含：布尔值，数值，字符串，null，undefined 以及ES6中的Symbol，ES10中的BIgInt
 *
 */
// 1.布尔类型 boolean
let isDone = false;
console.log(isDone);
let createdByNewBoolean = new Boolean(1);
console.log(createdByNewBoolean);
let createByBoolean = Boolean(1);
console.log(createByBoolean);
// 2.数值 number
let num1 = 1;
let hex = 0xf00d;
// ES6中的二进制表示法
let binary = 0b1010;
// ES6中的八进制表示法
let octal = 0o744;
let notNumber = NaN;
let infintyNumber = Infinity;
// 字符串 string
let myName = 'yangxu';
let myAge = 22;
// 模板字符串
let sentence = `Hello,my name is ${myName},I am ${myAge} years old.`;
// 空值 void
function alertName() {
    alert('My name is Tom');
}
// null undefined类型
let u = undefined;
let n = null;
// null 和 undefined是所有类型的子类型，可以赋值给number类型的变量
let num2 = null;
