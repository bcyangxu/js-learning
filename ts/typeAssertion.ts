/**
 * 类型断言
 * 语法: 值 as 类型 或 <类型>，建议使用前者
 */

// 类型断言的用途
// 1. 将一个联合类型断言为其中一个类型
interface Cat {
    name: string
    run(): void
}

interface Fish{
    name: string
    swim(): void
}

// 当ts不确定一个联合类型的变量到底是哪个类型时，
// 我们只能访问此联合类型的所有类型中共有的属性和方法
function getName(animal: Cat | Fish) {
    return animal.name
}

// 使用类型断言，将animal断言成Fish，可以解决animal.fish时报错的问题
function isFish(animal:Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function'){
        return true
    }
    return false
}

function swim(animal: Cat | Fish) {
    (animal as Fish).swim()
}

const candy:Cat = {
    name:'tom',
    run() { console.log('run') }
}

swim(candy)
/**
 * 编译不会报错，但是运行会报错
 * TypeError: animal.swim is not a function 
 * 原因： (animal as Fish).swim() 这段代码隐藏了animal可能为Cat的情况，将animal断言为Fish了
 * 而ts编译器信任了我们的断言，在调用swim（）是没有编译错误，一旦传入的参数是Cat类型的变量
 * 没有swim方法，就会导致运行时错误
 */

// 2.将一个父类断言为更加具体的子类
class ApiError extends Error {
    code: number = 0
}

class HttpError extends Error {
    statusCode: number = 200
}

function isApiError(error:Error) {
    if (typeof(error as ApiError).code === 'number') {
        return true
    }
    return false
}