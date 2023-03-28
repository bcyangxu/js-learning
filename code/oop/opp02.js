/*
浅拷贝和深拷贝
*/
const obj1 = {
	name:'yangxu',
	age:21,
	info:{
		desc:'test',
	}
}

const obj2 = {}

for (let key in obj1){
	obj2[key] = obj1[key]
}
obj1.name = 'xiaodi'
console.log(obj1)
// 当修改obj1的第二层数据时，obj2也会被改变，for in 是浅拷贝
obj1.info.desc = 'hello'
console.log(obj2)

//Object.assgin() 方法
const obj3 = Object.assign({},obj1)
// 另一种写法
const obj4 = {}
Object.assign(obj4,obj1)
obj1.info.desc = 'hello world'
console.log('obj3:'+JSON.stringify(obj3))
console.log('obj4:'+JSON.stringify(obj4))

let p1 = {name:'yangxu',age:22}
let p2 = {name:'xiaodi',city:'yidu',age:28}
let p3 = {}
// 将p2的值追加到p1中，如果属性名相同，则p1中的值会被p2的覆盖
Object.assign(p1,p2)
console.log(p2)

// 深拷贝实现
let test1 = {
	name:'yangxu',
	age:21,
	info:{
		desc:'hello'
	},
	color:['red','blue','green']
}

let test2 = {}

deepCopy(test2,test1)
console.log(test2)
test1.info.desc = 'github'
console.log(test2)

function deepCopy(newObj,oldObj) {
	// 遍历对象
	for(let key in oldObj) {
		// 获取属性值
		let item = oldObj[key]
		// 判断这个值是否是数组
		if(item instanceof Array) {
			newObj[key] = []
			deepCopy(newObj[key],item)
		}else if(item instanceof Object) {
			// 判读这个值是否是对象
			newObj[key] = {}
			deepCopy(newObj[key],item)
		}else {
			// 简单数据类型直接赋值
			newObj[key] = item
		}
	}
}