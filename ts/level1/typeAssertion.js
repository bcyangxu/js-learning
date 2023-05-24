/**
 * 类型断言
 * 语法: 值 as 类型 或 <类型>，建议使用前者
 */
// 当ts不确定一个联合类型的变量到底是哪个类型时，
// 我们只能访问此联合类型的所有类型中共有的属性和方法
function getName(animal) {
    return animal.name;
}
// 使用类型断言，将animal断言成Fish，可以解决animal.fish时报错的问题
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
function swim(animal) {
    animal.swim();
}
const candy = {
    name: 'tom',
    run() { console.log('run'); }
};
swim(candy);
/**
 * 编译不会报错，但是运行会报错
 * TypeError: animal.swim is not a function
 * 原因： (animal as Fish).swim() 这段代码隐藏了animal可能为Cat的情况，将animal断言为Fish了
 * 而ts编译器信任了我们的断言，在调用swim（）是没有编译错误，一旦传入的参数是Cat类型的变量
 * 没有swim方法，就会导致运行时错误
 */
// 2.将一个父类断言为更加具体的子类
class ApiError extends Error {
    constructor() {
        super(...arguments);
        this.code = 0;
    }
}
class HttpError extends Error {
    constructor() {
        super(...arguments);
        this.statusCode = 200;
    }
}
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
// 3. 将任何一个类型断言为any
const foo = 1;
// foo.length = 1 报错，不存在的属性length
// window.foo = 1 将window上添加一个属性foo，但是ts报错
// 此时可以使用as any临时将window断言为any类型
// 在any类型的变量上，访问任何属性都是允许的
window.foo = 1;
// 4. 将any断言为一个具体的类型
function getCacheData(key) {
    return window.cache[key];
}
const dog = getCacheData('tom');
dog.run();
/**
 * 上面的例子中，Bird包含了Animal中的所有属性，除此之外还有一个额外的方法run
 * ts并不关心Cat和Animal之间定义时的关系，只会看它们最终的结构有什么关系
 * 因此它与Cat extends Animal是等价的
 *  interface Cat extends Animal{
 *      run(): void;
 *  }
 */
let superMan = {
    name: "Huazhu",
    fly: () => { console.log('fly'); }
};
// Animal兼容Cat，它们可以互相进行类型断言
let animal = superMan;
function testAnimal(animal) {
    return animal;
}
function testCat(cat) {
    return cat;
}
/**
 * 综上所述：
 *  - 联合类型可以被断言为其中一个类型
 *  - 父类可以被断言为子类
 *  - 任何类型都可以被断言为any
 *  - any可以被断言为任何类型
 *  - 要使得A能够被断言为B，只需要A兼容B或B兼容A
 *
 */
