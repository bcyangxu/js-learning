/*
对象的创建&构造函数
*/

// 创建对象的方法: 
// 1.对象字面量
const p1 = {
	name:'yangxu',
	age:22,
	test:{
		id:123,
		tel:'15571736043'
	},
	sayName: function() {
		console.log(this.name)
	}
}

console.log(JSON.stringify(p1))
p1.sayName()

// 2. 工厂模式new Object()
function creactPerson(name,age,gender) {
	var obj = new Object()
	obj.name = name
	obj.age = age
	obj.gender = gender
	obj.sayName = function() {
		console.log(this.name)
	}
	return obj
}

var obj1 = creactPerson('yangxu',21,'男')
var obj2 = creactPerson('test',11,'女')

console.log(obj1)
obj1.sayName()
console.log(obj2)
obj2.sayName()

// 3.利用构造函数

var stu1 = new Student('yangxu')
console.log(stu1)
stu1.say()

var stu2 = new Student('xiaowang')
console.log(stu2)
stu2.say()

function Student(name) {
	this.name = name
	this.say = function() {
		console.log(this.name + '牛逼')
	}
}
