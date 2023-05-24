import { Dir } from "fs"

enum Days {Sun,Mon,Tue,Wed,Thu,Fri,Sat};
// 枚举成员会被赋值为从0开始递增的数字,同时也会对枚举值到枚举名进行反向映射
console.log(Days["Fri"])
console.log(Days[0])

// 手动赋值
enum Days2 {Sun = 7,Mon = 1,Tue,Wed,Thu,Fri,Sat}
// 未手动赋值的枚举会接着上一个枚举项递增
console.log(Days2['Sun'])
console.log(Days2['Mon'])
console.log(Days2['Tue'])
console.log(Days2['Sat'])

// 常数项和计算所得项
enum Color {Red,Green,Blue = "blue".length}
// 上面的例子不会报错，但是如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
enum Color2 { Red,Green = "green".length,Blue}

// 常数枚举
// 常数枚举是使用const enum定义的枚举类型
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员
let directions = [Directions.Up,Directions.Down,Directions.Left,Directions.Right]
// 上例的编译结果： var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

// 外部枚举
// 使用declare enum 定义的枚举类型
declare enum Direction2 {
    Up,
    Down,
    Left,
    Right
}
// declare 定义的类型智慧用于编译时的检查，编译结果中会被删除
let directions2 = [Direction2.Up,Direction2.Down,Direction2.Left,Direction2.Right]

// 外部枚举与生命语句一样，常出现在生命文件中
// 同时使用declare和const也是可以的
declare const enum Direction3 {
    Up,
    Down,
    Left,
    Right
}

let directions3 = [Direction3.Up,Direction3.Down,Direction3.Left,Direction3.Right]