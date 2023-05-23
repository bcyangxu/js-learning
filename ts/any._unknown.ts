// any任意类型 unknown不知道的类型
// 1.top type 顶级类型 any unknown
// 2.Object
// 3.Number String Boolean
// 4.number string boolean
// 5.  1 'yangxu' false
// 6. never
// unknown 只能赋值给自身or any类型
// unknown 没有办法读任何属性，方法也不可以调用
// unknown 比 any 更加安全
let a:any = 1
let b:number = 5
a = b
b = a

let c:unknown = 2
let d:unknown = 3
a = c

a = 'yangxu'

