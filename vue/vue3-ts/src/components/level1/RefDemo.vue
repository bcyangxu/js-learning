<template>
    <h4>ref</h4>
    <p>接受一个内部值并返回一个响应式可变的ref对象，ref对象仅有一个.value property，指向该内部值</p>
    <div>
        <button @click="changeMsg">change</button>
        <div>{{ message }}</div>
        <div>{{ notRef }}</div>
    </div>
</template>
<script setup lang="ts">
import { ref,Ref,isRef } from 'vue'

let message: Ref<string> = ref('hello')
let notRef:number = 123
const changeMsg = () => {
    message.value = 'hello world!'
    console.log(message);
    console.log(isRef(message));
    console.log(isRef(notRef));
}
</script>
<style scoped>
    
</style>