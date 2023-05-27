<template lang="">
    <div>
        <button @click="change">change</button>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'

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
</script>
<style scoped>
    
</style>