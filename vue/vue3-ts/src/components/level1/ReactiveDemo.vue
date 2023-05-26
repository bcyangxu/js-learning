<template>
    <h4>reactive</h4>
    <p>用来绑定复杂的数据类型，例如：对象，数组</p>
    <div>
        {{ person }}
    </div>
    <div>
       <button @click="addNums">addNums</button>
       <button @click="pushNums">pushNums</button>
       <div>{{ nums }}</div>
    </div>
    <div>
        <button @click="addByObj">addByObj</button>
        <div>{{ numbers }}</div>
    </div>
    <h4>readonly</h4>
    <p>拷贝一份proxy对象将其设置为只读</p>
    <h4>shallowReactive</h4>
    <p>只能对浅层数据，如果是深层数据只会改变值，不会改变视图</p>
    <div>
        <button @click="change1">test1</button>
        <button @click="change2">test2</button>
        <div>{{state}}</div>
    </div>
</template>
<script setup lang="ts">
import { reactive, readonly, shallowReactive } from 'vue';
// let person = reactive('yangxu') 不能绑定普通类型，会报错
// 用ref绑定复杂数据额离线，底层也是调用的reactive

let person = reactive({
    name: 'yangxu'
})

person.name = 'xu yang'
// 数组异步赋值问题
let nums = reactive<number[]>([])
// 这样赋值不会变化，因为会脱离响应式
const addNums = () => {
    setTimeout(() => {
    nums = [1,2,3]
    console.log(nums)
},1000)
}
// 解决方案1 使用push
const pushNums = () => {
    setTimeout(() => {
        const arr = [1,2,3]
        nums.push(...arr)
        console.log(nums)
    },500)
}
// 解决方法2 套一层对象
type Numbers = {
    list?:Array<number>
}
let numbers = reactive<Numbers>({
    list:[]
})
const addByObj = () =>{
    const arr = [1,2,3]
    numbers.list = arr
    console.log(numbers)
}

// readonly 拷贝一份proxy对象将其设置为只读
const student = reactive({name:'yangxu'})
const copyStu = readonly(student)

copyStu.name = 'xu yang'
console.log(student)
student.name = 'xu yang'
console.log(copyStu);

const obj = {
    a:1,
    first: {
        b:2,
        second: {
            c:3
        }
    }
}

const state = shallowReactive(obj)

function change1() {
    state.a = 7
}

function change2() {
    state.first.b = 8
    state.first.second.c = 9
    console.log(state)
}
</script>
<style scoped>
    
</style>