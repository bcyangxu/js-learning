<script setup>
import { ref,reactive } from 'vue'
const count = ref(0)

function increment() {
    count.value++
}

const object = { foo: ref(1) }
const { foo } = object

// 当一个ref被嵌套在一个响应式对象中，作为属性被访问或更改时
// 它会自动解包，因此会表现得和普通属性一样
const state = reactive({
    count
})
console.log(state.count)
state.count = 1
console.log(count.value)

// 如果将一个新的ref赋值给一个关联了已有的ref的属性，那么它会替换掉旧的ref
const otherCount = ref(2)
state.count = otherCount
console.log(state.count)
console.log(count.value)

// 当ref作为响应式数组orMap这种原生集合类型的元素访问时，不会进行解包
const books = reactive([ref('Vue 3 Guide')])
console.log(books[0].value)
const map = reactive(new Map([['count',ref(0)]]))
console.log(map.get('count').value)
// console.log(count)
// console.log(count.value)

// count.value++
// console.log(count.value)

// const objectRef = ref({ count: 0 })
// objectRef.value = { count: 1 }

</script>
<template lang="">
    <button @click="increment">{{count}}</button>
    <p>{{object.foo + 1}}</p>
    <p>{{foo + 1}}</p>
    <p>{{object.foo}}</p>
 </template>