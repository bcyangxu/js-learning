/**
 * 对象的高级操作
 */

// Object.freeze() 冻结对象
const test = {
	name:'dog',
	age:21
}
// 冻结对象
Object.freeze(test)
// 修改无效
test.name = 'dogZeng'

console.log(test)