<template lang="">
    <div>
        {{state.count}}
        <button @click="increment">add</button>
        <button @click="mutateDeeply">mutateDeeply</button>
    </div>
</template>
<script setup>
import { reactive } from 'vue';

const state = reactive({ count:0 })

function increment() {
    state.count++
}

// 深层响应式
const obj = {
    nested: { count:0 },
    arr:['foo','bar']
}

function mutateDeeply() {
    obj.nested.count++
    obj.arr.push('baz')
    console.log(obj)
}

// 响应式代理vs原始对象
// reactive() 返回的是一个原始对象的proxy，它和原始对象是不对等的
const raw = {}
const proxy = reactive(raw)
console.log(proxy === raw)
</script>
<style lang="">
    
</style>