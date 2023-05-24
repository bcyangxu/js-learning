// 类型断言 vs 泛型
// 通过给getCacheData函数添加了一个泛型<T>,可以更加规范的实现对getCacheData返回值的约束
// 同时也去除掉了代码中的any，是最优的方案
function getCacheData2<T>(key:string): T {
    return (window as any).cache[key]
}

interface Snake{
    name:string,
    run(): void
}

const s = getCacheData2<Snake>('tom')
s.run()