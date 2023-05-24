function testStu(stu) {
    return stu;
}
// 类型断言vs类型转换
function toBoolean(something) {
    return something;
}
console.log(toBoolean(1)); // 输出1，类型断言不是类型转换，不会真的影响到变量的类型
function toBoolean1(something) {
    return Boolean(something);
}
console.log(toBoolean1(1)); // 输出true
// 类型断言 vs 类型声明
function getData(key) {
    return window.cache[key];
}
const tiger = getData('tom');
// 使用 as Tiger 将any类型断言为 Tiger 类型
const tiger2 = getData('tom');
// 通过类型声明的方式，将tiger声明为Tiger,
// 然后再将any类型的getData('tom')赋值给Tiger类型的tiger
tiger.run();
