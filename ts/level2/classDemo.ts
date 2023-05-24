import { log } from "console";

// 类  class
class Animal{
    public name;
    private age;
    constructor(name){
        this.name = name;
    }
    sayHi() {
        return  `My name is ${this.name}`;
    }
}

let fly = new Animal('jack');
console.log(fly.name);
console.log(fly.sayHi());
fly.name = 'Bob'
console.log(fly.name);
// fly.age = 12; 报错，无法访问