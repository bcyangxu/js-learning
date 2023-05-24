"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
// 枚举成员会被赋值为从0开始递增的数字,同时也会对枚举值到枚举名进行反向映射
console.log(Days["Fri"]);
console.log(Days[0]);
// 手动赋值
var Days2;
(function (Days2) {
    Days2[Days2["Sun"] = 7] = "Sun";
    Days2[Days2["Mon"] = 1] = "Mon";
    Days2[Days2["Tue"] = 2] = "Tue";
    Days2[Days2["Wed"] = 3] = "Wed";
    Days2[Days2["Thu"] = 4] = "Thu";
    Days2[Days2["Fri"] = 5] = "Fri";
    Days2[Days2["Sat"] = 6] = "Sat";
})(Days2 || (Days2 = {}));
// 未手动赋值的枚举会接着上一个枚举项递增
console.log(Days2['Sun']);
console.log(Days2['Mon']);
console.log(Days2['Tue']);
console.log(Days2['Sat']);
// 常数项和计算所得项
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = "blue".length] = "Blue";
})(Color || (Color = {}));
// 上面的例子不会报错，但是如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = "green".length] = "Green";
    Color2[Color2["Blue"] = void 0] = "Blue";
})(Color2 || (Color2 = {}));
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员
let directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
// declare 定义的类型智慧用于编译时的检查，编译结果中会被删除
let directions2 = [Direction2.Up, Direction2.Down, Direction2.Left, Direction2.Right];
let directions3 = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
