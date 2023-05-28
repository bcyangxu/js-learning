<template>
    <div>
        <input type="text" ref="input">
        <input type="text" ref="input2" v-if="isShow">
        <button @click="isShow = !isShow">change</button>
    </div>
    <div>
        <h2>v-for中的模板引用</h2>
        <ul>
            <li v-for="item in list" ref="itemRefs">{{ item }}</li>
        </ul>
    </div>
    <div>
        <h2>函数模板引用</h2>
        <input type="text" :ref="(el)=>{ funRefs = el}">
        <p>{{ funRefs}}</p>
    </div>
    <div>
        <h2>子组件</h2>
        <Child ref="child"></Child>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import Child from './Child.vue'
const input = ref(null)
const input2 = ref(null)
const isShow = ref(true)

onMounted(()=>{
    input.value.focus()
    console.log(itemRefs.value.map(i => i.textContent));
    // child.value 是 <Child/>  组件的实例
    console.log(child.value);
})
// 只能在组件挂载后才能访问模板引用，如果想在模板的表达式上访问input
// 在初次渲染时会是null，这是因为在初次渲染前这个元素还不存在
watchEffect(()=>{
    if(input2.value){
        input2.value.focus()
    } else {
        alert('input2不存在')
    }
})

const list = ref([
    'java',
    'python',
    'golang'
])
// ref数组并不保证和原数组相同的顺序
const itemRefs = ref([])

const funRefs = ref(null)

// 子组件引用
const child = ref(null)
</script>
<style scoped>

</style>