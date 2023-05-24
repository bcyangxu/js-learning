// number[]
let arr = [1, 2, 3, 4, 5];
let arr2 = ['java', 'c'];
let arr3 = [{ name: 'yangxu' }, { name: 'xuyang' }];
// 多维数组 number[][]
let arr4 = [[1], [2], [3]];
// 
let arr5 = [1, 'test', false];
// 元组
let arr6 = [1, 'test', false];
function testFn(...args) {
    console.log(args);
}
testFn(1, 2, 3);
