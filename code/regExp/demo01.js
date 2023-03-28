/**
 * 正则表达式
 */

// 1.使用构造函数创建正则表达式的对象
var reg = new RegExp('a') // 检查字符串中是否含有a
// 第二个参数为匹配模式，i 忽略大小写；g 全局匹配
var reg1 = new RegExp('a','i')

var str1 = 'yangxu'
var str2 = 'hello world'
var str3 = 'JAVA'

console.log(reg.test(str1))
console.log(reg.test(str2))

console.log(reg.test(str3))
console.log(reg1.test(str3))

// 2.使用字面量创建正则表达式
var reg2 = /A/i
console.log(typeof reg2)
console.log(reg2.test(str3))