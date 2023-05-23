// number[]
let arr:number[] = [1,2,3,4,5]

let arr2:Array<string> = ['java','c']


// 定义对象数组使用interface
interface X{
    name:string
    age?:number
}

let arr3:X[] = [{name:'yangxu'},{name:'xuyang'}] 

// 多维数组 number[][]
let arr4:number[][] = [[1],[2],[3]]


// 
let arr5:any[] = [1,'test',false]

// 元组
let arr6:[number,string,boolean] = [1,'test',false]

function testFn(...args:any[]) {
    console.log(args)
}

testFn(1,2,3)