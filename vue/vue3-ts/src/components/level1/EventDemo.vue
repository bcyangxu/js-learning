<template>
    <div>
        <div>
            <h4>内联事件处理器</h4>
            <button @click="count++">Add 1</button>
            <p>Count is {{ count }}</p>
        </div>
        <div>
            <h4>方法事件处理器</h4>
            <button @click="greet">greet</button>
        </div>
        <div>
            <h4>内联处理器中调用方法</h4>
            <button @click="sayHi('hello')">Hello</button>
            <button @click="sayHi('bye')">bye</button>
        </div>
        <div>
            <h4>在内联处理器中访问事件参数</h4>
            <button @click="warn('Form cannot be submitted yet',$event)">Submit</button>
            <!-- 在内联中使用箭头函数 -->
            <button @click="(event) => warn('Form cannot be submitted yet',$event)">Submit</button>
        </div>
        <div>
            <h4>事件修饰符</h4>
            
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
const name = ref('Vue3')
const greet = () => {
    alert(`Hello ${name.value}!`)
    if(event) {
        alert(event.target.tagName)
    }
}

const sayHi = (msg:string) => {
    alert(msg)
}

const warn = (message: string,event) => {
    if(event) {
        event.preventDefault()
    }
    alert(message)
}
</script>
<style scoped>

</style>