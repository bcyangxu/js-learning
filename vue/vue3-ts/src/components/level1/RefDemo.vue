<template>
    <h4>ref</h4>
    <p>接受一个内部值并返回一个响应式可变的ref对象，ref对象仅有一个.value property，指向该内部值</p>
    <div>
        <button @click="changeMsg">change</button>
        <div>{{ message }}</div>
        <div>{{ notRef }}</div>
    </div>
    <h4>shallowRef</h4>
    <p>创建一个跟踪自身.value变化的ref,但是不会使其值也变成响应式的</p>
    <p>修改其值是非响应式的这样是不会改变的</p>
    <div>
        <button @click="changeName">changeName</button>
        <button @click="changeStu">changeStu</button>
        <div>{{  stu }}</div>
    </div>
    <h4>triggerRef</h4>
    <p>强制更新页面DOM</p>
    <div>
        <button @click="changeStuByTriggerRef">change</button>
        <div>{{ stu }}</div>
    </div>
    <h4>customRef</h4>
    <p>customRef是个工厂函数要求我们返回一个对象，并且实现get和set适合去做防抖之类的</p>
    <div>
        <div>{{ myName }}</div>
        <button @click="changeMyName">customRef</button>
    </div>
</template>
<script setup lang="ts">
import { ref,Ref,isRef,shallowRef,triggerRef,customRef } from 'vue'

let message: Ref<string> = ref('hello')
let notRef:number = 123
const changeMsg = () => {
    message.value = 'hello world!'
    console.log(message);
    console.log(isRef(message));
    console.log(isRef(notRef));
}

type Obj = {
    name: string
}
let stu: Ref<Obj> = shallowRef({
    name:'yangxu'
})

const changeName = () => {
    stu.value.name = 'xu yang'
    console.log(stu) 
}
// 这样可以被监听到的修改value
const changeStu = () => {
    stu.value = { name: 'xu yang' }
}

const changeStuByTriggerRef = () => {
    stu.value.name = 'xu yang'
    triggerRef(stu)
}

function myRef<T = any>(value: T) {
    let timer:any;
    return customRef((track,trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newVal) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    console.log('触发了set');
                    value = newVal
                    trigger()
                },500)
            }
        }
    })
}
const myName = myRef<string>('yangxu')

const changeMyName = () => {
    myName.value = 'xu yang'
}
</script>
<style scoped>
    
</style>