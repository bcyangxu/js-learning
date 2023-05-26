<template>
    <h4>toRef</h4>
    <p>如果原始对象是非响应式的就不会更新视图，数据是会变化的</p>
    <div>
        <button @click="change">change</button>
        {{state}}
    </div>
    <p>如果原始对象是响应式的会更新视图,并且改变数据</p>
    <div>
        <button @click="change2">change</button>
        {{ state2 }}
    </div>
    <h4>toRefs</h4>
    <p>批量创建ref对象方便使用</p>

    <h4>toRaw</h4>
    <p>将响应式对象转化为普通对象</p>
    <div>
        <button @click="change4">change</button>
    </div>
</template>
<script setup lang="ts">
import { toRef,toRefs,reactive,toRaw } from 'vue'

const obj = {
    foo: 1,
    bar: 1
}

const state = toRef(obj,'bar')
// bar 转化为响应式对象
const change = () => {
    state.value++
    console.log(obj,state)
}

const obj2 = reactive({
    foo:1,
    bar:1
})

const state2 = toRef(obj2,'bar')

const change2 = () => {
    state2.value++
    console.log(obj2,state2)
}

const obj3 = reactive({
    foo:1,
    bar:1
})

let { foo,bar } = toRefs(obj3)
foo.value++
console.log(foo,bar)


const obj4 = reactive({
    foo:1,
    bar:1
})
// 将响应式对象转化为普通对象
const state4 = toRaw(obj4)
const change4 = () => {
    console.log(obj4)
    console.log(state4)
}
</script>
<style scoped>
    
</style>