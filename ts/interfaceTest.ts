
interface Person{
    name:string
    age?:number
    [propName:string]:any
    readonly cb:() => boolean
}
// 同名会重合
interface Person{
    school:string
}

interface Student extends Person{
    classNO:number
}


let p:Person = {
    name:'yangxu',
    school:'HBNU',
    address:'Hubei',
    cb:() => {
        return false
    }
}


interface Fn {
    (name:string):number[]
}

const fn:Fn = function(name:string){
    return [1]
}
