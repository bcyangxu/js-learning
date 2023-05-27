<template>
    <div>
        <h3>条件渲染</h3>
        
        <button @click="awesome = !awesome">toggle</button>
        <p v-if="awesome">Vue is awesome!</p>
        <p v-else>shit!</p>
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
let awesome = ref(true)

</script>
<style scoped>

</style>