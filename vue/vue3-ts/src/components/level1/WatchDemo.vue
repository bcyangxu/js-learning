<template>
    <div>
        <div>
            <button @click="change">change</button>
            {{ message }}
        </div>
        <div>
            <p>Ask a yes/no question</p>
            <input type="text" v-model="question">
            <p>{{ answer }}</p>
        </div>
        <div>
            <input type="number" v-model="x">
            <input type="number" v-model="y">
        </div>
        <div>
            <p>{{ data }}</p>
            <button @click="todoId++">change</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch, reactive, watchEffect } from 'vue'

let message = ref({
    nav:{
        bar:{
            name:'yangxu'
        }
    }
})

watch(message,(newVal,oldVal) => {
    console.log('新的值：',newVal);
    console.log('旧的值：',oldVal);
},{
    immdiate:true,
    deep:true
})

const change = () => {
    message.value.nav.bar.name = 'xu yang'
}

const question = ref('')
const answer = ref('问题需要包含引号')

watch(question, async (newQ,oldQ) => {
    if(newQ.indexOf('?') > -1) {
        answer.value = 'Thinking...'
        try{
            const res = await fetch('https://yesno.wtf/api')
            answer.value = (await res.json()).answer
        } catch(err) {
            answer.value = 'api请求错误' + err 
        }
    }
})

const x = ref(0)
const y = ref(0)
// 单个ref
watch(x,(newX) => {
    console.log(`x is ${newX}`)
})
// getter函数
watch(
    ()=> x.value + y.value,
    (sum) => {
        console.log(`sum of x + y is: ${sum}`)
    }
)
// 多个来源组成的数组
watch([x,() => y.value],([newX,newY]) => {
    console.log(`x is ${newX},y is ${newY}`)
})

const obj = reactive({ count: 0 })
watch(
    () => obj.count,
    (count) => {
    console.log(`count is ${count}`)
})
setTimeout(()=>{
    obj.count = 1
},1000)

// 即时回调的侦听器
const num = ref(1)
watch(num,(newVal,oldVal) => {
    console.log(`old: ${oldVal},new: ${newVal}`)
},{immediate:true})

// watchEffect()
const todoId  =  ref(1)
const data = ref(null)
// watch(todoId,async () => {
//     const res = await fetch(
//         `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
//     )
//     data.value = await res.json()
// },{immediate:true})
// 简化
watchEffect(async () => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    )
    data.value = await res.json()
})
</script>
<style scoped>
    
</style>