<template lang="">
    <div>
        Mouse position is at: {{x}},{{y}}
    </div>
    <div v-if="error">Error:{{error.message}}</div>
    <div v-else-if="data">Data loaded: <p>{{data}}</p></div>
    <div v-else>Loading...</div>
</template>
<script setup>
import { useMouse } from './mouse'
// import { ref } from 'vue';
import { useFetch } from './fetch.js'
const { x,y } = useMouse()

// const data = ref(null)
// const error = ref(null)

// fetch('https://v1.hitokoto.cn/?encode=json&lang=cn')
//     .then((res) => res.json())
//     .then((json) => (data.value = json))
//     .catch((err) => (error.value = err))
const { data,error } = useFetch('https://v1.hitokoto.cn/?encode=json&lang=cn')
</script>
<style lang="">
    
</style>