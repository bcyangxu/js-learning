/**
 *  联合类型表示取值可为多种类型中的一种
 */
let myNum1;
myNum1 = 'six';
myNum1 = 6;
// 访问联合类型的属性或方法 当ts不确定一个联合类型的变量到底是哪个类型,只能访问此联合类型的共同属性
function getString(something) {
    return something.toString();
}
// 联合类型变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let myNum2;
myNum2 = 'six';
console.log(myNum2.length);
myNum2 = 3;
console.log(myNum2.toString());
